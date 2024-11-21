import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "../../styles/common/globals.scss";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chika Motoori",
  description: "本告 智香のポートフォリオです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
