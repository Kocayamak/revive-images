import Image from "next/image";
import SquigglyLines from "./components/SquigglyLines";
import Head from "next/head";
import Header from "./components/Header";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Face Image Reviver</title>
      </Head>
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
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
        <div className="flex justify-center space-x-4">
          <a href="" className="bg-white rounded-xl text-balck font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-gray-100 border">
            Learn how it&apos;s build 
          </a>
          <Link href="" className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80">
            Revive your images
          </Link>
        </div>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-large">Original Image</h2>
                <Image alt="Original Image" src="/vineeth.jpg" className="w-96 h-96 rounded-2xl" width={400} height={400} />
              </div>
              <div>
                <h2 className="mb-1 font-medium text-large">Revived Image</h2>
                <Image alt="Revived Image" src="/vineeth-new.jpg" className="w-96 h-96 rounded-2xl sm:mt-0 mt-2" width={400} height={400} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    
  );
}
