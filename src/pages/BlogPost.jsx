// src/pages/BlogPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch the blog post dynamically based on slug
    const fetchBlog = () => {
      const blogs = [
        {
          title: "How AI is Simplifying Legal Documents: A Comprehensive Guide",
          date: "2025-04-06",
          content: "AI is revolutionizing the way legal documents are simplified. In this guide, we discuss how Lawberate helps users simplify contracts and understand legal language...",
          slug: "how-ai-is-simplifying-legal-documents",
        },
        {
          title: "Top Legal Terms Explained in Simple English",
          date: "2025-04-06",
          content: "Legal jargon can be overwhelming. In this post, we break down the top legal terms and explain them in simple, clear language...",
          slug: "top-legal-terms-explained",
        },
        {
          title: "Why You Need an AI Legal Assistant for Contracts",
          date: "2025-04-06",
          content: "An AI legal assistant like Lawberate can simplify contracts, identify risks, and save you time and money. In this post, we explain why every business owner should consider using AI to handle their contracts...",
          slug: "why-you-need-ai-legal-assistant",
        },
        // Add more blog posts here
      ];

      const selectedBlog = blogs.find((b) => b.slug === slug);
      setBlog(selectedBlog);
    };

    fetchBlog();
  }, [slug]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-24 px-6 bg-gradient-to-br from-blue-50 to-white">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">{blog.title}</h1>
      <p className="text-gray-500 text-sm">{blog.date}</p>
      <div className="mt-6 text-lg text-gray-700">{blog.content}</div>
    </div>
  );
};

export default BlogPost;
