# Architecture

Two subsystems in this portfolio carry non-obvious runtime behavior: the 3D hero
figure and the AI "ask me" assistant. Both are documented here.

## 3D hero — `ChibiStage`

File: `src/app/components/hero/ChibiStage.tsx`

A three.js scene rendered into a single `<canvas>`. It shows a stylized figure that
spins continuously and moves/scales between three modes (`hero`, `contact`, `ai`)
driven by the React `mode` prop.

### Model assets

The figure geometry is loaded at runtime from:

```
public/models/cyril-stylized-portrait.obj
public/models/cyril-stylized-portrait.mtl
```

These files **must be committed and deployed**. If they are missing, the loader never
resolves and only the placeholder capsule is shown. The paths are hardcoded as
`MODEL_PATH` / `MATERIAL_PATH` at the top of the component; `MTLLoader.setResourcePath('/models/')`
resolves any textures the MTL references.

### Lifecycle & the cancellation guard

The scene is built inside a `useEffect(..., [])`. The OBJ/MTL load is **asynchronous**,
so the effect uses a `cancelled` flag:

- On unmount the cleanup sets `cancelled = true`, disposes all managed objects
  (`figure`, `ground`), and disposes the renderer.
- Both loader callbacks check `cancelled` and bail early. A model that finishes
  loading *after* cancellation is disposed via `disposeObject(object)` instead of
  being added to an orphaned scene.

This matters because **Next.js enables React StrictMode by default**, so in dev every
mount runs mount → unmount → mount. Without the guard, the first effect's pending load
resolves after its cleanup has disposed the renderer, causing WebGL errors
(`renderer.render` on a disposed context) and a GPU-memory leak on every remount.

**When editing:** keep any new async work (textures, additional models) behind the same
`cancelled` check, and register disposable objects so cleanup can free them.

## AI "ask me" assistant

Files: `src/app/api/askMe.tsx`, `src/app/components/hero/OmenChat.tsx`

`OmenChat` calls `askMe(question)`, which POSTs to the RAG backend:

```
POST https://omen-portfolio.onrender.com/ask-me
Body: { "message": "<question>" }
```

### Response contract

The backend (`omen_portfolio`, FastAPI) returns a `RagAnswer`:

```json
{
  "answer": "string",
  "citations": [ ... ],
  "grounded": true,
  "confidence": "high" | "medium" | "low"
}
```

`askMe()` returns `res.data.answer` (a string). **The field is `answer`, not `reply`** —
reading the wrong field yields `undefined` in the chat. If the backend contract changes,
update both `askMe.tsx` and the backend's `RagAnswer` model together.

`OmenChat` falls back to scripted responses if the backend call fails, so a backend
outage degrades gracefully rather than breaking the UI.
