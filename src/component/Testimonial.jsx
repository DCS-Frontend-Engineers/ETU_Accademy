import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
export default function TestimonialCard({
  name = "Sourav Das",
  title = "Agentic AI Course",
  text = "From zero to building real AI agents—this place actually delivers what it promises.",
  rating = 5,
  avatar = null,
  cardHeight = "h-[28rem]" // fixed card height
}) {
  return (
    <div className="flex items-center justify-center p-4">
      <div
        className={`bg-white rounded-3xl shadow-lg p-8 w-80 relative transform transition-all duration-300 hover:shadow-xl flex flex-col justify-between ${cardHeight}`}
      >
        {/* Quote Mark */}
        <div className="text-center">
          <span className="text-6xl text-gray-300 font-serif leading-none">
            "
          </span>
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-600 text-center text-base leading-relaxed mb-4 px-2 line-clamp-6">
          {text}
        </p>

        {/* Star Rating */}
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-6 h-6 ${
                i < rating ? "text-teal-500" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Profile Section - Avatar */}
        <div className="flex flex-col items-center relative">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 border-4 border-white shadow-md relative z-10 -mt-5">
            {avatar ? (
              <Image
                src={avatar}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                <svg
                  className="w-10 h-10 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mt-12">
          <h3 className="text-gray-900 font-semibold text-lg">{name}</h3>
          <p className="text-gray-500 text-sm mt-1">{title}</p>
        </div>
      </div>
    </div>
  );
}
