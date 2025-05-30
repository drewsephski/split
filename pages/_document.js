import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en' className='scroll-smooth dark'>
      <Head />
      <body className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
