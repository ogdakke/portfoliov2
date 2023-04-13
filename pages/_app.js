import "../styles/index.css";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "@next/font/google";
import { ThemeProvider } from "next-themes";

const interVariable = Inter({subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true} disableTransitionOnChange>
      <main className={interVariable.className}>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
