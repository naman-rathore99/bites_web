import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar/Navbar";

const montserrat = Montserrat({
  weight: ["400", "700", "500", "600", "800"],
  subsets: ["latin"],
});

const popins = Poppins({
  weight: ["400", "700", "500", "600", "800"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Bites of Bliss",
  description: "Soulfull food by Bites of bliss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`montserrat popins antialiased`}>
      <Navbar/>  
        {children}
      </body>
    </html>
  );
}
