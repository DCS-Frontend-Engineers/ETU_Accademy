"use client";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const courseId = 5;

  const handleEnrollClick = () => {
    router.push(`/Contact?courseId=${courseId}`);
  };
  return (
    <>
      <Head>
        <title>Complete Data Science, ML, DL & NLP Bootcamp</title>
        <meta
          name="description"
          content="ETU Academy’s Data Science Bootcamp covers Python, ML, DL, NLP, and real-world projects with hands-on experience."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 text-gray-900 font-sans">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
          <div className="max-w-7xl mx-auto py-24 px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Complete Data Science, ML, DL & NLP Bootcamp
            </h1>
            <p className="mt-4 text-xl md:text-2xl opacity-90">
              Duration: 4–6 Months | Mode: Offline | Level: Beginner to Advanced
            </p>
            <p className="mt-2 text-lg md:text-xl opacity-80">
              Certificate: Yes | Live Projects: Included
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
              ETU Academy’s Bootcamp is designed to transform beginners into skilled data scientists. Covering core data handling, machine learning, deep learning, and NLP, this course combines theory with real-world applications and hands-on projects.
            </p>

            {/* Modules */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                "Module 1: Python for Data Science",
                "Module 2: Statistics & Probability",
                "Module 3: Data Wrangling & Cleaning",
                "Module 4: Machine Learning",
                "Module 5: Deep Learning (DL)",
                "Module 6: Natural Language Processing (NLP)",
                "Module 7: Model Deployment",
                "Module 8: Capstone Projects",
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
              { name: "Python / Jupyter Notebook", img: "/CoursesImages/PythonJupyter.jpeg" },
              { name: "Scikit-Learn / TensorFlow / Keras", img: "/CoursesImages/Scikit-LearnTensorFlowKeras.png" },
              { name: "Pandas / NumPy / Matplotlib", img: "/CoursesImages/PandasNumPyMatplotlib.png" },
              { name: "NLTK / HuggingFace", img: "/CoursesImages/NLTKHuggingFace.jpeg" },
              { name: "Google Colab / VS Code", img: "/CoursesImages/GoogleCode.jpeg" },
            ].map((tool, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transform transition duration-300"
              >
                <Image src={tool.img} alt={tool.name} width={130}
                  height={768} className="h-14 mb-4" />
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
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Beginners with zero programming experience",
              "Aspiring Data Scientists & ML Engineers",
              "Students, Analysts, or Professionals looking to upskill",
              "Anyone interested in hands-on AI/ML projects",
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
            Key Highlights & Course Details
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
             Hands-on with tools: Jupyter, Scikit-learn, TensorFlow, Keras, NLTK, HuggingFace <br />
             Real datasets from Kaggle, UCI, and internal case studies <br />
             1-on-1 mentorship and career guidance <br />
             Resume and LinkedIn profile building sessions <br />
             Duration: 4–6 Months | Mode: Offline <br />
             Certificate: Yes | Live Projects: Included
          </p>
          <button onClick={handleEnrollClick} className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Enroll Now
          </button>
        </section>
      </main>
    </>
  );
}
