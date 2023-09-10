import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "/styles/globals.scss";
import StyledComponentsRegistry from "../../lib/registry";
import Favicon from "/public/images/Metadata/favicon.ico";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "continuation-app",
  description: "あああああああああああああああああああああああああああ",
  icons: [{ rel: "icon", url: Favicon.src }],
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
