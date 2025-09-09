// app/layout.tsx - Temporary for debugging
import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers/Providers";
import Navbar from "./components/common/Navbar/Navbar";
import { CartProvider } from "./components/cart/CartItems";

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
        <Providers>
          <Navbar />
          <CartProvider>{children}</CartProvider>
        </Providers>
      </body>
    </html>
  );
}
