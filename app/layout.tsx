import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dead Stock Finder — Stop Paying for Inventory That Doesn't Sell",
  description: "Connect your Shopify store and instantly identify products with zero sales in 90+ days. Calculate real storage costs and take action."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5649d200-2730-40a0-8d51-49a8281f8b36"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
