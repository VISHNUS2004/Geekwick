import "./globals.css";

export const metadata = {
  title: "Intern Portal",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}