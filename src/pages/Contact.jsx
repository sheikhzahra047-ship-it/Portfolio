import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 700);
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 space-y-4">
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Let's <span className="gradient-text">connect</span>
          </h1>
          <p className="text-muted-foreground">
            Have a project in mind or just want to say hi? Drop me a message.
          </p>
          <div className="pt-2 text-sm text-muted-foreground space-y-1">
            <p className="font-medium text-foreground">Best regards,</p>
            <p className="font-semibold gradient-text text-base">Zahra Batool</p>
            <p>BSCS | Frontend Developer</p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="gradient-border rounded-2xl p-6 md:p-8 space-y-5 shadow-card">
          
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="bg-input/60 border-border/60" />
            
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="hey@gmail.com"
              className="bg-input/60 border-border/60" />
            
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project..."
              className="bg-input/60 border-border/60 resize-none" />
            
          </div>

          <Button
            type="submit"
            disabled={loading}
            size="lg"
            className="w-full gradient-bg hover:opacity-90 text-primary-foreground border-0 shadow-glow">
            
            {loading ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center items-center gap-4">
          
          {[
          { Icon: Github, href: "https://github.com/sheikhzahra047-ship-it", label: "GitHub" },
          { Icon: Linkedin, href: "https://www.linkedin.com/in/zahra-batool-41a48036b/", label: "LinkedIn" },
          { Icon: Mail, href: "mailto:sheikhzahra047@gmail.com", label: "Email" }].
          map(({ Icon, href, label }) =>
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="w-12 h-12 rounded-full gradient-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-all hover:scale-110 hover:shadow-glow">
            
              <Icon className="w-5 h-5" />
            </a>
          )}
        </motion.div>
      </div>
    </section>);

};

export default Contact;