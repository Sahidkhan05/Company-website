import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/NavBar";
import FooterSection from "../components/FooterSection";

export default function CareersPage() {
  useEffect(() => window.scrollTo(0, 0), []);

  const [openJob, setOpenJob] = useState(null);
  const [applyJob, setApplyJob] = useState(null);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    resume: null,
  });

  const jobs = [
    {
      title: "Sales Executive / Business Development Executive",
      location: "Jaipur | On-site",
      salary: "₹30,000 + Incentives",
      description:
        "LNAVONOUS is hiring a confident and result-oriented Sales Executive with strong communication and client-handling skills.",
      responsibilities: [
        "Identify and develop new business opportunities",
        "Present and pitch products/services",
        "Client meetings (online & offline)",
        "Convert leads into customers",
        "Achieve monthly sales targets",
        "Maintain CRM & sales reports",
      ],
      skills: [
        "2–3 years sales experience",
        "Strong communication & negotiation skills",
        "Professional attitude",
        "Basic computer & CRM knowledge",
      ],
      offer: [
        "Fixed ₹30,000 salary",
        "Attractive incentives",
        "Growth opportunities",
        "Direct leadership exposure",
      ],
    },
    {
      title: "Marketing Executive (Remote)",
      location: "Remote | Full-time",
      salary: "₹20,000 – ₹25,000",
      description:
        "We are looking for a creative Marketing Executive to manage digital marketing and brand presence remotely.",
      responsibilities: [
        "Plan and execute digital marketing campaigns",
        "Manage social media & content",
        "Coordinate with sales team",
        "Track & optimize campaign performance",
      ],
      skills: [
        "1–2 years marketing experience",
        "Digital marketing knowledge",
        "Social media & branding skills",
        "Ability to work independently",
      ],
      offer: [
        "Work from home",
        "Creative ownership",
        "Performance-based growth",
      ],
    },
    {
      title: "Tech Intern / Full Stack Intern (Remote)",
      location: "Remote | 2 Months Internship",
      salary: "Unpaid",
      description:
        "Hands-on internship for candidates seeking real-world project exposure in frontend and backend development.",
      responsibilities: [
        "Assist frontend & backend development",
        "Work on live projects",
        "Debug & test applications",
        "Follow best practices",
      ],
      skills: [
        "HTML, CSS, JavaScript, React basics",
        "Any backend (Node / Python / PHP / Java)",
        "API & database understanding",
        "Git/GitHub basics",
      ],
      offer: [
        "Real project experience",
        "Mentorship",
        "Internship certificate",
        "Full-time opportunity (performance-based)",
      ],
    },
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "service_u6afvfc",
      "template_career", // ✅ HR TEMPLATE
      {
        job: applyJob.title, // ✅ JOB TITLE
        name: formData.name,
        email: formData.email,
        number: formData.number,
        message: formData.message,
        time: new Date().toLocaleString(),
      },
      "3UaRFs_VWn2gRuLkh"
    )
    .then(() => {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setApplyJob(null);
      setFormData({
        name: "",
        email: "",
        number: "",
        message: "",
        resume: null,
      });
    })
    .catch(() => alert("Something went wrong. Please try again."));
};


  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <section className="text-center py-20 mt-10 bg-blue-600 text-white">
          <h1 className="text-4xl font-bold">Careers at LNAVONOUS</h1>
          <p className="mt-3 text-lg">Explore opportunities & grow with us</p>
        </section>

        {/* Job Cards */}
        <section className="max-w-5xl mx-auto py-16 px-6 space-y-8">
          {jobs.map((job, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-sm text-gray-600">
                    {job.location} | {job.salary}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setOpenJob(openJob === i ? null : i)}
                    className="border px-4 py-2 rounded"
                  >
                    {openJob === i ? "Hide Details" : "View Details"}
                  </button>
                  <button
                    onClick={() => setApplyJob(job)}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Accordion */}
              {openJob === i && (
                <div className="mt-6 space-y-4 text-sm text-gray-700">
                  <p>{job.description}</p>

                  <div>
                    <h4 className="font-semibold">Responsibilities:</h4>
                    <ul className="list-disc ml-6">
                      {job.responsibilities.map((r, idx) => (
                        <li key={idx}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold">Required Skills:</h4>
                    <ul className="list-disc ml-6">
                      {job.skills.map((s, idx) => (
                        <li key={idx}>{s}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold">What We Offer:</h4>
                    <ul className="list-disc ml-6">
                      {job.offer.map((o, idx) => (
                        <li key={idx}>{o}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* APPLY POPUP */}
        {applyJob && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white max-w-xl w-full p-6 rounded-xl relative">
              <button
                onClick={() => setApplyJob(null)}
                className="absolute top-3 right-4 text-xl"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-4">
                Apply for {applyJob.title}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  onChange={handleChange}
                  className="w-full border p-3 rounded"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  onChange={handleChange}
                  className="w-full border p-3 rounded"
                />
                <input
                  type="tel"
                  name="number"
                  required
                  placeholder="Contact Number"
                  onChange={handleChange}
                  className="w-full border p-3 rounded"
                />

                {/* Resume */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Upload Resume (PDF only)
                  </label>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf"
                    required
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    You can also share Drive / Portfolio link below
                  </p>
                </div>

                <textarea
                  name="message"
                  placeholder="Experience / Portfolio / Drive link"
                  rows="4"
                  onChange={handleChange}
                  className="w-full border p-3 rounded"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded"
                >
                  Submit Application
                </button>

                {success && (
                  <p className="text-green-600 text-center font-semibold">
                    ✅ Application submitted successfully!
                  </p>
                )}
              </form>
            </div>
          </div>
        )}
      </div>

      <FooterSection />
    </>
  );
}
