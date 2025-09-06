import Image from "next/image";
import { notFound } from "next/navigation";
import { findProjectBySlug, projects } from "@/data/projects";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({ params }: Params) {
  const project = findProjectBySlug(params.slug);
  if (!project) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-14">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
        {project.title}
      </h1>
      <p className="text-black/70 dark:text-white/70 mt-2">
        {project.description}
      </p>
      {project.image ? (
        <div className="relative mt-6 aspect-video w-full rounded-lg overflow-hidden bg-black/5 dark:bg-white/5">
          <Image src={project.image} alt="" fill className="object-cover" />
        </div>
      ) : null}
      <div className="prose prose-neutral dark:prose-invert mt-6">
        <p>{project.content}</p>
      </div>
      <div className="flex gap-3 mt-6">
        {project.githubUrl ? (
          <a
            className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium hover:opacity-90"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        ) : null}
        {project.liveUrl ? (
          <a
            className="inline-flex items-center rounded-md border border-black/10 dark:border-white/15 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live Site
          </a>
        ) : null}
      </div>
    </div>
  );
}


