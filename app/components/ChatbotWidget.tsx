'use client';
import { useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const newMsg = { sender: 'user', text: input };
    setMessages([...messages, newMsg]);
    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ text: input }),
    });
    const reply = await res.json();
    setMessages((msgs) => [...msgs, { sender: 'bot', text: reply.text }]);
    setInput('');
  };

  return (
    <>
      <button
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50 hover:bg-blue-700 transition"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Chatbot"
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-6 bg-white shadow-2xl rounded-lg w-80 max-h-[500px] flex flex-col z-50 overflow-hidden border border-blue-500">
          <div className="bg-blue-600 text-white p-3 font-semibold text-center">💬 Chat with Lead HR</div>
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded ${
                  msg.sender === 'user'
                    ? 'bg-blue-100 text-right text-sm'
                    : 'bg-gray-100 text-left text-sm'
                }`}
              >
                <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1 p-2 text-sm border rounded-l"
              placeholder="Type your message"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4 py-2 text-sm rounded-r hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

