"use client";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const courseId = 9;

  const handleEnrollClick = () => {
    router.push(`/Contact?courseId=${courseId}`);
  };
  return (
    <>
      <Head>
        <title>Next.js & Frontend Development</title>
        <meta
          name="description"
          content="Master building lightning-fast, SEO-optimized, and scalable web applications using Next.js. Learn SSR, routing, APIs, Tailwind, and deployment."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 text-gray-900 font-sans">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
          <div className="max-w-7xl mx-auto py-24 px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Next.js & Frontend Development
            </h1>
            <p className="mt-4 text-xl md:text-2xl opacity-90">
              Build lightning-fast, SEO-optimized, and scalable web applications
            </p>
            <p className="mt-2 text-lg md:text-xl opacity-80">
              Duration: 6–8 Weeks | Mode: Offline | Level: Intermediate to Advanced
            </p>
          </div>
          <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-indigo-700 to-cyan-400 blur-3xl"></div>
        </header>

        {/* Course Overview */}
        <section className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

          <div className="relative max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-gray-900">
              Course Overview
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
              Master the art of building lightning-fast, SEO-optimized, and scalable web applications using Next.js. Go beyond React into modern frontend frameworks with SSR, API routes, routing, deployment, and more.
            </p>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                "Next.js Framework Mastery",
                "Server-Side Rendering (SSR)",
                "API Integration & Backend Logic",
                "UI/UX Optimization with Tailwind",
                "Fullstack Project Development",
                "SEO & Performance Optimization",
                "Vercel Deployment & Hosting",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border-l-4 border-teal-500"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full text-xl font-bold">
                        {idx + 1}
                      </div>
                    </div>
                    <p className="text-gray-900 font-semibold">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Modules */}
        <section className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          <div className="absolute top-10 left-0 w-60 h-60 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>

          <div className="relative max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-gray-900">
              Course Modules
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                "Week 1: Introduction & Setup",
                "Week 2: Routing & Navigation",
                "Week 3: Data Fetching",
                "Week 4: Styling & Components",
                "Week 5: APIs & Backend Functions",
                "Week 6: Advanced Topics",
                "Week 7: Project Week",
                "Week 8: Deployment & Hosting",
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

        {/* Tools & Platforms */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-100 to-gray-50">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
            Tools & Platforms Covered
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Next.js", img: "/CoursesImages/nextjs.png" },
              { name: "React.js", img: "/CoursesImages/react.png" },
              { name: "Tailwind CSS", img: "/CoursesImages/tailwind.png" },
              { name: "MongoDB / Firebase", img: "/CoursesImages/database.jpeg" },
              { name: "Vercel Hosting", img: "/CoursesImages/vercel.png" },
              { name: "JWT / Auth.js", img: "/CoursesImages/auth.png" },
            ].map((tool, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transform transition duration-300"
              >
                <Image src={tool.img} alt={tool.name} width={130}
                  height={768} className="h-14 mb-4" />
                <p className="text-gray-800 font-semibold text-center">{tool.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who Should Join */}
        <section className="py-20 px-6 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
            Who Should Join
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Frontend developers with basic React knowledge",
              "Students seeking real-world frontend project experience",
              "Aspiring full-stack developers",
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

        {/* Final Project & Certification */}
        <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Final Project & Certification
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Complete a live project to add to your portfolio <br />
            Receive ETU Academy Certificate upon successful evaluation <br />
            Gain hands-on experience in modern frontend and Next.js development
          </p>
          <button onClick={handleEnrollClick} className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Enroll Now
          </button>
        </section>
      </main>
    </>
  );
}
