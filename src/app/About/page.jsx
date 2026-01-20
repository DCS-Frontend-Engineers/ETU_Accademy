import Image from "next/image";
import Link from "next/link";

export default function AboutETUAcademy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-100 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-center text-teal-600">
            About ETU Academy
          </h1>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <Image
                src="/about/ETU-foundation-about.jpg"
                alt="Students collaborating"
                width={768}
                height={768}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                The Story Behind ETU Academy&#39;s Foundation
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  ETU Academy stands at the forefront of education in Kolkata,
                  focusing on technology and entrepreneurship. Our innovative
                  approach, combined with personalized mentorship from industry
                  experts, ensures an enriching learning environment for our
                  students.
                </p>

                <p>
                  Founded in 2024, ETU Academy was born out of a passion for
                  fostering talent in technology and business. Our mission is to
                  empower aspiring professionals with the skills they need to
                  succeed.
                </p>

                <p>
                  We have successfully served a diverse range of clients,
                  including young professionals eager to enhance their skills,
                  and entrepreneurs looking to innovate. Our community-oriented
                  approach has fostered growth among ambitious individuals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-teal-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
            Core Values
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            At ETU Academy, our core values drive our mission to provide
            exceptional learning experiences and cultivate a vibrant community.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Innovation */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center space-y-4 hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-xl font-bold text-teal-600">Innovation</h3>
              <p className="text-gray-700 leading-relaxed">
                We embrace cutting-edge methodologies and continuously adapt our
                curriculum to stay ahead in the ever-evolving landscape of
                technology and entrepreneurship.
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center space-y-4 hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-xl font-bold text-teal-600">Collaboration</h3>
              <p className="text-gray-700 leading-relaxed">
                We believe in the power of collaboration, fostering partnerships
                among learners, entrepreneurs, and industry experts to create a
                supportive ecosystem.
              </p>
            </div>

            {/* Excellence */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center space-y-4 hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-xl font-bold text-teal-600">Excellence</h3>
              <p className="text-gray-700 leading-relaxed">
                Commitment to excellence drives us to provide high-quality
                education and mentorship, ensuring our students are
                well-prepared for their future endeavors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us Today Section */}
      <div className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black py-20 overflow-hidden">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url(/about/about-join-us-2.jpg",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join Us Today
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
            Start your journey towards success with ETU Academy. Enroll now and
            transform your future with our innovative courses.
          </p>
          <Link href="/Contact">
            <button className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md transition-colors shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
