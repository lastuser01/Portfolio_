import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
  Trophy,
  Code2,
  Target,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { CertificateViewer } from "./CertificateViewer";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCertificate, setSelectedCertificate] = useState<{
    title: string;
    imageUrl: string;
    issuer: string;
  } | null>(null);

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Savitribai Phule Pune University",
      period: "2024 - 2026",
      cgpa: "8.7 CGPA",
      status: "In Progress",
      color: "blue",
      description:
        "Specializing in advanced software development, system design, and modern web technologies.",
      coursework: [
        "Advanced Database Management",
        "Software Engineering",
        "Cloud Computing",
        "Machine Learning",
        "Web Technologies",
        "Data Structures & Algorithms",
      ],
      achievements: [
        "Consistently maintaining 8.7+ CGPA",
        "Active participant in technical workshops",
        "Leading team projects and presentations",
      ],
    },
    {
      degree: "Bachelor of Computer Science (BCS)",
      institution: "Savitribai Phule Pune University",
      period: "2021 - 2024",
      cgpa: "First Class",
      status: "Completed",
      color: "purple",
      description:
        "Built strong foundation in computer science fundamentals and programming concepts.",
      coursework: [
        "Object-Oriented Programming",
        "Database Management Systems",
        "Computer Networks",
        "Operating Systems",
        "Web Development",
        "Software Testing",
      ],
      achievements: [
        "Graduated with First Class",
        "Completed multiple web development projects",
        "Participated in coding competitions",
      ],
    },
  ];

  const certifications = [
    {
      title: "Cloud Computing Certification",
      issuer: "NPTEL",
      date: "2025",
      icon: Award,
      color: "from-blue-500 to-cyan-500",
      description:
        "Comprehensive course covering cloud infrastructure, services, and deployment models",
      certificateUrl:
        "https://drive.google.com/file/d/1olL69d42F9xZHY8EZi5VnfoQVZ17sXzP/view",
    },
    {
      title: "Foundations of UX Design",
      issuer: "Google",
      date: "2023",
      icon: Award,
      color: "from-purple-500 to-pink-500",
      description:
        "User-centered design principles and methodologies for creating effective digital experiences",
      certificateUrl:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~92NEQVB3ZPDQ/CERTIFICATE_LANDING_PAGE~92NEQVB3ZPDQ.jpeg",
    },
    {
      title: "Java Course Certificate",
      issuer: "Udemy",
      date: "2024",
      icon: Award,
      color: "from-green-500 to-emerald-500",
      description:
        "Advanced Java programming concepts and enterprise application development",
      certificateUrl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-96317c66-24ad-4a81-b20c-920eaea46d0e.jpg?v=1734997880000",
    },
  ];

  const highlights = [
    {
      icon: Trophy,
      label: "8.7 CGPA",
      description: "Current Academic Performance",
    },
    {
      icon: BookOpen,
      label: "5+ Courses",
      description: "Completed Successfully",
    },
    {
      icon: Code2,
      label: "Multiple Projects",
      description: "Academic & Personal",
    },
    { icon: Target, label: "First Class", description: "Bachelor's Degree" },
  ];

  return (
    <section
      id="education"
      className="min-h-[200vh] py-20 px-4 bg-zinc-900/50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30" />
              <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="mb-6">
            Education <span className="text-blue-400">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Academic foundation in computer science with focus on practical
            application development
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-zinc-700 transition-all">
                <item.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                <div className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-zinc-500">{item.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Timeline */}
        <div className="relative max-w-5xl mx-auto mb-24">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block" />

          <div className="space-y-16">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                className={`relative grid lg:grid-cols-2 gap-8 items-start ${
                  index % 2 === 0 ? "" : "lg:text-right"
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0 ? "lg:pr-12" : "lg:pl-12 lg:col-start-2"
                  }`}
                >
                  <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        edu.color === "blue"
                          ? "from-blue-500/10 to-cyan-500/10"
                          : "from-purple-500/10 to-pink-500/10"
                      } opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity`}
                    />

                    <div className="relative">
                      {/* Header */}
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          index % 2 === 0 ? "" : "lg:flex-row-reverse"
                        }`}
                      >
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${
                            edu.color === "blue"
                              ? "from-blue-500 to-cyan-500"
                              : "from-purple-500 to-pink-500"
                          }`}
                        >
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <span
                          className={`px-4 py-1.5 rounded-full ${
                            edu.status === "In Progress"
                              ? "bg-blue-500/10 border border-blue-500/20 text-blue-400"
                              : "bg-purple-500/10 border border-purple-500/20 text-purple-400"
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>

                      <h3 className="mb-3">{edu.degree}</h3>
                      <p className="text-zinc-400 mb-3 text-lg">
                        {edu.institution}
                      </p>
                      <p className="text-zinc-500 mb-4">{edu.description}</p>

                      <div
                        className={`flex flex-wrap gap-4 text-zinc-500 mb-6 ${
                          index % 2 === 0 ? "" : "lg:justify-end"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        {edu.cgpa && (
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-blue-400" />
                            <span className="text-blue-400">{edu.cgpa}</span>
                          </div>
                        )}
                      </div>

                      {/* Coursework */}
                      <div className="mb-6">
                        <h4 className="text-sm mb-3 flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-purple-400" />
                          Key Coursework
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-xs text-zinc-400"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm mb-3 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-yellow-400" />
                          Achievements
                        </h4>
                        <ul
                          className={`space-y-2 ${
                            index % 2 === 0 ? "" : "lg:text-right"
                          }`}
                        >
                          {edu.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-sm text-zinc-400 flex items-start gap-2"
                            >
                              <span className="text-blue-400 mt-0.5">✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-8 hidden lg:block">
                  <motion.div
                    className={`w-6 h-6 rounded-full ${
                      edu.color === "blue" ? "bg-blue-500" : "bg-purple-500"
                    } ring-8 ring-zinc-900`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                  />
                </div>

                {/* Empty space for alternating layout */}
                {index % 2 !== 0 && <div className="hidden lg:block" />}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-center mb-12">
            Certifications &{" "}
            <span className="text-blue-400">Professional Development</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity`}
                />

                <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all h-full">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} p-0.5 mb-6 mx-auto`}
                  >
                    <div className="w-full h-full bg-zinc-900 rounded-xl flex items-center justify-center">
                      <cert.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h4 className="mb-3 text-center">{cert.title}</h4>
                  <p className="text-zinc-500 text-center mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-zinc-400 text-center mb-4">
                    {cert.description}
                  </p>
                  <div className="text-xs text-center text-zinc-600">
                    {cert.date}
                  </div>

                  <div className="mt-4 text-center">
                    <button
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                      onClick={() =>
                        setSelectedCertificate({
                          title: cert.title,
                          imageUrl: cert.certificateUrl,
                          issuer: cert.issuer,
                        })
                      }
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center mt-20"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-30" />
            <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl px-8 py-6">
              <p className="text-lg text-zinc-300">
                📚 Continuously learning and staying updated with the latest
                technologies and industry trends
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Viewer Modal */}
      {selectedCertificate && (
        <CertificateViewer
          isOpen={true}
          title={selectedCertificate.title}
          imageUrl={selectedCertificate.imageUrl}
          issuer={selectedCertificate.issuer}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
}
