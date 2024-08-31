import Experience from '@/components/experience';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import { RecentProjects } from '@/components/recent-projects';
import { FloatingNav } from '@/components/ui/floating-nav';
import { navItems } from '@/data';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
