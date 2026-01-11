"use client";
import { motion } from "framer-motion";
import {
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiHtml5, SiCss3,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiRedux,
  SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv, SiPandas, SiNumpy, SiKeras,
  SiGit, SiGithub, SiVercel, SiNetlify, SiTailwindcss, SiStreamlit, SiVuedotjs,
  SiDocker, SiKubernetes, SiGraphql, SiPostman,
  SiJenkins, SiFirebase, SiSupabase, SiPrisma, SiSocketdotio, SiJest, SiAngular
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { icon: SiPython, name: "Python", color: "text-blue-400" },
      { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
      { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
      { icon: FaJava, name: "Java", color: "text-red-500" },
      { icon: SiCplusplus, name: "C++", color: "text-blue-600" },
      { icon: SiHtml5, name: "HTML5", color: "text-orange-400" },
      { icon: SiCss3, name: "CSS3", color: "text-blue-400" },
    ],
  },
  {
    title: "ML & Deep Learning",
    skills: [
      { icon: SiTensorflow, name: "TensorFlow", color: "text-orange-400" },
      { icon: SiPytorch, name: "PyTorch", color: "text-red-500" },
      { icon: SiKeras, name: "Keras", color: "text-red-400" },
      { icon: SiScikitlearn, name: "Scikit-learn", color: "text-orange-500" },
      { icon: SiOpencv, name: "OpenCV", color: "text-green-500" },
      { icon: SiPandas, name: "Pandas", color: "text-blue-400" },
      { icon: SiNumpy, name: "NumPy", color: "text-blue-500" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { icon: SiReact, name: "React.js", color: "text-cyan-400" },
      { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
      { icon: SiVuedotjs, name: "Vue.js", color: "text-green-400" },
      { icon: SiAngular, name: "Angular", color: "text-red-500" },
      { icon: SiRedux, name: "Redux", color: "text-purple-400" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
      { icon: SiExpress, name: "Express.js", color: "text-gray-400" },
      { icon: SiGraphql, name: "GraphQL", color: "text-pink-400" },
      { icon: SiSocketdotio, name: "Socket.io", color: "text-white" },
      { icon: SiPostman, name: "Postman", color: "text-orange-400" },
    ],
  },
  {
    title: "Databases & ORMs",
    skills: [
      { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-300" },
      { icon: SiMysql, name: "MySQL", color: "text-blue-400" },
      { icon: SiPrisma, name: "Prisma", color: "text-cyan-300" },
      { icon: SiFirebase, name: "Firebase", color: "text-yellow-500" },
      { icon: SiSupabase, name: "Supabase", color: "text-green-400" },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { icon: SiDocker, name: "Docker", color: "text-blue-400" },
      { icon: SiKubernetes, name: "Kubernetes", color: "text-blue-500" },
      { icon: FaAws, name: "AWS", color: "text-orange-400" },
      
      { icon: SiJenkins, name: "Jenkins", color: "text-red-400" },
      { icon: SiGit, name: "Git", color: "text-orange-500" },
    ],
  },
  {
    title: "Tools & Testing",
    skills: [
      { icon: SiGithub, name: "GitHub", color: "text-white" },
      { icon: SiVercel, name: "Vercel", color: "text-white" },
      { icon: SiNetlify, name: "Netlify", color: "text-cyan-400" },
      { icon: SiStreamlit, name: "Streamlit", color: "text-red-400" },
      { icon: SiJest, name: "Jest", color: "text-red-500" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-4 text-center">
            <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Tech Arsenal
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-blue-500 mx-auto mb-4 rounded-full" />
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="relative p-6 rounded-2xl bg-linear-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all group"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 rounded-2xl transition-all" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-linear-to-r from-purple-500 to-blue-500" />
                  {category.title}
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.15,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-150 group/skill cursor-pointer"
                    >
                      <skill.icon className={`text-3xl ${skill.color} transition-all duration-150 group-hover/skill:scale-110`} />
                      <span className="text-xs text-gray-400 text-center group-hover/skill:text-white transition-colors duration-150">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills - GenAI & Advanced ML */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 rounded-2xl bg-linear-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold text-white mb-4 text-center">GenAI & Advanced Technologies:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["LangChain", "OpenAI API", "GPT-4", "DALL-E", "Stable Diffusion", "Hugging Face", "Vector Databases", "RAG", "LLM Fine-tuning", "Prompt Engineering", "Azure OpenAI", "Vertex AI", "Anthropic Claude", "Embedding Models", "Semantic Search"].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full bg-linear-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-gray-300 text-sm hover:border-purple-500/50 hover:text-white transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Additional Full-Stack & DevOps Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 p-6 rounded-2xl bg-linear-to-r from-green-900/20 to-teal-900/20 border border-green-500/20 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold text-white mb-4 text-center">Full-Stack & MLOps:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["REST APIs", "Microservices", "WebSockets", "JWT Auth", "OAuth 2.0", "CI/CD Pipelines", "GitHub Actions", "Nginx", "Redis", "RabbitMQ", "Kafka", "MLflow", "DVC", "Weights & Biases", "Model Deployment", "A/B Testing", "Feature Engineering", "Hyperparameter Tuning", "Model Monitoring"].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full bg-linear-to-r from-green-600/20 to-teal-600/20 border border-green-500/30 text-gray-300 text-sm hover:border-green-500/50 hover:text-white transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
