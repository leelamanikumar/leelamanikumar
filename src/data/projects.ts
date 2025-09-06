export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  content: string;
};

export const projects: Project[] = [
  {
    slug: "sample-project",
    title: "Sample Project",
    description: "A highlight-worthy project demonstrating your skills.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/window.svg",
    githubUrl: "https://github.com/your-username/sample-project",
    liveUrl: "https://sample-project.example.com",
    content:
      "This is where you can provide an in-depth overview of the project: goals, tech stack, challenges, and outcomes. Replace this placeholder with your real project details.",
  },
];

export function findProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}


