import Head from "next/head";
import Landing from "./components/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>AssetRock — Institutional OTC Crypto Desk</title>
        <meta name="description" content="High-volume crypto-to-fiat conversions for family offices, investment funds, and corporate treasuries. Discreet institutional execution across LATAM and globally." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="OTC crypto desk, crypto to fiat, institutional crypto, LATAM crypto, family office crypto, corporate treasury crypto, high volume crypto conversion" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.assetrock.io" />
        <meta property="og:title" content="AssetRock — Institutional OTC Crypto Desk" />
        <meta property="og:description" content="High-volume crypto-to-fiat conversions for family offices, investment funds, and corporate treasuries. Discreet execution across LATAM and globally." />
        <meta property="og:site_name" content="AssetRock" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="AssetRock — Institutional OTC Crypto Desk" />
        <meta name="twitter:description" content="High-volume crypto-to-fiat conversions for family offices, funds, and corporate treasuries. Discreet execution across LATAM." />
        <link rel="canonical" href="https://www.assetrock.io" />
      </Head>
      <>
        <Landing />
      </>
    </>
  );
}
