import "./globals.scss";

export const metadata = {
  title: "Jets & Partners | Private Aviation Services",
  description:
    "Expert private aviation services including charter, cargo, and aircraft management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
