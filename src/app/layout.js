import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Aether AI Assistant",
  description: "Your intelligent browser companion that enhances your web experience with AI-powered assistance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Script 
          src="https://cdn.tailwindcss.com"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}
