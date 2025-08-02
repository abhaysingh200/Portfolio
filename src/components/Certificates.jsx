import React from "react";

const certificates = [
  { name: "Java Bootcamp Winner", org: "Upgrad-Bootcamp" },
  { name: "Blockchain Developer", org: "Upgrad-Campus" },
  { name: "Backend Developer", org: "Upgrad-Campus" },
];

const Certificates = () => {
  return (
    <section className="bg-[#0e1117] px-6 md:px-16 py-12" id="certificates">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Certificates</h2>
        <ul className="space-y-4">
          {certificates.map((cert, index) => (
            <li key={index} className="bg-[#161b22] p-4 rounded shadow hover:shadow-lg">
              <p className="text-blue-400 font-semibold">{cert.name}</p>
              <p className="text-gray-400 text-sm">Issued by: {cert.org}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certificates;
