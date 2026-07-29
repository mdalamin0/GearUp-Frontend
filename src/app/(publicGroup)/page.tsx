import FeaturedGear from "./_components/home/featured-gear/FeaturedGear";
import Hero from "./_components/home/hero/Hero";
import WhyChooseUs from "./_components/home/WhyChooseUs";

export default async function Home() {
  return (
    <div>
    <Hero></Hero>
    <FeaturedGear></FeaturedGear>
    <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
