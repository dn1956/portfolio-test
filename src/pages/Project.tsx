import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowLeft } from "lucide-react";

// Project slide data
const projects = [
  {
    title: "Onboarding Redesign",
    desc: "A new onboarding experience for a fin-tech mobile app—blending clarity, delight, and accessibility for first-time users.",
    heroImage:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=900&q=80",
    overview:
      "The goal was to craft a welcoming, insightful first impression for users new to a financial service app. Through research, competitive analysis, and journey mapping, I led the UX from ideation to launch.",
    highlights: [
      "Wireframes and prototypes tested with 8 users",
      "Accessibility-first: color contrast, screen reader labels, input focus states",
      "Visual brand refresh & illustrative storytelling",
    ],
    role:
      "Lead UX Designer (Research, Wireframes, UI Design, Usability Testing)",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80",
        label: "User Testing (Wireframe Prototype)",
      },
      {
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
        label: "Final UI — Onboarding Success",
      },
    ],
  },
  {
    title: "E-Commerce Checkout",
    desc: "Redesigned the purchase flow to boost conversion for an online retailer, emphasizing accessibility.",
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    overview:
      "Redesigned the checkout process for a leading online retailer with a focus on accessibility and mobile-first features. A/B testing confirmed a measurable conversion rate uptick.",
    highlights: [
      "Field grouping and simplification for mobile users",
      "Integrated progress bar and checkout steps",
      "Accessibility-focused labels, tab order, and error reporting",
    ],
    role: "UI/UX Designer (Flow mapping, High-fidelity Prototypes, User Testing)",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        label: "Mobile Checkout Design",
      },
      {
        src: "https://images.unsplash.com/photo-1519223400710-6da919e73c24?auto=format&fit=crop&w=400&q=80",
        label: "Accessibility Checks",
      },
    ],
  },
  {
    title: "Dashboard System",
    desc: "Designed a dashboard for handling complex data with customizable widgets and dark mode.",
    heroImage:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=900&q=80",
    overview:
      "Created an extensible dashboard for a logistics platform. Focus areas: user customization, clear visual hierarchy, and seamless dark/light toggle.",
    highlights: [
      "Customizable widgets & drag-and-drop layout",
      "Color palette tuned for data density and accessibility",
      "Adaptive design supporting desktop/tablet breakpoints",
    ],
    role: "Product Designer (Workflow Design, Visual System, Frontend Handoff)",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=400&q=80",
        label: "Customizable Widgets",
      },
      {
        src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        label: "Dark Mode Dashboard",
      },
    ],
  },
];

function ProjectSlide({ project }) {
  return (
    <div>
      {/* Project Title/Desc */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3 font-display">{project.title}</h1>
      <p className="text-lg text-gray-600 mb-8">{project.desc}</p>

      {/* Hero Image */}
      <div className="overflow-hidden mb-10 rounded-2xl shadow-lg border bg-white flex items-center justify-center">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full object-cover"
          style={{ maxHeight: 320 }}
          loading="lazy"
        />
      </div>

      {/* Project Details */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 text-primary">Overview</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          {project.overview}
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mb-2 mt-7 text-primary">My Role</h3>
        <p className="text-gray-700">{project.role}</p>
      </section>

      {/* Gallery */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-primary">Process Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {project.gallery.map((g, i) => (
            <div key={i} className="rounded-xl overflow-hidden bg-white border shadow-md flex flex-col items-center p-4">
              <img
                src={g.src}
                alt={g.label}
                className="w-full h-48 object-cover mb-3"
                loading="lazy"
              />
              <span className="text-sm text-gray-600 font-medium">{g.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function ProjectCarouselPage() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const numSlides = projects.length;
  const ref = useRef(null);

  // Keeps current slide number in sync
  function handleSelect() {
    if (api) {
      setCurrent(api.selectedScrollSnap() || 0);
    }
  }

  // Jump to a slide by index
  function goTo(idx: number) {
    api?.scrollTo(idx);
  }

  // Sync current slide state on carousel updates
  // @ts-ignore
  api?.on && api.on("select", handleSelect);

  return (
    <div className="bg-muted min-h-screen font-display">
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Back Link */}
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-primary font-semibold gap-2 transition hover:underline">
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </div>

        {/* Direct Links */}
        <div className="flex gap-2 mb-8 justify-center">
          {projects.map((proj, i) => (
            <button
              key={proj.title}
              onClick={() => goTo(i)}
              className={`px-3 py-1 text-sm rounded font-medium border ${i === current ? "bg-primary text-white border-primary" : "bg-white text-primary border-gray-200 hover:bg-primary/10"} transition`}
              aria-current={i === current}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <div className="relative">
          <Carousel setApi={setApi} opts={{ loop: false }}>
            <CarouselContent>
              {projects.map((project, idx) => (
                <CarouselItem key={project.title}>
                  <ProjectSlide project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious aria-label="Previous project" />
            <CarouselNext aria-label="Next project" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
