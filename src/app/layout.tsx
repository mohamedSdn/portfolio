import "./globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
// styles
import "./../styles/main.css";
import "./../styles/terminal-result.css";

const inter = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Mohamed Soudani's Portfolio"
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-[#222] text-white`}>
                {children}
            </body>
        </html>
    );
}
