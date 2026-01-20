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
        <title>AI & Machine Learning Course</title>
        <meta
          name="description"
          content="Master AI & Machine Learning with ETU Academy – Build real-world AI projects and models"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 text-gray-900 font-sans">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
          <div className="max-w-7xl mx-auto py-24 px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              AI & Machine Learning
            </h1>
            <p className="mt-4 text-xl md:text-2xl opacity-90">
              Offered by ETU Academy – Learn Smart. Build Real.
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
              This course introduces you to the foundations and applications of
              Artificial Intelligence and Machine Learning. Learn how to build
              models, analyze data, and create real-world AI projects using
              modern tools and frameworks.
            </p>
          </div>
        </section>

        {/* Course Modules */}
        <section className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          <div className="absolute top-10 left-0 w-60 h-60 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>

          <div className="relative max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-gray-900">
              What You’ll Learn
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {[
                "Module 1: Introduction to AI & Machine Learning",
                "Module 2: Python for Data Science",
                "Module 3: Statistics & Mathematics for ML",
                "Module 4: Supervised Learning",
                "Module 5: Unsupervised Learning",
                "Module 6: Model Deployment Basics",
                "Module 7: Neural Networks & Deep Learning",
                "Module 8: Natural Language Processing (NLP)",
                "Module 9: Real-World Projects",
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
            Tools & Platforms Used
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Python & Jupyter Notebook", img: "/CoursesImages/Python&Jupyter.jpeg" },
              { name: "Scikit-Learn", img: "/CoursesImages/Scikit-Learn.jpeg" },
              { name: "TensorFlow & Keras", img: "/CoursesImages/TensorFlow&Keras.jpeg" },
              { name: "Pandas & NumPy", img: "/CoursesImages/Pandas&NumPy.jpeg" },
              { name: "Matplotlib & Seaborn", img: "/CoursesImages/Matplotlib&Seaborn.jpeg" },
              { name: "Google Colab / VS Code", img: "/CoursesImages/GoogleCode.jpeg" },
            ].map((tool, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transform transition duration-300"
              >
                <Image
                  src={tool.img}
                  alt={tool.name}
                  width={130}
                  height={768}
                  className="h-14 mb-4"
                />
                <p className="text-gray-800 font-semibold text-center">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Who Can Enroll */}
        <section className="py-20 px-6 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
            Who Can Enroll
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Beginners with basic Python knowledge",
              "Data analysts, engineers, students, or working professionals",
              "Anyone interested in building a career in AI/ML",
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

        {/* Course Features & Duration */}
        <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Course Features & Duration
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert-Led Sessions <br />
            Real-Time Projects <br />
            Assignments & Resources <br />
            Certification Upon Completion <br />
            Offline & Online Batches Available <br />
            Duration: 3–4 Months | Weekday & Weekend Batches Available
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
