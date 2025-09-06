"use client";

import { useState, useEffect } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { AddProjectModal } from "@/components/AddProjectModal";
import type { Project } from "@/data/projects";

export default function ProjectsPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentProjects, setCurrentProjects] = useState(projects);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const adminStatus = localStorage.getItem("portfolio-admin");
    setIsAdmin(adminStatus === "true");
    
    // Load saved projects from localStorage
    const savedProjects = localStorage.getItem("portfolio-projects");
    if (savedProjects) {
      try {
        const parsed = JSON.parse(savedProjects);
        setCurrentProjects(parsed);
      } catch (error) {
        console.error("Error loading saved projects:", error);
      }
    }
  }, []);

  const saveProjects = (projects: Project[]) => {
    localStorage.setItem("portfolio-projects", JSON.stringify(projects));
  };

  const handleAddProject = (newProject: Omit<Project, "slug">) => {
    const slug = newProject.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    const project: Project = { ...newProject, slug };
    const updatedProjects = [...currentProjects, project];
    setCurrentProjects(updatedProjects);
    saveProjects(updatedProjects);
  };

  const handleDeleteProject = (slug: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      const updatedProjects = currentProjects.filter(p => p.slug !== slug);
      setCurrentProjects(updatedProjects);
      saveProjects(updatedProjects);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Projects</h1>
          <p className="text-black/70 dark:text-white/70 mt-2">
            Selected work showcasing my skills and interests.
          </p>
        </div>
        {isAdmin && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold text-xl shadow-lg transition-all flex items-center justify-center"
            title="Add New Project"
          >
            +
          </button>
        )}
      </div>
      
      <div className="grid gap-6 sm:gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {currentProjects.map((p) => (
          <ProjectCard 
            key={p.slug} 
            project={p} 
            isAdmin={isAdmin}
            onDelete={() => handleDeleteProject(p.slug)}
          />
        ))}
      </div>

      <AddProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddProject}
      />
    </div>
  );
}


