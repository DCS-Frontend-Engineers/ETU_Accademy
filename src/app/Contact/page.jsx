"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MapPin, Mail, Phone, Facebook, Instagram, MessageCircle } from "lucide-react";

// ✅ Course list
const courses = [
  { id: 1, title: "Agentic AI Engineering" },
  { id: 2, title: "AI" },
  { id: 3, title: "Prompt Engineering" },
  { id: 4, title: "n8n – AI Agents, Automation & Voice AI (No-Code)" },
  { id: 5, title: "Complete Data Science, Machine Learning, DL & NLP Bootcamp" },
  { id: 6, title: "AI" },
  { id: 7, title: "Advanced Python" },
  { id: 8, title: "Python with Django" },
  { id: 9, title: "Next.js" },
  { id: 10, title: "React Native" },
  { id: 11, title: "WordPress" },
  { id: 12, title: "Basic Python" },
  { id: 13, title: "Computer Basics" },
  { id: 14, title: "Basic Networking" },
  { id: 15, title: "Computer Hardware" },
  { id: 16, title: "Advanced Networking" },
  { id: 17, title: "Consultative Selling" },
  { id: 18, title: "Mastering The Basics of Sales" },
  { id: 19, title: "Roadmap for High Ticket Selling" },
  { id: 20, title: "The King Skill - Negotiation Skills" },
  { id: 21, title: "Value Selling and Neuro Selling" },
  { id: 22, title: "Selling to Next-GEN Leaders" },
];

// ✅ Separate component that uses useSearchParams
const ContactFormContent = () => {
  const searchParams = useSearchParams();
  const courseIdFromUrl = searchParams.get("courseId");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  // Auto-select course if courseId is in URL
  useEffect(() => {
    if (courseIdFromUrl) {
      const matchedCourse = courses.find((c) => c.id === parseInt(courseIdFromUrl));
      if (matchedCourse) {
        setFormData((prev) => ({ ...prev, course: matchedCourse.title }));
      }
    }
  }, [courseIdFromUrl]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact_ETU/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      alert("Thank you for your message! We will get back to you soon.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        course: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="bg-white h-3/4 rounded-2xl shadow-lg p-6 lg:p-8">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              placeholder="Enter your first name"
              className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              placeholder="Enter your last name"
              className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-2">
            Select Course
          </label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          >
            <option value="">-- Choose a Course --</option>
            {courses.map((course) => (
              <option key={course.id} value={course.title}>
                {course.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows="5"
            placeholder="Tell us how we can help you..."
            className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-vertical"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none"
        >
          Send Now
        </button>
      </form>
    </div>
  );
};

// ✅ Loading fallback for Suspense
const FormLoadingFallback = () => (
  <div className="bg-white h-3/4 rounded-2xl shadow-lg p-6 lg:p-8 animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="h-12 bg-gray-200 rounded"></div>
        <div className="h-12 bg-gray-200 rounded"></div>
      </div>
      <div className="h-12 bg-gray-200 rounded"></div>
      <div className="h-12 bg-gray-200 rounded"></div>
      <div className="h-12 bg-gray-200 rounded"></div>
      <div className="h-32 bg-gray-200 rounded"></div>
      <div className="h-14 bg-gray-200 rounded"></div>
    </div>
  </div>
);

// ✅ Main component with Suspense wrapper
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Section - Contact Info & Map */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                Join us in-person
              </h1>
              <p className="text-xl text-gray-600 mb-6">We&apos;d Love to Hear from You!</p>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <a
                      href="mailto:etuacademy@gmail.com"
                      className="text-blue-600 hover:text-blue-700 transition-colors underline"
                    >
                      etuacademy@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <a
                      href="tel:+919073575050"
                      className="text-blue-600 hover:text-blue-700 transition-colors underline"
                    >
                      +91 9073575050
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">
                      EF-17, Rajdanga Main Road, Kasba<br />
                      (Near Acropolis Mall)<br />
                      Kolkata 700107
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="mt-8">
                <p className="font-semibold text-gray-800 mb-4">Connect with us</p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-pink-500 hover:bg-pink-600 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://wa.me/919073575050"
                    className="w-12 h-12 bg-teal-500 hover:bg-teal-600 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Find Us Here</h3>
              <div className="w-full h-64 lg:h-80 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5!2d88.393111!3d22.510750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273f1e0b1d5fb%3A0x0!2sG96V%2B865%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1695312000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Academy Location"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>

          {/* ✅ Right Section - Contact Form wrapped in Suspense */}
          <Suspense fallback={<FormLoadingFallback />}>
            <ContactFormContent />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;