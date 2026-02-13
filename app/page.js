"use client"
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Rive, Fit, Alignment } from "@rive-app/canvas";

export default function Home() {
  const router = useRouter()
  const [Text, setText] = useState("")
  const canvasRef = useRef(null);

  const createTree = () => {
    router.push(`/generate?handle=${Text}`)
  }

  useEffect(() => {
    if (canvasRef.current) {
      new Rive({
        src: "https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/680faadc793de4a67df69d04_homepage_image_3.riv",
        canvas: canvasRef.current,
        autoplay: true,
        stateMachines: ["State Machine"],
        artboard: "Homepage_image 3",
        fit: Fit.Contain,
        alignment: Alignment.Center,
      });
    }
  }, []);

  return (
    <main>
      <section className="bg-[#2665d6] min-h-screen grid md:grid-cols-2">

        <div className="md:ml-[10vw] mx-auto flex flex-col gap-5 justify-center items-center text-[#d2e823] pt-25 w-75 md:w-140 " >

          <p className="md:text-6xl text-4xl font-extrabold ">Everything you are. In one, simple link in beo.</p>

          <div className="text-[15px] font-semibold">
            <p>Join 50M+ pepole using LinkTree for their link in beo. One link to help you share</p>
            <p>Everything you create, curate and sell form your Instagram, TikTok, Twitter, YouTube and other socail media profiles.</p>
          </div>

          <div className="flex gap-4 justify-start items-center md:w-full">

            <input type="text"
              className="text-gray-800 bg-white p-3 rounded-xl"
              onChange={(e) => setText(e.target.value)}
              value={Text}
              placeholder="Enter your Handle" />

            <button
              className='hidden md:block p-4 px-8 text-black bg-[#d2e823] rounded-full text-md font-semibold'
              onClick={() => createTree()}>
              Claim your LinkTree</button>
            <button
              className='md:hidden p-4 px-8 text-black bg-[#d2e823] rounded-full text-md font-semibold'
              onClick={() => createTree()}>
              Claim </button>
          </div>
        </div>

        <div className="md:mr-[10vw] flex justify-center items-center md:pt-25 w-85 mx-auto md:w-175">
          {/* <img className="w-105" src="/LinkTree.png" alt="" /> */}
          <video
            id="customize-your-linktree"
            autoPlay
            playsInline
            loop
            muted
            style={{
              maxWidth: "100%",
              width: "100%",
              height: "auto",
              maxHeight: "100%",
              borderRadius: "1rem",
            }}
            
            poster="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/692eb9b488731835c528bb18_capture_1764669836574.webp"
          >
            <source
              src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.webm"
              type="video/webm"
            />
            <source
              src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

      </section>

      <section className="bg-[#780016] min-h-screen grid md:grid-cols-2">

        <div className="ml-[10vw] flex flex-col gap-5 justify-center items-center text-[#e9c0e9] pt-10 md:pt-80">
          <p className="text-4xl md:text-6xl font-extrabold">Link in beo for Creators and Brands</p>

          <div className="text-[15px] font-semibold">
            <p>Join 50M+ pepole using LinkTree for their link in beo. One link to help you share</p>
            <p>Everything you create, curate and sell form your Instagram, TikTok, Twitter, YouTube and other socail media profiles.</p>
          </div>
        </div>
        <div className="averyclothing_rive flex justify-center items-center md:pt-80">
          <canvas
            ref={canvasRef}
            style={{ height: "100%", width: "100%" }}
            width="1000"
            height="1000"
          />
        </div>
      </section>

    </main>
  );
}
