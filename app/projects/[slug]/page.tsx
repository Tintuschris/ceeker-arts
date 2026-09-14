import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import { getProjectBySlug, getProjects } from "@/sanity/lib/data";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Get prev/next projects
  const allProjects = await getProjects();
  const currentIndex = allProjects.findIndex(
    (p) => p.slug.current === slug
  );
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <ProjectDetailClient
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
