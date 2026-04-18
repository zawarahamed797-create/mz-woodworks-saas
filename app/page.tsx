import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />

      {/* CTA */}
      <section className="text-center py-20 bg-black text-white">
        <h2 className="text-3xl font-bold">Build Your Dream Interior Today</h2>
        <a
          href="https://wa.me/923187196942"
          className="mt-5 inline-block bg-green-500 px-6 py-3 rounded-full"
        >
          WhatsApp Now
        </a>
      </section>

      <Footer />
    </main>
  );
}
