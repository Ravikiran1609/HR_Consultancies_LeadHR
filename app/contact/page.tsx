'use client'
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    alert('Message sent!');
  }

  return (
    <form onSubmit={handleSubmit} className="p-10">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <input type="text" placeholder="Name" className="border p-2 mb-2 w-full"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input type="email" placeholder="Email" className="border p-2 mb-2 w-full"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <textarea placeholder="Message" className="border p-2 mb-2 w-full"
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
    </form>
  );
}

