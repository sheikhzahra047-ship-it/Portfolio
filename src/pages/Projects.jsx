
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Todo List",
    description:
      "Todo List is a simple  app that helps users organize and track their daily tasks easily.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://todo-list-gamma-tawny.vercel.app" 
  },
  {
    title: "MindScroll",
    description:
      "MindScroll is a modern and responsive blog website.",
    tags: ["React", "JavaScript"],
    link: "https://mind-scroll-six.vercel.app/"
  },
  {
    title: "Number Guessing Game",
    description:
      "A simple Python beginner game where user guesses a random number.",
    tags: ["Python"],
    link: "https://github.com/sheikhzahra047-ship-it/Number-Guessing-Game"
  },
  {
    title: "Lumen Notes",
    description:
      "Markdown note-taking app with AI summaries and tags.",
    tags: ["AI", "Supabase"],
    link: "#"
  },
  // {
  //   title: "Orbit Tasks",
  //   description:
  //     "Minimal kanban board with smooth drag-and-drop.",
  //   tags: ["React", "DnD"],
  //   link: "#"
  // },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const Projects = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14 space-y-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="gradient-text">Projects</span>
        </h1>

        <p className="text-muted-foreground max-w-xl mx-auto">
          A showcase of web applications and creative experiments I've built while exploring frontend development.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((p) => (
          <motion.article
            key={p.title}
            variants={item}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="gradient-border rounded-2xl p-6 shadow-card group"
          >
            <div className="aspect-video rounded-xl gradient-bg opacity-80 mb-5 group-hover:opacity-100 transition-opacity" />

            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <Button
              asChild
              variant="outline"
              className="w-full border-border/80 hover:bg-secondary group/btn"
            >
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </Button>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;