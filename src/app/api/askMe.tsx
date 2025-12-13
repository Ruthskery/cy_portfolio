import axios from "axios";

export async function askMe(question: string): Promise<string> {
  const res = await axios.post("http://localhost:8000/ask-me", {
    message: question,
  });
  return res.data.reply;
}
