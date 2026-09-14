import ServicesPageClient from "./ServicesPageClient";
import { getServices } from "@/sanity/lib/data";

export default async function ServicesPage() {
  const services = await getServices();
  return <ServicesPageClient services={services} />;
}
