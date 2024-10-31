import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";

export const metadata: Metadata = {
  title: "EduFlow",
  description: "Uma plataforma de gerenciamento de estudos para ajudar usuários a organizar e acompanhar seu progresso acadêmico, registrando sessões de estudo e mantendo um histórico de desempenho para otimizar o aprendizado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="h-screen w-screen flex flex-row bg-slate-300">
        <Sidebar />
        <main className="h-screen w-full p-5 box-border">
          {children}
        </main>
      </body>
    </html>
  );
}
