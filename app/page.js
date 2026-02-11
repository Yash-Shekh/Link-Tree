"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const router = useRouter()
  const createTree = () => {

    router.push(`/generate?handle=${Text}`)
  }

  const [Text, setText] = useState("")
  return (
    <main>
      <section className="bg-[#254f1a] min-h-screen grid grid-cols-2">

        <div className="ml-[10vw] flex flex-col gap-5 justify-center items-center text-yellow-300">

          <p className="text-6xl font-extrabold">Everything you are. In one, simple link in beo.</p>

          <div className="text-[15px] font-semibold">
            <p>Join 50M+ pepole using LinkTree for their link in beo. One link to help you share</p>
            <p>Everything you create, curate and sell form your Instagram, TikTok, Twitter, YouTube and other socail media profiles.</p>
          </div>

          <div className="flex gap-4 justify-start items-center w-full">

            <input type="text"
              className="text-gray-800 bg-white p-3 rounded-xl"
              onChange={(e) => setText(e.target.value)}
              value={Text}
              placeholder="Enter your Handle" />

            <button
              className='p-3 text-black bg-[#e9c0e9] rounded-full text-md font-semibold'
              onClick={() => createTree()}>
              Claim your LinkTree</button>
          </div>
        </div>

        <div className="mr-[10vw] flex justify-center items-center">
          <img className="w-105" src="/LinkTree.png" alt="" />
        </div>

      </section>

      <section className="bg-red-600 min-h-screen">

      </section>

    </main>
  );
}
