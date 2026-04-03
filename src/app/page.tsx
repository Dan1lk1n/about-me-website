import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stack from "@/components/sections/Stack";
import Projects from "@/components/sections/Projects";
import Contacts from "@/components/sections/Contacts";
export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contacts />
    </main>
  );
}
