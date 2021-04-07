import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <title>Anders & Gunder</title>
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:url" content="https://www.andersoggunder.no/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Anders & Gunder" />
      <meta name="twitter:card" content="Anders & Gunder" />
      <meta
        property="og:description"
        content="Lyst til å utvikle noe? Vi fikser!"
      />
      <meta property="og:image" content={"/images/social-preview.png"} />
    </Head>
  );
}
