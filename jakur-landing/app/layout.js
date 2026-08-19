import "./globals.css";

export const metadata = {
  title: "JAKUR Health and Beauty",
  description:
    "JAKUR blends traditional botanical oils and remedies with modern testing — essential oils, hair oils, and natural remedies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
