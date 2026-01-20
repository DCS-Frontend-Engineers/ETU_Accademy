"use client";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const courseId = 10;

  const handleEnrollClick = () => {
    router.push(`/Contact?courseId=${courseId}`);
  };
  return (
    <>
      <Head>
        <title>React Native Mobile App Development</title>
        <meta
          name="description"
          content="Build cross-platform mobile apps for Android & iOS using React Native. Learn navigation, state management, API integration, Firebase, and deployment."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 text-gray-900 font-sans">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
          <div className="max-w-7xl mx-auto py-24 px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              React Native Mobile App Development
            </h1>
            <p className="mt-4 text-xl md:text-2xl opacity-90">
              Build cross-platform mobile apps using one codebase — for Android & iOS!
            </p>
            <p className="mt-2 text-lg md:text-xl opacity-80">
              Duration: 8–10 Weeks | Weekend & Weekday Batches Available
            </p>
            <button className="mt-8 bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Enroll Now
            </button>
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
              Learn how to build powerful, real-world mobile applications using React Native, a framework backed by Facebook. This course covers fundamentals to advanced app deployment, enabling students to create beautiful, scalable apps for both Android and iOS.
            </p>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {[
                "React Native Basics & JSX",
                "Navigation & Routing",
                "State Management (Context API, Redux)",
                "REST API Integration",
                "Authentication & Firebase",
                "Native Modules & Linking",
                "Performance Optimization",
                "Push Notifications & Device APIs",
                "App Deployment (Play Store & App Store)",
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
              Modules Breakdown
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                "Module 1: Introduction to React Native",
                "Module 2: Core Components & Styling",
                "Module 3: Navigation & State",
                "Module 4: Data Handling",
                "Module 5: Firebase Integration",
                "Module 6: Advanced Topics",
                "Module 7: App Publishing",
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
            Tools & Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "React Native CLI / Expo", img: "/CoursesImages/react.png" },
              { name: "JavaScript / ES6", img: "/CoursesImages/javascript.png" },
              { name: "Firebase / Axios / SQLite", img: "/CoursesImages/firebase.png" },
              { name: "Android Studio / Xcode", img: "/CoursesImages/android-xcode.png" },
              { name: "Git & GitHub", img: "/CoursesImages/github.png" },
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
              "Students & Graduates",
              "Web Developers shifting to Mobile",
              "Entrepreneurs & Freelancers",
              "Anyone passionate about mobile apps",
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
            What You Get & Certification
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            100% Practical Training <br />
            Real Project + App Deployment <br />
            Certificate of Completion <br />
            Mentorship & Career Support <br />
            Placement Assistance
          </p>
          <button onClick={handleEnrollClick} className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Enroll Now
          </button>
        </section>
      </main>
    </>
  );
}
