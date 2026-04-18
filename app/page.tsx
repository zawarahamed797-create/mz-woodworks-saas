import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />

      <div style={{textAlign:"center",margin:"40px"}}>
        <a href="/contact">Contact Us</a>
      </div>

    </main>
  );
}
