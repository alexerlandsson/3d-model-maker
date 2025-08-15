import type { Metadata, Viewport } from "next";
import { Cousine } from "next/font/google";
import { Providers } from "@/providers";
import "../styles/globals.scss";
import "../styles/reset.scss";
import "../styles/utils.scss";

const cousine = Cousine({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cousine",
});

export const metadata: Metadata = {
  title: "3D Model Maker",
  description: "Simple tool to create pixelated 3D models",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png" }
    ],
    other: [
      {
        rel: "manifest",
        url: "/favicon/site.webmanifest",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#121212",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cousine.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
