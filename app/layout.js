import "./globals.css";
export const metadata = { title: "T3 · Búsqueda y optimización" };
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
