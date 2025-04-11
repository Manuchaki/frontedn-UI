import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Simplify() {
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('Standard');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('/api/analyze', { text, mode });
      setSuggestions(response.data.suggestions);
      toast.success('Text analyzed successfully!');
    } catch (error) {
      toast.error('Error analyzing text. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/user/feedback', { feedback });
      setFeedback('');
      toast.success('Feedback submitted successfully!');
    } catch (error) {
      toast.error('Error submitting feedback. Please try again.');
    }
  };

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await axios.get('/user/history');
        setChatHistory(response.data);
      } catch (error) {
        toast.error('Error fetching chat history.');
      }
    };
    fetchChatHistory();
  }, []);

  const handleSampleText = () => {
    setText('This is a sample text to demonstrate the functionality.');
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-6">Simplify Your Text</h1>
      <div className="flex justify-between mb-4">
        <div className="flex space-x-4">
          {['Standard', 'Fluency', 'Formal', 'Creative'].map((m) => (
            <button
              key={m}
              className={`px-4 py-2 rounded ${mode === m ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setMode(m)}
            >
              {m}
            </button>
          ))}
        </div>
        <div className="flex space-x-4">
          <button className="btn btn-secondary" onClick={handleSampleText}>Try Sample Text</button>
          <button className="btn btn-secondary" onClick={() => navigator.clipboard.readText().then(setText)}>Paste Text</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <form onSubmit={handleSubmit} className="flex-1">
          <textarea
            className="w-full p-4 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="6"
            placeholder="Paste your text here..."
            value={text}
            onChange={handleTextChange}
            aria-label="Text to simplify"
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary mt-4"
            disabled={loading}
          >
            {loading ? 'Simplifying...' : 'Simplify'}
          </button>
        </form>
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Suggestions</h2>
          {suggestions.length > 0 ? (
            <ul className="list-disc pl-5">
              {suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Simplified text will appear here...</p>
          )}
        </div>
      </div>
      <form onSubmit={handleFeedbackSubmit} className="mb-6">
        <textarea
          className="w-full p-4 border rounded-lg shadow-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
          placeholder="Provide feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          aria-label="Feedback"
        ></textarea>
        <button type="submit" className="btn btn-secondary">Submit Feedback</button>
      </form>
      <div>
        <h2 className="text-xl font-semibold mb-4">Chat History</h2>
        <ul className="list-disc pl-5">
          {chatHistory.map((chat, index) => (
            <li key={index}>{chat.original} - {chat.simplified}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Simplify;
