import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
{ to: "/", label: "Home" },
{ to: "/projects", label: "Projects" },
{ to: "/contact", label: "Contact" }];


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/60">
      
      <nav className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="text-xl font-bold tracking-tight" aria-label="Home" />


        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) =>
          <li key={l.to}>
              <NavLink
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
              cn(
                "relative text-sm font-medium transition-colors hover:text-foreground",
                isActive ? "text-foreground" : "text-muted-foreground"
              )
              }>
              
                {({ isActive }) =>
              <>
                    {l.label}
                    {isActive &&
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full gradient-bg" />

                }
                  </>
              }
              </NavLink>
            </li>
          )}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 rounded-md text-foreground"
          aria-label="Toggle menu">
          
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open &&
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden border-t border-border/60 bg-background/90">
          
            {links.map((l) =>
          <li key={l.to}>
                <NavLink
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
              cn(
                "block px-6 py-3 text-sm font-medium transition-colors",
                isActive ? "text-foreground gradient-text" : "text-muted-foreground"
              )
              }>
              
                  {l.label}
                </NavLink>
              </li>
          )}
          </motion.ul>
        }
      </AnimatePresence>
    </motion.header>);

};

export default Navbar;