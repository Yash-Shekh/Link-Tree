"use client";
import { useState } from "react";

export default function CopyUrlButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-green-500 text-white px-4 py-2 rounded-md"
    >
      {copied ? "Copied ✅" : "Copy and Share Page"}
    </button>
  );
}
