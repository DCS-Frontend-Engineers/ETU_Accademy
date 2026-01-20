"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const pathname = usePathname();

  // Update active hash on scroll for same-page sections
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "courses", "features", "testimonials", "contact"];
      let currentSection = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 100;
          if (window.scrollY >= top) {
            currentSection = section;
          }
        }
      });

      setActiveHash(`#${currentSection}`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home", external: false },
    { href: "/About", label: "About", external: false },
    { href: "/Courses", label: "Courses", external: false },
    { href: "/Contact", label: "Contact", external: false },
  ];

  const handleClick = (link) => {
    setOpen(false);
    if (link.external) {
      // scroll to section if same page
      const el = document.querySelector(link.href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (link) => {
    if (link.external) {
      return activeHash === link.href;
    } else {
      return pathname === link.href;
    }
  };

  return (
    <header className={`${poppins.variable} font-sans bg-white shadow-md sticky top-0 z-50`}>
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image src="/logo.png" alt="ETU Academy Logo" width={100} height={64} />
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul
            className={`md:flex md:items-center md:gap-6 absolute md:static bg-white w-full left-0 md:w-auto md:bg-transparent transition-all duration-300 ${
              open ? "top-full block shadow-md p-5" : "top-[-500px] hidden"
            }`}
          >
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.external ? pathname : link.href}
                  className={`block py-2 md:py-0 transition ${
                    isActive(link)
                      ? "text-blue-600 underline"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                  onClick={() => handleClick(link)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <div
            className="md:hidden text-3xl cursor-pointer text-gray-800"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </div>
        </nav>
      </div>
    </header>
  );
}
