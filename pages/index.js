import Head from "next/head";
import Success from "../components/Success";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Head>
        <title>Ease Note</title>
        <meta name="description" content="" /> {/* Website Description Here */}
      </Head>

      <Success />
      {/* <h1 className="text-2xl">Let's Build Ease Note Together, Guys! 🔥🔥🔥</h1> */}
    </div>
  );
}
