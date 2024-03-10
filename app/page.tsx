import Image from "next/image";
import SquigglyLines from "./components/SquigglyLines";
import Head from "next/head";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Face Image Reviver</title>
      </Head>
      <Header />
      <main className="flex flex-1">
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          Reviving old images 
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLines />
            <span className="relative">Using AI</span>
          </span>{" "}
          for everyone.
        </h1>
        <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
          Have old and blurry face images ? Let our AI revive them so those memories can live on. 100% free - revive your iamges today.
        </p>
      </main>
    </div>
    
  );
}
