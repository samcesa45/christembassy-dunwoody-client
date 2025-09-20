import Cards from '@/ui/cards';
import Hero from '@/ui/hero';
import OurMission from '@/ui/our-mission';
import Testimonials from '@/ui/testimonials';
import Welcome from '@/ui/welcome';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Welcome />
      <OurMission />
      <div className="text-center">
        <h2 className="text-[#1E3A8A]  text-center mx-auto  font-kumbhSans font-bold text-[1.8rem] sm:text-[2.63rem] sm:leading-17.5">
          Explore Our Ministry Materials
        </h2>
        <Cards />
      </div>
      <Testimonials />
    </main>
  );
}
