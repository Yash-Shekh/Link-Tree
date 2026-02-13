"use client";
import Link from "next/link";

export default function About() {
  return (
    <main>
      <section className="bg-[#502274] min-h-screen flex flex-col justify-center items-center text-[#d2e823] px-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 mt-6 md:mt-0">About Linktree</h1>

        <p className="text-lg max-w-3xl text-center mb-6">
          Linktree is the simplest way to share everything you create, curate,
          and sell with one link. Whether you’re a creator, entrepreneur,
          business, or just someone who wants to connect, Linktree helps you
          bring all your content together in one place.
        </p>

        <div className="grid md:grid-cols-2 gap-5 md:gap-10 max-w-5xl w-full md:mt-10">
          <div className="bg-[#fef08a] text-black p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p>
              We believe everyone deserves a home for their digital identity.
              Linktree empowers millions of users worldwide to showcase their
              work, grow their audience, and monetize their creativity.
            </p>
          </div>

          <div className="bg-[#fef08a] text-black p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Why Linktree?</h2>
            <p>
              Instead of juggling multiple links across platforms, Linktree
              gives you one simple, customizable hub. Share it anywhere — from
              Instagram bios to email signatures — and let people discover
              everything you do.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="px-8 py-4 bg-[#d2e823] text-black rounded-full font-semibold hover:bg-[#d9a9d9] transition"
          >
            Back to Home
          </Link>
        </div>
      </section>
      <section className="bg-[#502274] h-10"></section>
    </main>
  );
}