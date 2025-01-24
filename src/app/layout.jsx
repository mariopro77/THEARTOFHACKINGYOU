// src/app/layout.js
import Navbar from '../components/navbar';
import '../styles/globals.css'; // Import global styles

export const metadata = {
  title: 'the-art-of-computer-virus-research-and-defense, donwload now for free!',
  description: 'The oficial page of the book the-art-of-computer-virus-research-and-defense, download now for free!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        {children}
      </body>
    </html>
  );
}
