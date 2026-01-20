"use client";

import Head from "next/head";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const courseId = 18;

  const handleEnrollClick = () => {
    router.push(`/Contact?courseId=${courseId}`);
  };
  return (
    <>
      <Head>
        <title>Mastering the Basics of Sales</title>
        <meta
          name="description"
          content="Mastering the Basics of Sales – Learn foundational sales principles, communication, persuasion, and prospecting skills with ETU Academy."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 text-gray-900 font-sans">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
          <div className="max-w-7xl mx-auto py-24 px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Mastering the Basics of Sales
            </h1>
            <p className="mt-4 text-xl md:text-2xl opacity-90">
              Learn core sales principles for any industry — retail, tech, or
              services
            </p>
            <p className="mt-2 text-lg md:text-xl opacity-80">
              Duration: 4 Weeks | Mode: Offline (Weekday & Weekend Batches)
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
              Course Objective
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
              This course introduces students to foundational principles of
              selling, equipping them with practical communication, persuasion,
              and prospecting skills needed for any sales role — from retail to
              tech.
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
                "Module 1: Introduction to Sales — What is Sales?, Role of Salesperson, Sales as career, Myths vs Reality",
                "Module 2: Understanding Buyers — Buyer psychology, Customer types, Buyer’s journey",
                "Module 3: Sales Process Fundamentals — Prospecting, Sales funnel, AIDA model",
                "Module 4: Effective Communication — Listening skills, Asking questions, Verbal & Non-verbal communication, Building rapport",
                "Module 5: Presenting the Offer — Presenting value, Structuring pitch, Handling objections",
                "Module 6: Closing Techniques — When & how to ask for sale, Soft vs Hard closes, Ethical practices",
                "Module 7: Post-Sale & Relationship Building — Follow-up strategies, Retaining customers, CRM basics",
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

        {/* Who Should Join */}
        <section className="py-20 px-6 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
            Who Should Enroll
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Students exploring business or marketing careers",
              "Entry-level sales professionals",
              "Freelancers and small business owners",
              "Job seekers preparing for sales interviews",
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

        {/* Certification */}
        <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Certificate & Bonus
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Certificate of Completion issued by ETU Academy <br />
            Bonus: Career guidance + mock interviews at course end <br />
            Learn practical sales frameworks and gain confidence in real-life
            roleplays
          </p>
          <button
            onClick={handleEnrollClick}
            className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Enroll Now
          </button>
        </section>
      </main>
    </>
  );
}
