
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-xl mx-auto px-4 py-16 text-center"
      style={{ animation: "fade-in 1.4s" }}
    >
      <h2 className="text-2xl font-bold mb-4 text-primary font-display">Let’s work together</h2>
      <p className="mb-7 text-gray-700">
        Have an interesting project or opportunity? Reach out by email!
      </p>
      <a
        href="mailto:hello@alexmorgan.design"
        className="inline-flex gap-2 items-center rounded-lg bg-primary text-white px-6 py-3 font-semibold font-display hover:bg-accent transition"
      >
        <Mail size={20} /> Email Me
      </a>
    </section>
  );
}
