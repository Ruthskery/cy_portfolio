# cy_portfolio

Cyril Imperial's personal portfolio — a [Next.js](https://nextjs.org) (App Router) site
featuring a chibi "designer-toy" 3D hero and an AI "ask me" assistant backed by a
retrieval-augmented (RAG) service.

## Tech stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **three.js** — 3D hero figure (`ChibiStage`), loaded from an OBJ/MTL model
- **motion** — UI animation
- **axios** — calls to the AI backend
- **openai** / **lucide-react** / **react-icons** — supporting libraries

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project layout

```
public/models/          OBJ + MTL assets for the 3D hero (required at runtime)
src/app/                App Router entry, pages, and layout
src/app/api/askMe.tsx   Client wrapper for the AI "ask me" backend
src/app/components/hero/ Hero UI: ChibiStage (3D) and OmenChat (AI chat)
```

## AI "ask me" assistant

The chat in the hero (`OmenChat`) calls `askMe()` in
[`src/app/api/askMe.tsx`](src/app/api/askMe.tsx), which POSTs to the
RAG backend (the `omen_portfolio` FastAPI service) and reads the `answer` field of
the response. The backend contract is documented in
[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Documentation

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — how the 3D hero and the AI backend
  integration work, and the gotchas around each.
