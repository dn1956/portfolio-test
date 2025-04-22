
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  desc: string;
  link?: string;
}

export default function ProjectCard({ image, title, desc, link }: ProjectCardProps) {
  return (
    <a
      href={link || "#"}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      className="rounded-xl bg-white shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-xl hover:border-primary border border-transparent group block"
      style={{ animation: "fade-in 0.9s" }}
    >
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover transition-transform duration-200 group-hover:scale-105"
        loading="lazy"
      />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg font-display text-gray-900">{title}</h3>
          <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 text-primary transition" />
        </div>
        <p className="mt-2 text-sm text-gray-600">{desc}</p>
      </div>
    </a>
  );
}
