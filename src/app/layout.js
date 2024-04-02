import { Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import Hotjar from '@hotjar/browser';
import Head from "next/head";

const siteId = 3921916;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

const roboto = Roboto({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "Abdelrahman Nasr - Software Engineer",
  description: "I'm Abdelrahman Nasr, a software engineer based in Egypt. I specialize in building web applications using modern technologies.",
  image: "/photo.png",
  url: "https://abdelrahman-nasr.tech/",
  siteName: "Abdelrahman Nasr",
  twitterHandle: "@AbdulRh9199",
  keywords: [
    "software engineer",
    "web developer",
    "Cat9199",
    "react developer",
    "front-end developer",
    "full-stack developer",
    "abdelrahman nasr",
    "abdulrh9199",
    "abdelrahman nasr portfolio",
    "abdelrahman nasr website",
    "abdelrahman nasr tech",
    "abdelrahman nasr software engineer",
    "abdelrahman nasr developer",
    "abdelrahman nasr web developer",
    "abdelrahman nasr front-end developer",
    "abdelrahman nasr full-stack developer",
    "abdelrahman nasr react developer",
    "abdelrahman nasr egypt",
    "abdelrahman nasr cairo",
    "abdelrahman nasr alexandria",
    "abdelrahman nasr giza",
    "abdelrahman nasr mansoura",
    "abdelrahman nasr tanta",
    "abdelrahman nasr damietta",
    "abdelrahman nasr port said",
    "abdelrahman nasr suez",
    "abdelrahman nasr ismailia",
    "abdelrahman nasr aswan",
    "abdelrahman nasr luxor",
    "abdelrahman nasr hurghada",
    "abdelrahman nasr sharm el sheikh",
    "abdelrahman nasr marsa alam",
    "abdelrahman nasr dahab",
    "abdelrahman nasr saint catherine",
    "abdelrahman nasr siwa oasis",
    "abdelrahman nasr new valley",
    "abdelrahman nasr kharga",
    "MaMasoud",
    "Mas3oud",
    "MaMasoud portfolio",
    "MaMasoud website",
    "MaMasoud tech",
    "MaMasoud software engineer",
    "MaMasoud developer",
    "MaMasoud web developer",
    "MaMasoud front-end developer",
    "MaMasoud full-stack developer",
    "MaMasoud react developer",
    "MaMasoud egypt",
    "MaMasoud cairo",
    "MaMasoud alexandria",
    "MaMasoud giza",
    "MaMasoud mansoura",
    "MaMasoud tanta",
    "MaMasoud damietta",
    "MaMasoud port said",
    "MaMasoud suez",
    "MaMasoud ismailia",
    "MaMasoud aswan",
    "MaMasoud luxor",
    "MaMasoud hurghada",
    "MaMasoud sharm el sheikh",
    "MaMasoud marsa alam",
    "MaMasoud dahab",
    "MaMasoud saint catherine",
    "MaMasoud siwa oasis",
    "MaMasoud new valley",
    "MaMasoud kharga"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <link rel="shortcut icon" href="/favicon.ico" />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(h,o,t,j,a,r){
h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
h._hjSettings={hjid:3921916,hjsv:6};
a=o.getElementsByTagName('head')[0];
r=o.createElement('script');r.async=1;
r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
        }}
      />
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
