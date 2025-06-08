export default async function handler(req, res) {
  const { text } = JSON.parse(req.body);
  res.json({ text: `Thanks for your message: ${text}` });
}

