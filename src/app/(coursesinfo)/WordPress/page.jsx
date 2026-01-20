"use client";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const courseId = 11;

  const handleEnrollClick = () => {
    router.push(`/Contact?courseId=${courseId}`);
  };
  return (
    <>
      <Head>
        <title>WordPress Development Course</title>
        <meta
          name="description"
          content="Build stunning, responsive websites with WordPress. Learn themes, plugins, Elementor, WooCommerce, SEO, and create real-world projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 text-gray-900 font-sans">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
          <div className="max-w-7xl mx-auto py-24 px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              WordPress Development
            </h1>
            <p className="mt-4 text-xl md:text-2xl opacity-90">
              Build stunning, responsive websites with no coding experience required!
            </p>
            <p className="mt-2 text-lg md:text-xl opacity-80">
              A complete hands-on course for students, freelancers, and business owners.
            </p>
          </div>
          <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-indigo-700 to-cyan-400 blur-3xl"></div>
        </header>

        {/* Course Modules */}
        <section className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

          <div className="relative max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-gray-900">
              Course Modules
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {[
                "Module 1: Introduction to WordPress – What is WordPress? Domain & Hosting Basics, Installing WordPress",
                "Module 2: WordPress Dashboard – Admin Panel, Posts vs Pages, Themes, Plugins & Widgets",
                "Module 3: Website Design with Themes – Install & Customize Themes, Elementor Page Builder, Responsive Layouts",
                "Module 4: Content Management – Create Posts & Pages, Add Media, Categories, Tags & Menus",
                "Module 5: Plugins & Extensions – SEO, Cache, Security, Forms, Sliders, Analytics, WPForms",
                "Module 6: E-Commerce with WooCommerce – Setup Store, Products, Cart, Checkout, Payment Integration",
                "Module 7: SEO Optimization – WordPress SEO, Yoast/RankMath, Sitemap, Search Console",
                "Module 8: Website Performance & Security – Speed Optimization, Backups, Updates, Security Best Practices",
                "Module 9: Real-World Projects – Personal Portfolio, Business Website, Online Store",
              ].map((module, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border-l-4 border-indigo-500"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full text-xl font-bold">
                        {idx + 1}
                      </div>
                    </div>
                    <p className="text-gray-900 font-semibold">{module}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-100 to-gray-50">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
            Tools You’ll Use
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Elementor / Elementor Pro", img: "/CoursesImages/elementor.png" },
              { name: "WordPress Dashboard", img: "/CoursesImages/wordpress.png" },
              { name: "WooCommerce", img: "/CoursesImages/woocommerce.png" },
              { name: "Canva & Figma (optional)", img: "/CoursesImages/figma.png" },
            ].map((tool, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transform transition duration-300"
              >
                <Image src={tool.img} alt={tool.name} width={768}
                height={768} className="h-14 mb-4" />
                <p className="text-gray-800 font-semibold text-center">{tool.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who Should Join */}
        <section className="py-20 px-6 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
            Who Can Join
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Students (any background)",
              "Entrepreneurs & Startups",
              "Freelancers & Web Designers",
              "Career Changers",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-indigo-100 to-cyan-100 rounded-xl p-6 text-center shadow hover:shadow-lg transition-shadow duration-300"
              >
                <p className="font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Deliverables & Certification */}
        <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Final Deliverables & Certification
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Fully functional live website <br />
            Project submission & feedback <br />
            Completion Certificate from ETU Academy
          </p>
          <button onClick={handleEnrollClick} className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Enroll Now
          </button>
        </section>
      </main>
    </>
  );
}
