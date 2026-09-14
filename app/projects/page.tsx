import ProjectsPageClient from "./ProjectsPageClient";
import { getProjects } from "@/sanity/lib/data";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectsPageClient projects={projects} />;
}
