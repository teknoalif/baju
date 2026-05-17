import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SABLON MOSLEM ARTTACK | Premium Screen Printing Specialist",
  description: "Layanan sablon kaos premium amanah di bawah asuhan Ustadz Haromain. Spesialis Kaos Dakwah & Kaos Panitia Qurban 1447 H.",
  icons: {
    icon: "/images/logo.jpeg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased scroll-smooth">
      <body className={`${plusJakartaSans.className} min-h-full bg-[#F4F1EA] font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
