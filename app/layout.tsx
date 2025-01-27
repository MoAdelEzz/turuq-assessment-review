import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
  sidebar
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen light`}
      >
        <SidebarProvider>
          {sidebar}
          {children}
          <SidebarTrigger 
          size="icon"
          className="
          w-14 h-14 aspect-square rounded-full
          fixed bottom-5 right-5
          bg-accent text-background hover:text-background
          border-2 border-l-0 border-sidebar-border border-l-sidebar-accent"/> 
        </SidebarProvider>
      </body>
    </html>
  );
}
