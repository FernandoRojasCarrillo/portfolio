import { TypeLocale } from "i18n-config";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { getSectionsData } from "@/server-actions/sections";
import { getLayoutData } from "@/server-actions/layout";
import { RecentProjects } from "@/components/sections/RecentProjects";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { generateMetadata } from "@/components/seo/HeadSeo";

export const metadata = generateMetadata();

export default async function IndexPage({
  params: { language },
}: {
  params: { language: TypeLocale };
}) {
  const { hero, about, experience, recentProjects } = await getSectionsData(language);
  const { header, footer } = await getLayoutData(language);


  return (
    <Layout header={header} footer={footer} >
      <Hero data={hero} language={language} />
      <About data={about} />
      <Experience data={experience} />
      <RecentProjects data={recentProjects} />
    </Layout>
  );
}
