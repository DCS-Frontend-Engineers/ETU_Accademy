"use client";

import Head from "next/head";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const courseId = 13;

  const handleEnrollClick = () => {
    router.push(`/Contact?courseId=${courseId}`);
  };
  return (
    <>
      <Head>
        <title>Computer Fundamentals (Advanced) Course</title>
        <meta
          name="description"
          content="Unlock the foundation of modern computing — hardware, software, networking, and cybersecurity. ETU Academy Computer Fundamentals (Advanced) Course."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 text-gray-900 font-sans">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
          <div className="max-w-7xl mx-auto py-24 px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Computer Fundamentals (Advanced)
            </h1>
            <p className="mt-4 text-xl md:text-2xl opacity-90">
              Unlock the foundation of modern computing — from hardware to software
            </p>
            <p className="mt-2 text-lg md:text-xl opacity-80">
              Ideal for students, job seekers, and anyone entering IT or tech fields
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
              This course is designed for beginners and intermediate learners looking to gain a solid understanding of how computers work, from the inside out. Learn hardware, software, networking, cybersecurity, productivity tools, and practical assignments.
            </p>
          </div>
        </section>

        {/* Modules & Syllabus */}
        <section className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          <div className="absolute top-10 left-0 w-60 h-60 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>

          <div className="relative max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-gray-900">
              Modules & Syllabus
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                "Introduction to Computers: What is a Computer?, History & Evolution, Types of Computers (PC, Workstations, Servers)",
                "Hardware Components: Input & Output Devices, Motherboard, CPU, RAM, Storage, Assembling & Troubleshooting a PC (Live Demo)",
                "Software & Operating Systems: System Software vs Application Software, Windows & Linux Basics, File Management, Installations, Updates",
                "Microsoft Office & Productivity Tools: MS Word, Excel, PowerPoint Essentials, Google Docs, Sheets, Drive, Keyboard Shortcuts",
                "Networking Basics: LAN, WAN, Internet vs Intranet, IP Addressing, Routers, Switches, Hands-on Basic Network Setup",
                "Cybersecurity Awareness: Passwords, Phishing, Malware, Safe Browsing, Antivirus, Personal Data & Online Safety Tips",
                "Internet & Email Usage: Browsers & Search Engines, Using Gmail/Outlook, Professional Communication Etiquette",
                "Practical Assignments & Mini Projects: Format a computer, Setup home/office network, Create formatted reports & spreadsheets",
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

        {/* Who Can Join */}
        <section className="py-20 px-6 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
            Who Can Join
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "School/College Students",
              "Job Seekers",
              "Small Business Owners",
              "Anyone looking to boost digital confidence",
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

        {/* Duration & Certification */}
        <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Duration & Certification
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Course Duration: 4 Weeks | 3 Days/Week | 1.5 Hours/Session <br />
            Receive a recognized ETU Academy Certificate upon course completion
          </p>
          <button onClick={handleEnrollClick} className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Enroll Now
          </button>
        </section>
      </main>
    </>
  );
}
