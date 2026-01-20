"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-6 text-sm text-gray-700">
        {/* Left - Links */}
        <div className="flex space-x-6 mb-3 md:mb-0">
          <Link href="/contact" className="hover:text-teal-600">
            Contact
          </Link>
          <Link href="/privacy-policy" className="hover:text-teal-600">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-teal-600">
            Terms & Conditions
          </Link>
        </div>

        {/* Center - Logo */}
        <div className="flex items-center justify-center mb-3 md:mb-0">
          {/* Replace with your actual logo */}
          <Image
            src="/logo.png"
            alt="ETU Logo"
            width={60}
            height={30}
            className="object-contain"
          />
        </div>

        {/* Right - Copyright */}
        <div className="text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="text-teal-600 hover:underline">
            Divergent Consultancy Services
          </Link>
        </div>
      </div>
    </footer>
  );
}
