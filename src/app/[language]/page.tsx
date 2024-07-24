import { Hero } from "@/components/sections/Hero";
import { RecentProjects } from "@/components/sections/RecentProjects";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { generateMetadata } from "@/components/seo/HeadSeo";
import AcademicProjects from "@/components/sections/AcademicProjects";

export const metadata = generateMetadata();

export default async function IndexPage({
  params: { language },
}: {
  params: { language: string };
}) {
  return (
    <>
      <Hero language={language} />
      <About />
      <Experience />
      <RecentProjects />
      <AcademicProjects />
    </>
  );
}
