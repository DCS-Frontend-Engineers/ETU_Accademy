"use client";

import Head from "next/head";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const courseId = 22;

  const handleEnrollClick = () => {
    router.push(`/Contact?courseId=${courseId}`);
  };
  return (
    <>
      <Head>
        <title>Selling to Next-GEN Leaders</title>
        <meta
          name="description"
          content="Master selling to Gen Z & Millennial leaders – Connect, build trust, and close high-value deals with ETU Academy."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 text-gray-900 font-sans">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
          <div className="max-w-7xl mx-auto py-24 px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Selling to Next-GEN Leaders
            </h1>
            <p className="mt-4 text-xl md:text-2xl opacity-90">
              Learn how to connect, build trust, and close high-value deals with modern decision-makers.
            </p>
            <p className="mt-2 text-lg md:text-xl opacity-80">
              Duration: 6 Weeks | Hybrid Format (Online + Offline)
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
              This advanced sales course is designed for professionals and business owners who want to master selling to modern decision-makers – Gen Z and Millennial leaders. Learn how to connect, build trust, and close high-value deals using empathy, storytelling, and digital-first approaches.
            </p>
          </div>
        </section>

        {/* Course Modules */}
        <section className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          <div className="absolute top-10 left-0 w-60 h-60 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>

          <div className="relative max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-gray-900">
              Syllabus Modules
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {[
                "Module 1: Understanding the Next-GEN Buyer — Gen Z & Millennial traits, buying psychology, digital consumption",
                "Module 2: Building Digital Trust — Social proof, LinkedIn/Instagram/Webinars, personal branding",
                "Module 3: Storytelling & Empathy-Driven Selling — Narrative structure, active listening, discovery conversations",
                "Module 4: Selling Without Pressure — Modern objections, collaborative deal conversations, value-led close",
                "Module 5: Tools & Tech for Gen-Z Sales — CRM, automation, video selling, interactive decks, digital follow-ups",
                "Module 6: Live Roleplays & Use Cases — Real-world sales roleplay, industry pitch simulation, final project: sell to a Gen-Z buyer",
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

        {/* Who Should Enroll */}
        <section className="py-20 px-6 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
            Who Should Enroll
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Sales professionals targeting new-age founders or teams",
              "Coaches, consultants, SaaS sellers",
              "Entrepreneurs and creators",
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

        {/* Course Features & Certification */}
        <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Course Features & Certification
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            6 Live Training Sessions <br />
            Real Sales Simulations <br />
            Digital Tools & Templates <br />
            Certificate of Completion <br />
            Hybrid Format (Online + Offline)
          </p>
          <button onClick={handleEnrollClick} className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Enroll Now
          </button>
        </section>
      </main>
    </>
  );
}

