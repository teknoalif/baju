import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Sablon Moslem Arttack | Spesialis Kaos Dakwah & Panitia Qurban 1447 H",
  description: "Layanan sablon kaos premium amanah di bawah asuhan Ustadz Haromain. Menerima pesanan kaos panitia Qurban 9 Zulhijjah 1447 H, kaos majelis, dan komunitas muslim.",
  keywords: ["sablon kaos muslim", "kaos panitia qurban", "sablon premium bekasi", "baju jamia", "kaos dakwah"],
  authors: [{ name: "Ustadz Haromain" }],
  // 👇 Tambahkan baris icons ini untuk memunculkan logo di tab browser
  icons: {
    icon: "/images/logo.jpeg", // Mengarah ke public/images/logo.jpeg
    apple: "/images/logo.jpeg", // Opsional: Untuk bookmark di perangkat iOS
  },
  openGraph: {
    title: "Sablon Moslem Arttack — baju.jamia.id",
    description: "Booking Slot Produksi Kaos Panitia Qurban 1447 H. Free Custom Desain & Bahan Premium Standar Distro.",
    url: "https://baju.jamia.id",
    siteName: "Sablon Moslem Arttack",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 800,
        height: 800,
        alt: "Logo Sablon Moslem Arttack",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
} 
