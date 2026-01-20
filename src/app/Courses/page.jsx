"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("All Courses");

  const tabs = [
    "All Courses",
    "Web Development",
    "Certification Courses",
    "Sales Training",
    "AI",
    "Automation",
    "Data Science",
  ];

  const courses = [
    {
      id: 1,
      title: "Agentic AI Engineering",
      description:
        "Learn to build autonomous AI agents using tools like LangChain, CrewAI, and integrate with frameworks.",
      image: "/courses/AI-1-768x768.jpg",
      category: "AI",
      pageLink: "/AgenticAIEngineering",
    },
    {
      id: 2,
      title: "AI",
      description:
        "Dive into algorithms, model building, and practical AI applications.",
      image: "/courses/AI-5-768x768.jpg",
      category: "AI",
      pageLink: "/AI",
    },
    {
      id: 3,
      title: "Prompt Engineering",
      description:
        "Master the skill of crafting powerful prompts for AI tools like ChatGPT.",
      image: "/courses/AI-3-768x768.jpg",
      category: "AI",
      pageLink: "/PromptEngineering",
    },
    {
      id: 4,
      title: "n8n – AI Agents, Automation & Voice AI (No-Code)",
      description:
        "Build smart agents, automate workflows, and create voice bots— all without coding.",
      image: "/courses/AI-11-768x768.jpg",
      category: "Automation",
      pageLink: "/n8n",
    },
    {
      id: 5,
      title: "Complete Data Science, Machine Learning, DL & NLP Bootcamp",
      description:
        "End-to-end training in data science tools, techniques, and real-world projects.",
      image: "/courses/AI-13-768x768.jpg",
      category: "Data Science",
      pageLink: "/CompleteDataScience",
    },
    {
      id: 6,
      title: "AI",
      description:
        "Our AI courses delve into artificial intelligence, covering machine learning, neural networks, and data analysis, allowing students to harness the power of AI to drive innovation in various sectors.",
      image: "/courses/AI-9-768x768.jpg",
      category: "AI",
      pageLink: "/AI",
    },
    {
      id: 7,
      title: "Advanced Python",
      description:
        "Python Programming course offers an in-depth exploration of Python, from fundamentals to advanced concepts, equipping students with skills in data structures, algorithms, and automation.",
      image: "/courses/Python-Programming-768x768.jpeg",
      category: "Web Development",
      pageLink: "/AdvancedPython",
    },
    {
      id: 8,
      title: "Python with Django",
      description:
        "Learn Python Django, build dynamic web apps, integrate databases, templates, authentication, and REST APIs effortlessly.",
      image: "/courses/python-django.png",
      category: "Web Development",
      pageLink: "/PythonwithDjango",
    },
    {
      id: 9,
      title: "Next.js",
      description:
        "Learn Next.js, React-based framework for building fast, SEO-friendly, server-side rendered and static web apps.",
      image: "/courses/next-js.png",
      category: "Web Development",
      pageLink: "/NextJS",
    },
    {
      id: 10,
      title: "React Native",
      description:
        "Learn React Native, build cross-platform mobile apps using JavaScript, components, and native UI efficiently.",
      image: "/courses/react-native-768x768.jpg",
      category: "Web Development",
      pageLink: "/ReactNative",
    },
    {
      id: 11,
      title: "WordPress",
      description:
        "Designing responsive, user-friendly websites using WordPress platform, plugins, SEO, and customizations.",
      image: "/courses/wordpress-development-768x768.jpg",
      category: "Web Development",
      pageLink: "/WordPress",
    },
    {
      id: 12,
      title: "Basic Python",
      description:
        "Learn variables, data types, loops, functions, conditionals, and basic file handling in Python.",
      image: "/courses/basic-python-768x768.png",
      category: "Certification Courses",
      pageLink: "/BasicPython",
    },
    {
      id: 13,
      title: "Computer Basics",
      description:
        "Learn computer basics: typing, internet, email, files, folders, hardware, software, safety, and troubleshooting.",
      image: "/courses/computer-fundamentals-768x768.jpg",
      category: "Certification Courses",
      pageLink: "/ComputerBasics",
    },
    {
      id: 14,
      title: "Basic Networking",
      description:
        "Learn IP addressing, subnetting, DNS, routing, switching, firewalls, protocols, and network troubleshooting basics.",
      image: "/courses/Basic-Networking-768x768.jpg",
      category: "Certification Courses",
      pageLink: "/BasicNetworking",
    },
    {
      id: 15,
      title: "Computer Hardware",
      description:
        "Learn essential computer hardware concepts: components, assembly, troubleshooting, maintenance, and performance optimization in-depth.",
      image: "/courses/computer-hardware-768x768.jpg",
      category: "Certification Courses",
      pageLink: "/ComputerHardware",
    },
    {
      id: 16,
      title: "Advanced Networking",
      description:
        "Master complex protocols, routing, security, and cloud networking through hands-on, expert-led advanced networking training.",
      image: "/courses/advanced-networking-768x768.jpg",
      category: "Certification Courses",
      pageLink: "/AdvancedNetworking",
    },
    {
      id: 17,
      title: "Consultative Selling",
      description:
        "Master relationship-based selling, uncover client needs, and offer tailored solutions to close high-value deals.",
      image: "/courses/consultative-selling-2-768x768.jpg",
      category: "Sales Training",
      pageLink: "/ConsultativeSelling",
    },
    {
      id: 18,
      title: "Mastering The Basics of Sales",
      description:
        "Learn essential sales skills, customer handling, communication, and closing techniques for real-world success.",
      image: "/courses/sales-basics-768x768.jpg",
      category: "Sales Training",
      pageLink: "/MasteringTheBasicsofSales",
    },
    {
      id: 19,
      title: "Roadmap for High Ticket Selling",
      description:
        "Learn premium product positioning, trust building, objection handling, storytelling, and closing high-value sales confidently.",
      image: "/courses/sales-training-768x768.jpg",
      category: "Sales Training",
      pageLink: "/RoadmapTicketSelling",
    },
    {
      id: 20,
      title: "The King Skill - Negotiation Skills",
      description:
        "Master persuasion, handle objections, close deals confidently with real-world negotiation techniques and practical roleplay.",
      image: "/courses/negotiation-768x768.jpg",
      category: "Sales Training",
      pageLink: "/KingSkillNegotiation",
    },
    {
      id: 21,
      title: "Value Selling and Neuro Selling",
      description:
        "Master emotional triggers, value-driven persuasion, and brain-based sales techniques for higher conversions.",
      image: "/courses/value-neuro-selling-768x768.jpg",
      category: "Sales Training",
      pageLink: "/SellingNeuroSelling",
    },
    {
      id: 22,
      title: "Selling to Next-GEN Leaders",
      description:
        "Master modern sales strategies to influence, connect, and close deals with today&#39;s Next-Gen decision makers.",
      image: "/courses/consultative-selling-1-768x768.jpg",
      category: "Sales Training",
      pageLink: "/SellingNextGENLeaders",
    },
  ];

  // Group courses by category
  const coursesByCategory = courses.reduce((acc, course) => {
    if (!acc[course.category]) acc[course.category] = [];
    acc[course.category].push(course);
    return acc;
  }, {});

  // Determine courses to display based on active tab
  const displayedCourses =
    activeTab === "All Courses" ? courses : coursesByCategory[activeTab] || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      {/* Explore Courses Section Heading */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Diverse Courses
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            ETU Academy provides a variety of technology courses tailored to
            empower and equip aspiring leaders with practical skills.
          </p>
        </div>
      </div>

      {/* Course Tabs */}
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === tab
                  ? "bg-teal-400 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-teal-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-88 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {course.description}
                </p>

                {course.pageLink ? (
                  <Link
                    href={course.pageLink}
                    className="w-full block text-center py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md transition-colors"
                  >
                    Course Details
                  </Link>
                ) : (
                  <button className="w-full py-2 bg-gray-400 text-white font-semibold rounded-md cursor-not-allowed">
                    Details Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose ETU Academy Section */}
      <div className="bg-gradient-to-b from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
            Why Choose ETU Academy for Your Learning
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            We prioritize personalized learning and community engagement,
            offering courses tailored support and resources to succeed in their
            professional journeys.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Expert Mentorship */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/courses/expert-mentorship.jpg"
                  alt="Expert teaching"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  Expert Mentorship
                </h3>
                <p className="text-gray-700">
                  Learn directly from industry experts who bring real-world
                  experience into the classroom. Our mentorship program is
                  designed to provide personalized guidance.
                </p>
              </div>
            </div>

            {/* Hands-On Learning */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/courses/hands-on-training.jpg"
                  alt="Hands-on learning"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center space-y-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  Hands-On Learning
                </h3>
                <p className="text-gray-700">
                  Experience practical, immersive training that equips you with
                  the skills to excel in today&#39;s competitive job market. Apply
                  your knowledge through real projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
