import Articles from "../components/sections/articles/Articles";
import Hero from "../components/sections/hero/Hero";
import Info from "@/components/sections/info/Info";
import Instructions from "../components/sections/instructions/Instructions";
import Products from "@/components/sections/Products";
import Specialties from "../components/sections/specialties/Specialties";
import Testimonials from "../components/sections/testimonials/Testimonials";
import Vision from "../components/sections/vision/Vision";
import { fetchHomePage } from "../lib/functions";

export const metadata = {
  title: "OCRIS",
  description: "Ocris is a...",
  alternates: {
    canonical: "http://dev-ocris.healthmore.gr/",
    languages: {
      "el-EL": "http://dev-ocris.healthmore.gr/",
    },
  },
};

export default async function Home() {
  const { data } = await fetchHomePage();

  const sections = data.pageBy.sections;
  const hero = data.pageBy.hero.heroContent;
  const products = data.products.nodes;

  const eyeImage = hero.eyeImage.node.sourceUrl;
  const icon = hero.icon.node.sourceUrl;


  return (
    <>
      <Hero
        eyeImage={eyeImage}
        link={true}
        icon={null}
        title={hero.title}
        heading1={hero.heading1}
        heading2={hero.heading2}
        products={products}
        multiple
      />
      <Products products={products} />
      <Info
       data={sections.info}
      />
      <Vision data={sections.vision}  />
      <Instructions data={sections.instructions} />
      <Specialties data={sections.specialties}  />
      <Testimonials data={sections.testimonials} />
      <Articles data={sections.articles}  />
    </>
  );
}
