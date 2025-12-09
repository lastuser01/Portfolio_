import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Code2,
  MapPin,
  Phone,
  Mail,
  Brain,
  Target,
  Zap,
  Heart,
  Coffee,
  Laptop,
  Globe,
  Users,
  TrendingUp,
} from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const personalValues = [
    {
      icon: Brain,
      title: "Strategic Thinker",
      description:
        "Approaching problems with analytical mindset and finding elegant solutions to complex challenges",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description:
        "Setting ambitious targets and maintaining consistent progress toward achieving excellence",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Fast Executor",
      description:
        "Rapidly prototyping ideas and delivering high-quality solutions within tight deadlines",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Heart,
      title: "Passionate Creator",
      description:
        "Deeply invested in creating meaningful applications that solve real-world problems",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const interests = [
    {
      icon: Coffee,
      label: "Coffee Enthusiast",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Laptop,
      label: "Tech Explorer",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Globe,
      label: "Open Source",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Users,
      label: "Team Player",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: TrendingUp,
      label: "Growth Mindset",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: Code2,
      label: "Clean Code",
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yadavyashsantaji@gmail.com",
      href: "mailto:yadavyashsantaji@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 85302-26385",
      href: "tel:+918530226385",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra",
      href: null,
    },
  ];

  return (
    <section
      id="about"
      className="min-h-[200vh] py-20 px-4 bg-zinc-950"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30" />
              <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center border-4 border-zinc-900">
                <span className="text-5xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          <h2 className="mb-6">
            Know More <span className="text-blue-400">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
        </motion.div>

        {/* Main Introduction Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
            <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-3xl p-12 backdrop-blur-sm">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    Hi, I'm Yash Yadav 👋
                  </h3>
                </motion.div>

                <div className="space-y-6 text-zinc-300 leading-relaxed">
                  <p className="text-center">
                    A passionate{" "}
                    <span className="text-blue-400">Full Stack Developer</span>{" "}
                    from Pune, currently pursuing my{" "}
                    <span className="text-purple-400">
                      Master of Computer Applications
                    </span>
                    . I transform complex problems into elegant, scalable
                    solutions using modern web technologies.
                  </p>

                  <p className="text-center">
                    My expertise spans across{" "}
                    <span className="text-blue-400">Java & Spring Boot</span>{" "}
                    for robust backend systems and the{" "}
                    <span className="text-purple-400">MERN stack</span> for
                    dynamic, responsive frontends. I thrive on building
                    applications that not only work flawlessly but also provide
                    exceptional user experiences.
                  </p>

                  <p className="text-center">
                    When I'm not coding, you'll find me exploring new
                    technologies, contributing to open source, or sharing
                    knowledge with the developer community. I believe in writing
                    clean, maintainable code and following industry best
                    practices.
                  </p>
                </div>

                {/* Contact Info Pills */}
                <div className="flex flex-wrap justify-center gap-4 mt-10 pt-8 border-t border-zinc-800">
                  {contactInfo.map((contact) => (
                    <motion.div
                      key={contact.label}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group"
                    >
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="flex items-center gap-3 px-6 py-3 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 hover:border-blue-500/50 rounded-full transition-all"
                        >
                          <contact.icon className="w-4 h-4 text-blue-400" />
                          <span className="text-zinc-300 group-hover:text-blue-400 transition-colors">
                            {contact.value}
                          </span>
                        </a>
                      ) : (
                        <div className="flex items-center gap-3 px-6 py-3 bg-zinc-800/50 border border-zinc-700 rounded-full">
                          <contact.icon className="w-4 h-4 text-blue-400" />
                          <span className="text-zinc-300">{contact.value}</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-24"
        >
          <h3 className="text-center mb-12">
            Core <span className="text-blue-400">Values</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {personalValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity`}
                />

                <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-br ${value.color} bg-opacity-10 border border-zinc-800`}
                    >
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-3">{value.title}</h4>
                      <p className="text-zinc-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-24"
        >
          <h3 className="text-center mb-12">
            Interests & <span className="text-blue-400">Hobbies</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${interest.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity`}
                />

                <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-zinc-700 transition-all">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${interest.gradient} bg-opacity-10`}
                  >
                    <interest.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-zinc-400 text-center group-hover:text-white transition-colors">
                    {interest.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
