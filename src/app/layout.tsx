import type { Metadata } from "next";
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
