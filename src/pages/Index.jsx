import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import PktClock from "@/components/PktClock";
import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiPython,
  SiFlask } from
"react-icons/si";

const skills = [
{ name: "HTML", Icon: SiHtml5, color: "text-[#E34F26]" },
{ name: "CSS", Icon: SiCss, color: "text-[#1572B6]" },
{ name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-[#38BDF8]" },
{ name: "JavaScript", Icon: SiJavascript, color: "text-[#F7DF1E]" },
{ name: "React", Icon: SiReact, color: "text-[#61DAFB]" },
{ name: "Python", Icon: SiPython, color: "text-[#3776AB]" },
{ name: "Flask", Icon: SiFlask, color: "text-foreground" }];


const Index = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto flex justify-end mb-6">
        <PktClock />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center space-y-6 flex flex-col items-center">
        

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
          <span className="gradient-text">Zahra Batool</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
          I am a BSCS student from Lahore College for Women University (LCWU),
          passionate about building modern and responsive web applications. I
          enjoy turning ideas into interactive digital experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Button asChild size="lg" className="gradient-bg hover:opacity-90 text-primary-foreground border-0 shadow-glow transition-all">
            <Link to="/projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-border/80 hover:bg-secondary">
            <Link to="/contact">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Link>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto mt-20">
        
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Skill Set</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Tools and technologies I work with
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skills.map(({ name, Icon, color }, i) =>
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.3 + i * 0.06 }}
            whileHover={{ y: -4, scale: 1.05 }}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/60 bg-secondary/40 backdrop-blur-sm hover:border-primary/60 hover:bg-secondary/70 hover:shadow-glow transition-all cursor-default">
            
              <Icon className={`w-5 h-5 ${color} transition-transform group-hover:scale-110`} />
              <span className="text-sm font-medium">{name}</span>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>);

};

export default Index;