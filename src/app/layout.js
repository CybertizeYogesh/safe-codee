import { DM_Sans, Archivo } from "next/font/google";
import "@/styles/app.min.css";
import "@/styles/fontawesome.min.css";
import "@/styles/style.css";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  shrinkToFit: "no",
};

export const metadata = {
  title: {
    default: "Agarwal Packers and Movers Bangalore | Movers and Packers Bangalore",
    template: "%s | Agarwal On Time Cargo Packers & Movers",
  },
  description: "Agarwal Packers and Movers Bangalore offers professional home moving services, household shifting services, and secure car transportation. Get a free quote today!",
  metadataBase: new URL("https://www.agarwalontimecargopackers.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Agarwal Packers and Movers Bangalore | Movers and Packers Bangalore",
    description: "Agarwal Packers and Movers Bangalore offers professional home moving services, household shifting services, and secure car transportation. Get a free quote today!",
    url: "https://www.agarwalontimecargopackers.com",
    siteName: "Agarwal On Time Cargo Packers & Movers",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/img/logo.webp",
        width: 800,
        height: 600,
        alt: "Agarwal On Time Cargo Packers & Movers Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agarwal Packers and Movers Bangalore | Movers and Packers Bangalore",
    description: "Agarwal Packers and Movers Bangalore offers professional home moving services, household shifting services, and secure car transportation. Get a free quote today!",
    images: ["/assets/img/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/img/favicon.webp",
    shortcut: "/assets/img/favicon.webp",
    apple: "/assets/img/favicon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}

