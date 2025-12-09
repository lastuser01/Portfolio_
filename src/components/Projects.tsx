import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  Folder,
  Calendar,
  Users,
  Star,
} from "lucide-react";
import { Button } from "./ui/button";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "RoomieFinder",
      description:
        "A comprehensive roommate matching platform with secure authentication and intuitive onboarding flow.",
      longDescription:
        "Full-featured platform connecting students and professionals seeking compatible roommates with advanced matching algorithms.",
      highlights: [
        "Spring Boot backend with RESTful APIs",
        "JWT-based authentication & authorization",
        "React onboarding system with multi-step forms",
        "MySQL database with optimized queries",
        "Role-based access control system",
      ],
      tags: ["Spring Boot", "React", "JWT", "MySQL", "REST API"],
      gradient: "from-blue-500 to-cyan-500",
      year: "2025",
      team: "Solo",
      status: "Completed",
    },
    {
      title: "Aveline",
      description:
        "A scalable e-commerce platform with microservices architecture and cloud integration.",
      longDescription:
        "Modern e-commerce solution featuring microservices, cloud storage, and advanced caching for optimal performance.",
      highlights: [
        "MERN stack with microservices pattern",
        "Cloudinary integration for media management",
        "Payment gateway integration",
        "Admin dashboard with analytics",
      ],
      tags: ["MongoDB", "Express", "React", "Node.js", "Cloudinary"],
      gradient: "from-purple-500 to-pink-500",
      year: "2024",
      team: "Solo",
      status: "Completed",
    },
    {
      title: "LinkUp",
      description:
        "A real-time messaging application enabling instant communication with modern UX.",
      longDescription:
        "Feature-rich chat application with real-time messaging, online status tracking, and seamless user experience.",
      highlights: [
        "Socket.IO for real-time messaging",
        "WebSocket connections with auto-reconnect",
        "Message persistence with MongoDB",
        "Responsive chat interface",
        "User presence and typing indicators",
      ],
      tags: ["Socket.IO", "Node.js", "MongoDB", "React", "WebSocket"],
      gradient: "from-green-500 to-emerald-500",
      year: "2023",
      team: "group",
      status: "Completed",
    },
    {
      title: "Blog Platform",
      description:
        "A full-stack blogging platform with user authentication and role-based access control.",
      longDescription:
        "Complete blogging platform built with JSP and Servlets following MVC architecture with secure data handling and responsive UI.",
      highlights: [
        "MVC architecture with JSP and Servlets",
        "User authentication with role-based access (Admin/User)",
        "PreparedStatement in JDBC to prevent SQL injection",
        "Bootstrap integration for responsive UI",
        "Secure data handling with MySQL",
      ],
      tags: [
        "Java",
        "JSP",
        "Servlets",
        "JDBC",
        "MySQL",
        "Bootstrap",
        "JavaScript",
      ],
      gradient: "from-yellow-500 to-orange-500",
      year: "2023",
      team: "Solo",
      status: "Completed",
    },
  ];

  const stats = [
    { label: "Total Projects", value: "4+", icon: Folder },
    { label: "Technologies", value: "15+", icon: Star },
    { label: "Commits", value: "600+", icon: Github },
  ];

  return (
    <section
      id="projects"
      className="min-h-[200vh] py-20 px-4 bg-zinc-950"
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
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30" />
              <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <Folder className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Real-world applications showcasing full-stack development expertise
            and modern architecture
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center backdrop-blur-sm">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <div className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-zinc-500 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative h-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Card header with gradient */}
                <div className="relative h-3">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient}`}
                  />
                </div>

                <div className="p-8">
                  {/* Project Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-zinc-500" />
                      <span className="text-sm text-zinc-500">
                        {project.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-zinc-500" />
                      <span className="text-sm text-zinc-500">
                        {project.team}
                      </span>
                    </div>
                  </div>

                  <h3 className="mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 mb-4 leading-relaxed">
                    {hoveredIndex === index
                      ? project.longDescription
                      : project.description}
                  </p>

                  {/* Status Badge */}
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full text-sm">
                      {project.status}
                    </span>
                  </div>

                  {/* Highlights - visible on hover */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={
                      hoveredIndex === index
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mb-4"
                  >
                    <div className="pt-4 border-t border-zinc-800">
                      <h4 className="text-sm mb-3 text-zinc-300">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="text-sm text-zinc-400 flex items-start gap-2"
                          >
                            <span className="text-blue-400 mt-0.5">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-xs text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-zinc-700 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-zinc-700 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-30" />
            <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl px-12 py-8">
              <h3 className="mb-4">Want to see more?</h3>
              <p className="text-zinc-400 mb-6 max-w-2xl">
                Check out my GitHub profile for more projects, contributions,
                and code samples
              </p>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl transition-all border border-blue-500/50 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                Visit GitHub Profile
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
