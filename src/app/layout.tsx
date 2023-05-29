import Navbar from "@/components/Navbar";
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Attend",
  description: "Supercharge your next conference",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body color="white">
        <Providers>
          <Navbar></Navbar>
          {children}
        </Providers>
      </body>
    </html>
  );
}
