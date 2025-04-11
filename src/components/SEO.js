import React, { useEffect } from 'react';

const SEO = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Lawberate",
      "url": "https://yourdomain.com",  // Replace with actual domain
      "description": "AI-powered legal assistant simplifying legal documents, contracts, and terms & conditions.",
      "publisher": {
        "@type": "Organization",
        "name": "Lawberate",
        "logo": {
          "@type": "ImageObject",
          "url": "https://yourdomain.com/logo.png"  // Replace with actual logo URL
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, []);

  return null;
};

export default SEO;
