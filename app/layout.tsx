import { AuthProvider } from "@/components/auth-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mediate",
  description: "Launch your blog today with Mediate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
            <SiteHeader/>
          {children}</body>
      </AuthProvider>
    </html>
  );
}
