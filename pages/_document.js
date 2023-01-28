import { Html, Head, Main, NextScript } from 'next/document'

export default function Document({children}) {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-bgPrimary bg-bgLight dark:text-accent-3 text-accent-5/85 ">
        <Main />
        {children}
        <NextScript />
      </body>
    </Html>
  )
}
