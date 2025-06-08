'use client'
import { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [file, setFile] = useState(null);

  async function sendMessage() {
    const newMessage = { sender: 'user', text: input };
    setMessages([...messages, newMessage]);
    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ text: input }),
    });
    const reply = await res.json();
    setMessages((msgs) => [...msgs, { sender: 'bot', text: reply.text }]);
    setInput('');
  }

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-4">Chat with Us</h2>
      <div className="border h-60 p-4 overflow-y-scroll">
        {messages.map((msg, i) => (
          <p key={i}><strong>{msg.sender}:</strong> {msg.text}</p>
        ))}
      </div>
      <input className="border p-2 w-full mt-2" value={input}
        onChange={(e) => setInput(e.target.value)} placeholder="Type your message" />
      <input type="file" className="mt-2" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={sendMessage} className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Send</button>
    </section>
  );
}

