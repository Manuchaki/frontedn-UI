// src/pages/Assistant.jsx
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import ChatBubble from '../components/ChatBubble';
import Sidebar from '../components/Sidebar';

function Assistant() {
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const { token, isLoggedIn } = useAuth();

  const handleFileChange = (e) => setImage(e.target.files[0]);
  const handleTextChange = (e) => setText(e.target.value);

  const handleUpload = async () => {
    if (!image && !text.trim()) return;

    const formData = new FormData();
    if (image) formData.append('file', image);
    if (text.trim()) formData.append('text', text);

    setMessages((prev) => [
      ...prev,
      { role: 'user', content: text || 'Uploaded document' },
      { role: 'assistant', content: '⏳ Assistant is typing...' },
    ]);

    try {
      const res = await fetch('http://localhost:8080/api/analyze', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token || ''}`,
        },
        body: formData,
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: 'assistant', content: data.simplified },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: 'assistant', content: '❌ Failed to connect to backend.' },
      ]);
    }
  };

  return (
    <div className="flex h-screen">
      {isLoggedIn && <Sidebar />}
      <main className="flex-1 p-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="mb-6 bg-white p-4 rounded shadow-sm">
          <label className="block mb-2">Upload a contract (image or PDF):</label>
          <input type="file" onChange={handleFileChange} className="mb-3" />
          <textarea
            className="w-full border rounded p-2 mt-2"
            rows={4}
            placeholder="Or paste legal text here..."
            value={text}
            onChange={handleTextChange}
          />
          <button
            onClick={handleUpload}
            className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
          >
            ✨ Simplify
          </button>
        </div>

        <div className="bg-white p-4 rounded shadow-sm space-y-4 max-h-[50vh] overflow-y-auto">
          {messages.map((msg, idx) => (
            <ChatBubble key={idx} role={msg.role} content={msg.content} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Assistant;
