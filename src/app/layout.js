import "./globals.css";
import { Sen } from "next/font/google";

const sen = Sen({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Aether AI Assistant",
  description: "Your intelligent browser companion that enhances your web experience with AI-powered assistance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sen.className}>
      <head>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
