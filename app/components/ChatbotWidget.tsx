'use client';
import { useState } from 'react';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [file, setFile] = useState<File | null>(null);

  async function sendMessage() {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    const formData = new FormData();
    formData.append('text', input);
    if (file) formData.append('file', file);

    const res = await fetch('/api/chat', {
      method: 'POST',
      body: formData,
    });

    const reply = await res.json();
    setMessages((prev) => [...prev, { sender: 'bot', text: reply.text }]);
    setInput('');
    setFile(null);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white shadow-lg border rounded-lg w-80 max-h-[70vh] flex flex-col">
          <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <span>Lead HR Chat</span>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto text-sm space-y-2">
            {messages.map((msg, i) => (
              <p key={i} className={msg.sender === 'user' ? 'text-right' : 'text-left'}>
                <span className={msg.sender === 'user' ? 'bg-blue-100 px-2 py-1 rounded inline-block' : 'bg-gray-200 px-2 py-1 rounded inline-block'}>
                  {msg.text}
                </span>
              </p>
            ))}
          </div>
          <div className="p-2 border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message"
              className="w-full p-2 border rounded mb-1"
            />
            <input type="file" onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="mb-2" />
            <button
              onClick={sendMessage}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
        >
          💬
        </button>
      )}
    </div>
  );
}

