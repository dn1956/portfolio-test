
import { Mail, Linkedin, Github } from "lucide-react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="w-full py-6 mb-10 bg-white/80 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
        <span className="font-bold text-2xl text-primary font-display tracking-tight">Alex Morgan</span>
        <nav className="flex items-center gap-7">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-primary text-base font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex gap-4">
          <a href="mailto:hello@alexmorgan.design" title="Email">
            <Mail size={22} className="text-gray-600 hover:text-primary transition-colors" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <Linkedin size={22} className="text-gray-600 hover:text-primary transition-colors" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
            <Github size={22} className="text-gray-600 hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </header>
  );
}
