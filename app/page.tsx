import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Valores from "@/components/Valores";
import Programas from "@/components/Programas";
import ComoFunciona from "@/components/ComoFunciona";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Valores />
        <Programas />
        <ComoFunciona />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
