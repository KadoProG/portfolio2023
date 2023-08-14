import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "/styles/globals.scss";
import StyledComponentsRegistry from "../../lib/registry";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "continuation-app",
  description: "あああああああああああああああああああああああああああ",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        {/* <body className={inter.className}> */}
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
