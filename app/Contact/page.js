"use client";
import Link from "next/link";

export default function Contact() {
  return (
    <main>
      <section className="bg-[#780016] flex flex-col justify-center items-center text-[#d2e823] px-10 h-screen relative">
          <h1 className="text-4xl font-extrabold mb-5">Contact Us</h1>

          <p className="text-lg max-w-2xl text-center mb-5">
            Have questions, feedback, or need support? We’d love to hear from you.
            Reach out to the Linktree team and we’ll get back to you as soon as
            possible.
          </p>

          <form className="bg-white text-black p-8 rounded-xl shadow-lg w-full max-w-lg flex flex-col gap-5">
            <div>
              <label className="block font-semibold mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#254f1a]"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#254f1a]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Message</label>
              <textarea
                rows="5"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#254f1a]"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#e9c0e9] text-black font-semibold py-3 rounded-full hover:bg-[#d9a9d9] transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-6">
            <Link
              href="/"
              className="px-8 py-4 bg-[#d2e823] text-black rounded-full font-semibold hover:bg-[#d9a9d9] transition"
            >
              Back to Home
            </Link>
          </div>
      </section>
    </main>
  );
}