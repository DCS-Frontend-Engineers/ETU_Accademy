"use client";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const courseId = 1;

  const handleEnrollClick = () => {
    router.push(`/Contact?courseId=${courseId}`);
  };
  return (
    <>
      <Head>
        <title>Basic Networking Course</title>
        <meta
          name="description"
          content="Learn the fundamentals of networking including LAN, WAN, IP addressing, protocols, cabling, Wi-Fi, troubleshooting, and more. ETU Academy Basic Networking Course."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 text-gray-900 font-sans">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
          <div className="max-w-7xl mx-auto py-24 px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Basic Networking
            </h1>
            <p className="mt-4 text-xl md:text-2xl opacity-90">
              Start your IT journey — learn networking fundamentals from scratch
            </p>
            <p className="mt-2 text-lg md:text-xl opacity-80">
              Offline (6 Weeks) | Beginner-Friendly | No Prerequisites
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
              Learn the fundamentals of networking including LAN, WAN, IP addressing, network devices, protocols, cabling, Wi-Fi, basic troubleshooting, and hands-on lab sessions. Perfect for students, beginners, and IT support professionals.
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

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {[
                "Introduction to Networking: What is networking?, LAN, WAN, MAN basics, Network devices (Router, Switch, Hub, Bridge)",
                "IP Addressing & Subnetting: IPv4 & IPv6 concepts, Private vs Public IP, Subnetting basics",
                "Network Topologies & Protocols: Star, Bus, Ring topologies, OSI Model (7 Layers), TCP/IP Protocol Suite",
                "Cabling & Connectors: Types of network cables (CAT5e, CAT6), Crimping, color codes, RJ45 connectors",
                "Basic Configuration: Setting up routers & switches, IP configuration in Windows/Linux, Command-line network tools (ping, ipconfig, tracert)",
                "Wi-Fi & Wireless Networks: SSID, frequency bands, encryption (WEP, WPA, WPA2), Wi-Fi setup & troubleshooting",
                "Basic Troubleshooting: Diagnosing network issues, Common errors & fixes, Using basic tools for analysis",
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

        {/* Tools & Lab Access */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-100 to-gray-50">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
            Tools & Lab Access
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Routers & Switches", img: "/CoursesImages/router-switch.png" },
              { name: "LAN Simulators", img: "/CoursesImages/lan-simulator.jpeg" },
              { name: "Wi-Fi Setup Labs", img: "/CoursesImages/wifi-lab.png" },
              { name: "Real-world Troubleshooting", img: "/CoursesImages/troubleshooting.png" },
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
              "Students starting their IT journey",
              "Beginners preparing for CCNA or CompTIA",
              "IT Support staff looking to strengthen fundamentals",
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
            Duration: 6 Weeks | Offline Mode <br />
            Level: Beginner-Friendly | Prerequisites: None <br />
            Receive a Certificate of Completion from ETU Academy after final assessment
          </p>
          <button onClick={handleEnrollClick} className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Enroll Now
          </button>
        </section>
      </main>
    </>
  );
}
