import { Roboto } from "next/font/google";
import "./globals.css";

import Hotjar from '@hotjar/browser';

const siteId = 3921916;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

const roboto = Roboto({ subsets: ["latin"], weight: ['400']});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
