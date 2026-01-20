"use client";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const courseId = 16;

  const handleEnrollClick = () => {
    router.push(`/Contact?courseId=${courseId}`);
  };
  return (
    <>
      <Head>
        <title>Advanced Networking Course</title>
        <meta
          name="description"
          content="Advanced Networking Course by ETU Academy – Dive deep into enterprise networking, security, and infrastructure with hands-on labs and real-world scenarios."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 text-gray-900 font-sans">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
          <div className="max-w-7xl mx-auto py-24 px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Advanced Networking
            </h1>
            <p className="mt-4 text-xl md:text-2xl opacity-90">
              Enterprise-Level Networking, Security & Infrastructure Design
            </p>
            <p className="mt-2 text-lg md:text-xl opacity-80">
              Duration: 10 Weeks | Mode: Offline
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
              This Advanced Networking course is designed for learners with basic networking knowledge who want to dive deep into enterprise networking, security, and infrastructure design. Ideal for aspiring Network Engineers, System Administrators, and IT professionals.
            </p>
          </div>
        </section>

        {/* Modules */}
        <section className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          <div className="absolute top-10 left-0 w-60 h-60 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>

          <div className="relative max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-gray-900">
              Course Modules
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8">
              {[
                "Module 1: Advanced TCP/IP & Subnetting — IPv4/IPv6, Subnetting, Supernetting, CIDR, Static & Dynamic IP",
                "Module 2: Routing & Switching — RIP, OSPF, EIGRP, VLAN, STP, Inter-VLAN Routing, Layer 2 vs Layer 3 Switching, Routing Tables",
                "Module 3: Firewalls & Network Security — UFW, iptables, pfSense, NAT/PAT, ACLs, VPNs, IDS/IPS, Honeypots",
                "Module 4: DHCP, DNS & Network Services — DNS zones & resolution, DHCP server config, NTP, SNMP, FTP",
                "Module 5: Wireless Networking & LAN Design — 802.11 standards, Wireless controllers, Access points, Wi-Fi security, Network topology & architecture",
                "Module 6: Linux/Windows Server Networking — Interface config, bonding, bridging, Samba, NFS, Active Directory, DHCP/DNS roles",
                "Module 7: Monitoring & Troubleshooting — Wireshark, Nmap, Traceroute, Netstat, Network logs, Performance tuning",
                "Module 8: Capstone Project + Practical Lab — Simulated enterprise network setup, Configuring firewall, VLANs, routing, Final assessment",
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

        {/* Tools & Equipment */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-100 to-gray-50">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
            Hands-On Tools You&#39;ll Use
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Cisco Packet Tracer / GNS3", img: "/CoursesImages/cisco.png" },
              { name: "pfSense / MikroTik", img: "/CoursesImages/pfsense.png" },
              { name: "Linux CLI Tools", img: "/CoursesImages/linux-cli.png" },
              { name: "Wireshark & Network Monitor", img: "/CoursesImages/wireshark.png" },
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
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Aspiring Network Engineers",
              "System Administrators",
              "IT Professionals looking to advance skills",
              "Students with basic networking knowledge",
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
            Certification
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            ETU Academy Certificate of Completion <br />
            Career guidance for CCNA, Network+, and Cybersecurity roles <br />
            Access to real-world labs & networking scenarios
          </p>
          <button onClick={handleEnrollClick} className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Enroll Now
          </button>
        </section>
      </main>
    </>
  );
}
