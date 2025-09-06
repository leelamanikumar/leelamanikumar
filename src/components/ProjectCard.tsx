import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  isAdmin?: boolean;
  onDelete?: () => void;
};

export function ProjectCard({ project, isAdmin = false, onDelete }: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl border border-sky-200/50 dark:border-sky-800/50 overflow-hidden glass shadow-lg hover-lift">
      {isAdmin && onDelete && (
        <button
          onClick={onDelete}
          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm font-bold flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity"
          title="Delete Project"
        >
          −
        </button>
      )}
      {project.image ? (
        <div className="relative aspect-video w-full bg-black/5 dark:bg-white/5">
          <Image src={project.image} alt="" fill className="object-cover" />
        </div>
      ) : null}
      <div className="p-4 sm:p-5">
        <h3 className="text-lg font-semibold tracking-tight">
          <Link href={`/projects/${project.slug}`} className="hover:underline">
            {project.title}
          </Link>
        </h3>
        <p className="text-sm text-black/70 dark:text-white/70 mt-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs rounded-full px-3 py-1 bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-4">
          {project.githubUrl ? (
            <a
              className="text-sm font-medium text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 underline underline-offset-4 hover:no-underline transition-colors duration-300"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              className="text-sm font-medium text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 underline underline-offset-4 hover:no-underline transition-colors duration-300"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}


