import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Header */}
      <h1 className="text-white font-bold p-4 text-3xl text-center font-serif bg-gray-500">
        Welcome to My Portfolio
      </h1>

      {/* Main Section */}
      <div className="bg-white flex flex-col md:flex-row items-center justify-center flex-1 px-4 md:px-20 py-10 gap-10">
        
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <img
            src="/images/uma.jpg"
            alt="my profile"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-xl object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
            Hi, I’m Umaramani
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            I love building modern websites and applications that combine clean design with smooth functionality. 
            Take a look at my projects and see what I’ve been working on!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              to="/about"
              className="bg-neutral-600 text-white p-3 rounded-lg font-semibold shadow-md hover:bg-black transition duration-300 text-center"
            >
              About
            </Link>
            <Link
              to="/project"
              className="bg-neutral-600 text-white p-3 rounded-lg font-semibold shadow-md hover:bg-black transition duration-300 text-center"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="bg-neutral-600 text-white p-3 rounded-lg font-semibold shadow-md hover:bg-black transition duration-300 text-center"
            >
              Contact
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
