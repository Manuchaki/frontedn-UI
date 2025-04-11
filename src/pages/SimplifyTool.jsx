import React, { useState } from 'react';
import { FaPaperclip } from 'react-icons/fa'; // Import pin icon

function SimplifyTool() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [file, setFile] = useState(null);

  const handleSimplify = () => {
    // Simulate simplification logic
    setOutputText(`Simplified: ${inputText}`);
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setInputText(uploadedFile.name); // Display file name in the input box
    }
  };

  return (
    <div className="simplify-container">
      <h1 className="text-center mb-4">Simplify Your Text</h1>
      <div className="simplify-tool">
        {/* Input Box */}
        <div className="position-relative simplify-box">
          <textarea
            className="form-control simplify-input"
            rows="10"
            placeholder="Paste your text here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            readOnly={!!file} // Make read-only if a file is selected
          ></textarea>
          <label htmlFor="file-upload" className="file-upload-icon position-absolute">
            <FaPaperclip />
          </label>
          <input
            id="file-upload"
            type="file"
            className="d-none"
            onChange={handleFileChange}
          />
        </div>

        {/* Output Box */}
        <div className="simplify-box">
          <textarea
            className="form-control simplify-output"
            rows="10"
            placeholder="Simplified text will appear here..."
            value={outputText}
            readOnly
          ></textarea>
        </div>
      </div>

      {/* Simplify Button */}
      <div className="text-center">
        <button className="btn simplify-button" onClick={handleSimplify}>
          Simplify
        </button>
      </div>
    </div>
  );
}

export default SimplifyTool;
