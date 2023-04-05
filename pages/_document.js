import { Html, Head, Main, NextScript } from "next/document";

export default function Document({ children }) {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-bgLight text-accent-5 dark:bg-bgPrimary dark:text-accent-3 ">
        <Main />
        {children}
        <NextScript />
      </body>
    </Html>
  );
}
