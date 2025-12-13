import axios from "axios";

export async function askMe(question: string): Promise<string> {
  const res = await axios.post("https://omen-portfolio.onrender.com/ask-me", {
    message: question,
  });
  return res.data.reply;
}
