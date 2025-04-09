import type { Metadata } from "next";
import { Root } from "@/components/Root";
import { Header } from "@/components/Header";
import "../styles/globals.scss";
import "../styles/reset.scss";
import "../styles/utils.scss";

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
      <body>
        <Root>
          <Header title="3D Model Maker">
            <button>Add rectangle</button>
          </Header>
          {children}
        </Root>
      </body>
    </html>
  );
}
