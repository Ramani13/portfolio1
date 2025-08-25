import { useState } from "react";

function Contact() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 md:px-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-600">Contact & Rate Me</h1>
      </div>

      {/* Contact Info */}
      <section className="mb-8 bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-600 mb-4 border-b pb-2">Get in Touch</h2>
        <p className="text-gray-700 mb-2">
          <strong>Phone:</strong>{" "}
          <a href="tel:9342892070" className="text-blue-600 hover:underline">
            9342892070
          </a>
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong>{" "}
          <a href="mailto:ramani132005@gmail.com" className="text-blue-600 hover:underline">
            ramani132005@gmail.com
          </a>
        </p>
        <p className="text-gray-700 mb-2">
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/Ramani13" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            github.com/Ramani13
          </a>
        </p>
        <p className="text-gray-700">
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/uma-ramani-035a32359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/uma-ramani-035a32359
          </a>
        </p>
      </section>

      {/* Rating Section */}
      <section className="bg-white shadow-lg rounded-lg p-6 text-center max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-gray-600 mb-4 border-b pb-2">Rate My Work</h2>
        <div className="flex justify-center space-x-2 text-3xl text-yellow-400 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            >
              {star <= (hover || rating) ? "★" : "☆"}
            </button>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          Submit Rating
        </button>
        {submitted && (
          <p className="mt-4 text-green-600 font-semibold">Thank you! Your rating has been submitted.</p>
        )}
      </section>
    </div>
  );
}

export default Contact;
