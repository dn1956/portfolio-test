
import { ArrowLeft, Image } from "lucide-react";
import { Link } from "react-router-dom";

export default function Project() {
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

        {/* Project Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3 font-display">Onboarding Redesign</h1>
        <p className="text-lg text-gray-600 mb-8">
          A new onboarding experience for a fin-tech mobile app—blending clarity, delight, and accessibility for first-time users.
        </p>
        
        {/* Hero Image */}
        <div className="overflow-hidden mb-10 rounded-2xl shadow-lg border bg-white flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=900&q=80"
            alt="Onboarding Redesign"
            className="w-full object-cover"
            style={{ maxHeight: 320 }}
            loading="lazy"
          />
        </div>

        {/* Project Details */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-primary">Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            The goal was to craft a welcoming, insightful first impression for users new to a financial service app. 
            Through research, competitive analysis, and journey mapping, I led the UX from ideation to launch.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Wireframes and prototypes tested with 8 users</li>
            <li>Accessibility-first: color contrast, screen reader labels, input focus states</li>
            <li>Visual brand refresh & illustrative storytelling</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 mt-7 text-primary">My Role</h3>
          <p className="text-gray-700">Lead UX Designer (Research, Wireframes, UI Design, Usability Testing)</p>
        </section>

        {/* Gallery (optional, single image here for now) */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-primary">Process Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden bg-white border shadow-md flex flex-col items-center p-4">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80"
                alt="Wireframes"
                className="w-full h-48 object-cover mb-3"
                loading="lazy"
              />
              <span className="text-sm text-gray-600 font-medium">User Testing (Wireframe Prototype)</span>
            </div>
            <div className="rounded-xl overflow-hidden bg-white border shadow-md flex flex-col items-center p-4">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80"
                alt="UI Mockup"
                className="w-full h-48 object-cover mb-3"
                loading="lazy"
              />
              <span className="text-sm text-gray-600 font-medium">Final UI — Onboarding Success</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
