import React from 'react';

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "IBM Skillbuild",
    date: "June 2024 - August 2024",
    description: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Implementing responsive design and ensuring cross-browser compatibility."
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Cognifyz Technologies",
    date: "May 2024 - June 2024",
    description: [
      "I led frontend web development with Javascript, React, creating scalable microservices and interfaces.",
      "I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs.",
      "Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions."
    ],
  },
  {
    title: "Head Coordinator",
    company_name: "Team HORIZON",
    date: "Apr 2022 - August 2024",
    description: [
      "A cadre of dynamic individuals, working upon enhancing and cultivating top notch speaking and communication skills.",
      "Got recongnition from various IITs by our participation and bringing loreals to our college.",
      "Works upon enhancing and cultivating top notch speaking and communication skills."
    ],
  },
];

const Encryption = () => {
  return (
    <section className="py-16 px-8">
      <div className="relative w-full h-[300px] flex justify-center items-center">
        <h1 className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Experience
        </h1>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-white text-2xl font-bold">
              {experience.title}
            </h3>
            <p className="text-gray-400">{experience.company_name}</p>
            <p className="text-gray-500 mb-4">{experience.date}</p>
            <div className="space-y-2 text-gray-300">
              {experience.description.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Encryption;
