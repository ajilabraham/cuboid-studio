import type { Metadata } from 'next';
import './globals.css';
const bebas = { variable: '--font-bebas' };

export const metadata: Metadata = {
  title: "Country Lab",
  description: "Spaces designed with intent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${bebas.variable} font-sans bg-black text-ivory antialiased`}>
        {/* Load Google Maps API with v=alpha for 3D map support */}
        <script
          async
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&v=alpha&libraries=maps3d`}
        ></script>
        {children}
      </body>
    </html>
  );
}
