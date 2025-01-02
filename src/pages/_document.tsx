/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Home - Partner Kerja.id</title>
        {/* Meta tags for SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Your website's description here. This helps search engines understand the content of your website." />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <meta name="author" content="Your Name or Company" />

        {/* Open Graph for social media sharing */}
        <meta property="og:title" content="Your Website Title" />
        <meta property="og:description" content="Your website's description here." />
        <meta property="og:image" content="https://example.com/your-image.jpg" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card for social media sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Website Title" />
        <meta name="twitter:description" content="Your website's description here." />
        <meta name="twitter:image" content="https://example.com/your-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon-pk.ico" />

        {/* Additional SEO optimizations */}
        <link rel="canonical" href="https://example.com" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
