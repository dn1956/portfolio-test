import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

// Placeholder images hosted on Unsplash. Replace with your own work!
const projects = [
  {
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    title: "Onboarding Redesign",
    desc: "A new onboarding experience for a fin-tech mobile app, combining clarity and delight for new users.",
    link: "/project",
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    title: "E-Commerce Checkout",
    desc: "Redesigned the purchase flow to boost conversion for an online retailer, emphasizing accessibility.",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
    title: "Dashboard System",
    desc: "Designed a dashboard for handling complex data with customizable widgets and dark mode.",
    link: "#",
  },
];

const Index = () => {
  return (
    <div className="bg-muted font-display min-h-screen flex flex-col">
      <Header />
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-7 text-gray-900 drop-shadow-sm font-display">
          Alex Morgan
        </h1>
        <h2 className="text-xl mb-6 text-primary font-semibold">UX Designer & Problem Solver</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10">
          I craft digital experiences that are purposeful, accessible, and delightful.<br />
          Here are a few of my favorite projects.
        </p>
      </section>

      {/* Projects Section */}
      <section id="work" className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-primary mb-6 font-display">Selected Work</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>
      </section>

      {/* About */}
      <AboutSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <footer className="border-t mt-14 py-6 text-sm bg-white/95 text-gray-500 text-center">
        &copy; {new Date().getFullYear()} David
      </footer>
    </div>
  );
};

export default Index;
