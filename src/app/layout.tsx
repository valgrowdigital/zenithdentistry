import type { Metadata } from "next";
import { Onest, Lora } from "next/font/google";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Zenith Dentistry | Premium Dental Clinic in Dehiwala, Sri Lanka",
  description: "Experience premium, spa-like dental care at Zenith Dentistry in Dehiwala, Sri Lanka. Led by Dr. Ahamed Fouzan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${onest.variable} ${lora.variable} scroll-smooth antialiased`}>
      <body className="font-sans bg-white text-zinc-900 flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
