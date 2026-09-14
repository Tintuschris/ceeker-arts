import IllustrationPageClient from "./IllustrationPageClient";
import { getIllustrations } from "@/sanity/lib/data";

export default async function IllustrationPage() {
  const illustrations = await getIllustrations();
  return <IllustrationPageClient illustrations={illustrations} />;
}
