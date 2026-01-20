"use client";

import { useState, useEffect } from "react";
import { Users, BookOpen } from "lucide-react";
import TestimonialCard from "@/component/Testimonial";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const slides = [
    "https://etuacademy.com/wp-content/uploads/2025/07/Banner-Slide-1.jpg",
    "https://etuacademy.com/wp-content/uploads/2025/07/Banner-Slide-2.jpg",
    "https://etuacademy.com/wp-content/uploads/2025/07/Banner-Slide-3.jpg",
    "https://etuacademy.com/wp-content/uploads/2025/07/Banner-Slide-4.jpg",
    "https://etuacademy.com/wp-content/uploads/2025/07/Banner-Slide-5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  const courses = [
    {
      id: 1,
      title: "Python Programming",
      description:
        "Dive deep into the world of programming with our Python course. Learn coding fundamentals and build real-world applications under expert guidance.",
      image: "/homepageimages/python-programming.jpg",
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      id: 2,
      title: "AI Courses",
      description:
        "Unlock the potential of Artificial Intelligence. Our AI-related courses combine theory and practical experience to prepare you for future innovations.",
      image: "/homepageimages/AI-courses.jpg",
      gradient: "from-cyan-500/20 to-teal-500/20",
    },
    {
      id: 3,
      title: "Advanced Networking",
      description:
        "Master the complexities of networking with our advanced programs. Gain insights into architecture, security, and management in a collaborative learning environment.",
      image: "/homepageimages/advance-networking.jpg",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
  ];

  return (
    <div>
      {/* Hero / Slider */}
      <div className="w-full h-screen relative overflow-hidden">
        {slides.map((src, idx) => (
          <div
            key={idx}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center ${
              idx === currentIndex ? "animate-slideZoomFade" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${src})`,
            }}
          ></div>
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 opacity-0 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
            Ignite Your Future at ETU Academy
          </h1>
          <p className="text-lg md:text-2xl text-white drop-shadow-md max-w-2xl">
            Empowering aspiring professionals with cutting-edge technology and
            entrepreneurship education for real-world success.
          </p>
        </div>
      </div>

      {/* Courses Section */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Explore Our Diverse Courses
            </h1>
            <div className="flex justify-center mb-4">
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              ETU Academy provides a variety of technological courses tailored
              to empower and equip aspiring leaders with practical skills.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-94 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10`}
                  ></div>
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="mt-20 text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your Learning Journey?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of students who are already advancing their
                careers with our comprehensive courses.
              </p>
              <Link href="/Courses">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  View All Courses
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/homepageimages/ETU-short-about.jpg"
                  alt="Happy student with laptop"
                  className="w-full h-full object-cover"
                  width={768}
                  height={768}
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-gray-600 text-sm font-medium tracking-wide uppercase">
                  WELCOME to Our Academy!
                </p>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  The Story Behind ETU Academy&#39;s Foundation
                </h1>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  With a foundation led by{" "}
                  <span className="font-semibold">industry veterans</span>, ETU
                  Academy embodies years of collective experience in{" "}
                  <span className="font-semibold">technology</span> and{" "}
                  <span className="font-semibold">
                    entrepreneurship education
                  </span>
                  .
                </p>

                <p>
                  Our instructors have hands-on experience in fields like{" "}
                  <span className="font-semibold">Python programming</span> and{" "}
                  <span className="font-semibold">advanced networking</span>,
                  ensuring students receive{" "}
                  <span className="font-semibold">current</span> and{" "}
                  <span className="font-semibold">relevant</span> knowledge.
                </p>

                <p>
                  We <span className="font-semibold">pride</span> ourselves on
                  bridging the gap between academia and real-world applications.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/Courses">
                  <button className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition-colors shadow-lg hover:shadow-xl">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Explore Courses
                  </button>
                </Link>
                <Link href="/About">
                  <button className="inline-flex items-center justify-center px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full transition-colors shadow-lg hover:shadow-xl">
                    More About Us
                    <Users className="w-5 h-5 ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* profiles */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20">
        {/* Decorative Background Circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Meet Our Successful Graduates
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            These talented individuals started their journey at{" "}
            <span className="text-indigo-600 font-semibold">ETU Academy</span> —
            now they’re building amazing careers in tech and beyond.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="flex justify-center px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center max-w-7xl">
            <TestimonialCard
              name="Anup Mandal"
              title="Full Stack Developer"
              text="ETU Academy transformed my career with its hands-on approach and expert mentors. The community support was invaluable in my learning journey."
              accent="indigo"
              maxHeight="h-[30rem]"
            />

            <TestimonialCard
              name="Abhishek T."
              title="Fullstack Development (Next.js)"
              text="From basics to deployment, this was the most complete frontend course I've ever taken. Thank you, ETU!"
              accent="rose"
              maxHeight="h-[30rem]"
            />

            <TestimonialCard
              name="Sourav Das"
              title="Agentic AI Course Graduate"
              text="From zero to building real AI agents—this place actually delivers what it promises."
              accent="emerald"
              maxHeight="h-[30rem]"
            />

            <TestimonialCard
              name="Rajat Barui"
              title="Computer Hardware & Networking"
              text="The live troubleshooting sessions helped me get a job as an on-site IT support engineer. Truly practical learning!"
              accent="yellow"
              maxHeight="h-[30rem]"
            />

            <TestimonialCard
              name="Rahul Sarkar"
              title="Python & Django Developer"
              text="The hands-on projects helped me build real-world confidence. I landed a freelance job even before finishing the course!"
              accent="cyan"
              maxHeight="h-[30rem]"
            />

            <TestimonialCard
              name="Ritwik Roy"
              title="Data Science Graduate"
              text="ETU's Data Science Bootcamp helped me land my first job as a junior analyst!"
              accent="pink"
              maxHeight="h-[30rem]"
            />
          </div>
        </div>

        {/* Section Footer */}
        <div className="text-center mt-16 px-4">
          <p className="text-gray-700 text-base md:text-lg">
            🎓 These graduates have successfully completed their training at{" "}
            <span className="font-semibold text-indigo-600">ETU Academy</span>{" "}
            and are now excelling in their respective fields.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="relative bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div
          className="relative bg-cover bg-center bg-no-repeat text-white flex items-center justify-center"
          style={{
            backgroundImage: "url('/homepageimages/happy-student.jpg')",
            minHeight: "90vh",
          }}
        >
          {/* Optional Overlay for contrast */}
          <div className="absolute inset-0"></div>

          {/* Content */}
          <div className="relative text-center px-6 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join our Academy Today
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              Start your journey towards success with ETU Academy. Enroll now
              and transform your future with our innovative courses.
            </p>
            <Link href="/Contact">
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-teal-700 transition-all duration-300">
                Join Now
              </button>
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
