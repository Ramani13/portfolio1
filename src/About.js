function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 md:px-20">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-600">Umaramani M</h1>
      </div>

      {/* Summary */}
      <section className="mb-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-600 mb-4 border-b pb-2">Summary</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Aspiring software engineer with a strong foundation in web development and backend services.</li>
          <li>Proficient in developing full-stack applications using React, REST APIs, and Spring Boot.</li>
          <li>Skilled in database management, object-oriented design, and software development best practices.</li>
        </ul>
      </section>

      {/* Education */}
      <section className="mb-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-600 mb-4 border-b pb-2">Education</h2>
        <div>
          <p className="text-lg font-semibold">Sri Krishna College of Engineering and Technology</p>
          <p className="italic text-black">Bachelor of Engineering in Computer Science and Engineering | CGPA: 7.81</p>
          <p className="text-gray-500 mb-3">Coimbatore, India</p>
          <p className="text-lg font-semibold">MKVK Matric Hr. Sec. School</p>
          <p className="italic text-gray-600">Higher Secondary Education | Percentage: 87%</p>
          <p className="text-gray-500">India</p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-600 mb-4 border-b pb-2">Technical Skills</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Programming Languages:</strong> C++, Java (Basics), HTML, CSS, JavaScript</li>
          <li><strong>Frameworks and Technologies:</strong> React.js, REST API, Spring Boot</li>
          <li><strong>Database Management:</strong> DBMS</li>
          <li><strong>Software Design:</strong> OOAD</li>
          <li><strong>Core Subjects:</strong> Data Structures and Algorithms (DSA)</li>
          <li><strong>Developer Tools:</strong> VS Code, Git, Docker</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
