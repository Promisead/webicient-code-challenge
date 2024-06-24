import "../styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=YourFont&display=swap"
        />
      </head>
      <body>
        <Header />
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
