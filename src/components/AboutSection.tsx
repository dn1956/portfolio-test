
export default function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-2xl mx-auto px-4 py-16"
      style={{ animation: "fade-in 1.2s" }}
    >
      <h2 className="text-2xl font-bold mb-4 text-primary font-display">About Me</h2>
      <p className="text-gray-700 leading-relaxed">
        I’m Alex, a UX designer passionate about shaping intuitive digital experiences.<br />
        My focus is on blending user insights, accessibility, and delightful visuals. I’ve worked with startups and agencies, designing web and mobile products used by thousands.<br /><br />
        Outside of work, I love sketching, hiking, and exploring new coffee shops.
      </p>
    </section>
  );
}
