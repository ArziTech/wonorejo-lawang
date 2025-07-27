import type { Metadata } from "next";
import { Lora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import {ThemeProvider} from "@/components/theme-provider";
import {Navbar1} from "@/components/global/navbar1";
import Footer from "@/components/global/footer";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wonorejo Lawang",
  description: "Website Resmi Milik Desa Wonorejo Kecamatan Lawang Kabupaten" +
      " Malang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetBrainsMono.variable} ${lora.variable}  antialiased `}
      >
      <ThemeProvider attribute="class"
                     defaultTheme="light" // Set default theme to light
                     enableSystem disableTransitionOnChange>
        <div className="relative min-h-full flex flex-col">
          <Navbar1 logo={{title: "Wonorejo Lawang", url: '/'}}/>
          {children}
          <Footer />

        </div>

      </ThemeProvider>
      </body>
    </html>
);
}
