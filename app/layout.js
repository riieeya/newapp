import "./globals.css";

export const metadata = {
  title: "FreshBite — Good food, good mood",
  description: "A vibrant frontend-only food ordering experience."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
