import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRAVAHA — Emergency Operations GIS Platform",
  description: "Disaster intelligence and explainable dynamic evacuation coordination system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-slate-950 text-slate-100 antialiased">
      <body className="h-full w-full overflow-hidden flex flex-col bg-slate-950">
        {children}
      </body>
    </html>
  );
}
