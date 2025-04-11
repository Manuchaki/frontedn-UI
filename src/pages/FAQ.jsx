import React, { useState } from 'react';

function FAQ() {
  const faqs = [
    { question: 'What is Lawberate?', answer: 'Lawberate is an AI-powered platform for simplifying legal documents.' },
    { question: 'How does it work?', answer: 'You can upload legal documents, and our AI will simplify them for you.' },
    { question: 'Is my data secure?', answer: 'Yes, we use advanced encryption to ensure your data is safe.' },
    { question: 'Can I try Lawberate for free?', answer: 'Yes, we offer a free trial for new users.' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <h1 className="mt-4 text-center">Frequently Asked Questions</h1>
      <div className="faq-section mt-4">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item mb-3">
            <div
              className="faq-question p-3 bg-light-gray cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="m-0">{faq.question}</h3>
            </div>
            {activeIndex === index && (
              <div className="faq-answer p-3 bg-white border">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
