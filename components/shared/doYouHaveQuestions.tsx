import React from "react";

const DoYouHaveQuestions: React.FC = () => {
  return (
    <section className="bg-[#27AE60] py-12 px-4">
      <div className="max-w-[82%] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-white">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Do You Have Questions<span className="text-white">?</span>
          </h2>
          <p className="text-sm md:text-base">
            We'll help you to grow your career and growth.
          </p>
        </div>
        <a
          href="#contact"
          className="bg-white text-green-500 font-medium py-3 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  );
};

export default DoYouHaveQuestions;
