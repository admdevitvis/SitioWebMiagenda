import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "mIAgenda | Gestión Inteligente de Citas Médicas",
  description: "mIAgenda es el agente de inteligencia artificial que responde por WhatsApp, agenda citas médicas, califica leads y escala a tu equipo solo cuando es necesario.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans antialiased bg-[#0F172A] text-[#E2E8F0]`}
      >
        {children}
      </body>
    </html>
  );
}
