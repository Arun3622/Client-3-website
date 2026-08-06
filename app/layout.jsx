import { Inter, Sora } from "next/font/google";
import "./globals.css";

const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
  display: "swap"
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap"
});

export const metadata = {
  metadataBase: new URL("https://checkmatepdi.com"),
  title: "Car PDI Inspection Thane, Mumbai | Pre-Delivery & Pre-Purchase Checks from ₹999 | CheckMate PDI",
  description:
    "Independent car PDI & pre-purchase inspection across Mumbai's western line and Thane–Kalyan belt. 350+ point checklist, photo evidence, report in 15 min. Starting ₹999.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Car PDI Inspection Thane, Mumbai | Pre-Delivery & Pre-Purchase Checks from ₹999 | CheckMate PDI",
    description: "Independent car PDI & pre-purchase inspection across Mumbai's western line and Thane–Kalyan belt. 350+ point checklist, photo evidence, report in 15 min. Starting ₹999.",
    url: "https://checkmatepdi.com",
    siteName: "CheckMate PDI Exxpert",
    locale: "en_IN",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}
