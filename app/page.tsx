import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import ServicesPreview from "@/components/ServicesPreview";
import { getFeaturedProjects, getServices, getSiteSettings } from "@/sanity/lib/data";

export default async function Home() {
  const [projects, services, settings] = await Promise.all([
    getFeaturedProjects(),
    getServices(),
    getSiteSettings(),
  ]);

  return (
    <>
      <Hero tagline={settings.tagline} />
      <FeaturedWork projects={projects} />
      <ServicesPreview services={services} />
    </>
  );
}
