import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Server,
  Layout,
  Database,
  Wrench,
  Code2,
  Sparkles,
  Zap,
  Users,
  MessageSquare,
  Lightbulb,
  Target,
  Clock,
} from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technicalSkills = [
    {
      category: "Backend Development",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: ["Java", "Spring Boot", "Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
    },
    {
      category: "Frontend Development",
      icon: Layout,
      color: "from-blue-500 to-cyan-500",
      skills: ["React.js", "TypeScript", "Tailwind CSS", "JavaScript/ES6+", "HTML5 & CSS3", "Responsive Design", "Motion/Framer"],
    },
    {
      category: "Database & Storage",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: ["MySQL", "MongoDB", "Redis", "PostgreSQL", "JDBC", "Database Design"],
    },
    {
      category: "Tools & Technologies",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      skills: ["Git & GitHub", "Docker", "Postman", "VS Code", "Linux", "Cloudinary"],
    },
  ];

  const softSkills = [
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Effective communication and coordination in team environments",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description: "Articulating technical concepts to diverse audiences",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analytical thinking and creative solution development",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Target,
      title: "Goal Focused",
      description: "Delivering results within deadlines and scope",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Prioritizing tasks and managing multiple projects",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Quick Learner",
      description: "Rapidly adapting to new technologies and frameworks",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const expertise = [
    { icon: Code2, label: "RESTful APIs", color: "text-blue-400" },
    { icon: Sparkles, label: "Microservices", color: "text-purple-400" },
    { icon: Server, label: "Authentication (JWT)", color: "text-green-400" },
    { icon: Database, label: "Database Design", color: "text-pink-400" },
    { icon: Layout, label: "Responsive Design", color: "text-cyan-400" },
    { icon: Zap, label: "Real-time Apps", color: "text-orange-400" },
  ];

  return (
    <section id="skills" className="min-h-[200vh] py-20 px-4 bg-zinc-900/50" ref={ref}>
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
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30" />
              <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Code2 className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="mb-6">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building modern, scalable, and performant applications
          </p>
        </motion.div>

        {/* Technical Skills Grid - Modernized */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {technicalSkills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all duration-300 h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity`} />
                
                <div className="relative">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl">{category.category}</h3>
                  </div>

                  {/* Skills as Badges */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        className="relative group/badge"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover/badge:opacity-20 rounded-xl blur transition-opacity`} />
                        <div className="relative px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-xl text-zinc-300 group-hover/badge:border-zinc-600 group-hover/badge:text-white transition-all">
                          {skill}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Areas of Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-center mb-12">
            Areas of <span className="text-blue-400">Expertise</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity" />
                
                <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-zinc-700 transition-all text-center">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                  <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-center mb-12">
            Soft <span className="text-blue-400">Skills</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity`} />
                
                <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.gradient} p-0.5 mb-4`}>
                    <div className="w-full h-full bg-zinc-900 rounded-xl flex items-center justify-center">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h4 className="mb-2">{skill.title}</h4>
                  <p className="text-zinc-400 leading-relaxed">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center mt-20"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-30" />
            <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl px-8 py-6">
              <p className="text-lg text-zinc-300">
                💡 Always learning and expanding my skill set with emerging technologies
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}