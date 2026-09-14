import AboutPageClient from "./AboutPageClient";
import { getAbout, getClients } from "@/sanity/lib/data";

export default async function AboutPage() {
  const [about, clients] = await Promise.all([getAbout(), getClients()]);
  return <AboutPageClient about={about} clients={clients} />;
}
