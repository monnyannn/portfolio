import React from 'react';

const Resume = () => {
  const experiences = [
    {
      title: 'Product Designer',
      company: 'Sterling Bank',
      period: ' June 2024 - Present',
      description: [
        " Design high-fidelity mockups that align with the bank's visual identity, ensuring a professional and trustworthy appearance.",
        " Implement UI elements promoting secure user behavior (e.g., multi-factor authentication, data protection info).",
        " Ensure designs meet regulatory standards like PCI DSS and GDPR.",
        " Design accessible interfaces, considering color contrast, text size, and screen reader compatibility.",
        " Conduct usability testing and adjust designs based on feedback to meet accessibility standards (WCAG).",
        " Optimize for consistency across devices (desktop, tablet, mobile, ATM) with responsive design.",
        " Collaborate with product managers, developers, marketing, and compliance to align designs with business goals.",
        " Provide specifications and assets to developers for accurate implementation.",
        " Create interactive prototypes and gather feedback from users and stakeholders.",
        " Use analytics and user feedback to optimize UI for performance and satisfaction.",
        " Design scalable interfaces to accommodate future growth and new features.",
        " Stay updated on UI/UX trends in the financial sector to maintain competitive, user-friendly designs.",
      ],
    },
    {
      title: 'UI/UX Designer, Frontend Developer',
      subtitle: 'PRODUCT DESIGN, FRONTEND DEVELOPER',
      company: ' Intelligence Business Owner Support Service (IBOSS)',
      period: 'January 2023 - June 2024',
      description: [
        " Develop and maintain a UI component library that can be used across different platforms to ensure consistency and efficiency in the design process.",
        ' Designed responsive web applications and mobile interfaces',
        ' Conducted user research and usability testing',
        ' Created wireframes, prototypes, and high-fidelity designs',
        " Designed and developed a responsive personal portfolio website using React and Tailwind CSS.",
        " Utilized shadcn/ui components for consistent styling and enhanced UI interactions.",
        " Collaborated with senior developers to build and maintain user interfaces using React and Tailwind CSS.",
        " Assisted in the development of reusable UI components using shadcn/ui to streamline the design process.",
        " Participated in daily stand-ups, code reviews, and testing to ensure high-quality and performant code.",
        " Collaborated with peers on open-source projects, contributing to frontend development and UI design.",
      ],
    },
    // Add more experiences as needed
  ];

  const handleDownloadCV = () => {
    const cvPath = '/assets/resume.pdf';
    window.open(cvPath, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 py-12">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-custom-primary hover:bg-custom-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-primary"
            >
              Download CV
            </button>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                    <p className="text-indigo-600">{experience.company}</p>
                  </div>
                  <p className="text-gray-500 mt-2 md:mt-0">{experience.period}</p>
                </div>
                <ul className="mt-4 space-y-2">
                <h5 className="text-lg font-semibold text-gray-400">{experience.subtitle}</h5>
                  {experience.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Bsc in Information Technolgy(I.T)</h3>
              <p className="text-indigo-600">Middlesex University</p>
              <p className="text-gray-500">2019 - 2020</p>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Advanced Dilopma</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900">Advanced Diploma in Software Engineering(ADSE)</h3>
                <p className="text-indigo-600">Aptech Computer Education</p>
                <p className="text-gray-500">2016 - 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
