// src/pages/Blog.jsx
import React from 'react';

function Blog() {
  const posts = [
    {
      id: 1,
      title: 'How AI is Simplifying Legal Documents: A Comprehensive Guide',
      date: '2025-04-06',
      excerpt: 'AI is revolutionizing the way legal documents are simplified. In this guide, we discuss how Lawberate helps users simplify contracts and understand legal language...',
    },
    {
      id: 2,
      title: 'Top Legal Terms Explained in Simple English',
      date: '2025-04-06',
      excerpt: 'Legal jargon can be overwhelming. In this post, we break down the top legal terms and explain them in simple, clear language...',
    },
    {
      id: 3,
      title: 'Why You Need an AI Legal Assistant for Contracts',
      date: '2025-04-06',
      excerpt: 'An AI legal assistant like Lawberate can simplify contracts, identify risks, and save you time and money. In this post, we explain why every business owner should consider using AI to handle their contracts...',
    },
    {
      id: 4,
      title: 'How to Spot Red Flags in Legal Contracts',
      date: '2025-04-06',
      excerpt: 'Knowing how to identify critical issues in contracts is crucial. This post will guide you through the most common red flags in legal contracts and how Lawberate can help you spot them...',
    },
    {
      id: 5,
      title: 'AI vs. Traditional Legal Assistance: What’s Better for You?',
      date: '2025-04-06',
      excerpt: 'An AI legal assistant offers unique advantages over traditional legal services. In this post, we compare the two and help you decide which is better for your needs...',
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Lawberate Blog</h1>
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-6 mb-4">
            <div className="blog-card p-4 bg-white shadow-sm rounded">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-date text-muted">{post.date}</p>
              <p className="blog-excerpt">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
