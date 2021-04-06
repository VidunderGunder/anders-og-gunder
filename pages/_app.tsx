import Head from "next/head";
import "styles/globals.css";
import "styles/bootstrap.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps}>
      <Head>
        <title>Anders og Gunder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Component>
  );
}

export default MyApp;
