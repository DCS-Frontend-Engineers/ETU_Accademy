"use client";

import Head from "next/head";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const courseId = 21;

  const handleEnrollClick = () => {
    router.push(`/Contact?courseId=${courseId}`);
  };
  return (
    <>
      <Head>
        <title>Value & Neuro Selling</title>
        <meta
          name="description"
          content="Master Value Selling & Neuro Selling – Learn consultative, neuroscience-driven sales strategies with ETU Academy."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 text-gray-900 font-sans">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
          <div className="max-w-7xl mx-auto py-24 px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Value Selling & Neuro Selling
            </h1>
            <p className="mt-4 text-xl md:text-2xl opacity-90">
              Learn to sell on value and leverage neuroscience for higher conversions
            </p>
            <p className="mt-2 text-lg md:text-xl opacity-80">
              Duration: 4 Weeks | Mode: Offline | Weekend & Weekday Batches
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
              Courses Overview
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
              Master the art of selling on value and applying neuroscience to ethically influence buyer decisions. This course equips sales professionals, freelancers, coaches, and entrepreneurs with practical frameworks for higher conversions and client trust.
            </p>
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

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {[
                "Value Selling: Introduction — Value vs. Price, Buyer Personas, Value Discovery Techniques",
                "Value Selling: Articulating Value — Crafting value propositions, Framing offers, Handling price objections",
                "Value Selling: Closing — Case studies, high-impact closing strategies, roleplay final project",
                "Neuro Selling: Introduction — Brain decision-making, psychology of trust and persuasion, cognitive biases",
                "Neuro Selling: Brain Triggers — Emotional vs rational processing, framing, storytelling, tone",
                "Neuro Selling: Neuroscience of Communication — Mirror neurons, body language, voice modulation, rapport",
                "Neuro Selling: Pitching & Labs — Creating emotionally engaging narratives, selling to logic vs instinct, simulation & workshops",
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
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Sales Professionals",
              "Freelancers & Consultants",
              "Entrepreneurs & Coaches",
              "Client-Facing Roles",
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

        {/* Certification & Career Support */}
        <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Certification & Career Support
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Industry-Recognized Certificate <br />
            Resume & LinkedIn Profile Review <br />
            Bonus: Lifetime access to updates
          </p>
          <button onClick={handleEnrollClick} className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Enroll Now
          </button>
        </section>
      </main>
    </>
  );
}
