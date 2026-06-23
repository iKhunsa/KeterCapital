import Head from "next/head";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>AssetRock</title>
        <meta
          name="description"
          content="High-volume crypto-to-fiat conversions for institutional clients. AssetRock — You move it, we execute."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <Landing />
      </>
    </>
  );
}
