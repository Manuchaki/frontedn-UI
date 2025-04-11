import React from 'react';

function Guides() {
  const guides = [
    { id: 1, title: 'How to Simplify Legal Documents', link: '#' },
    { id: 2, title: 'Understanding Legal Terms', link: '#' },
  ];

  return (
    <div className="container">
      <h1 className="mt-4">Guides</h1>
      <ul>
        {guides.map((guide) => (
          <li key={guide.id} className="mt-4">
            <h2>{guide.title}</h2>
            <a href={guide.link} className="btn btn-primary">Read Guide</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Guides;
