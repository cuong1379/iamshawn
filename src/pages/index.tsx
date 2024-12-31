import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>{`I am Shawn - UX & Developer`}</title>
        <meta
          name="description"
          content="Explore Shawn's portfolio, showcasing UX design and coding projects."
        />
      </Head>

      <div
        className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
      >
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-5xl text-cyan-900 font-semibold">I am Shawn</h1>
        </main>
      </div>
    </>
  );
}
