import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import QuoteForm from "@/components/form/QuoteForm";
import Trust from "@/components/landing/Trust/Trust";
import FeatureSection from "@/components/landing/FeatureSection";
import Testimonials from "@/components/landing/Testimonials";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";


export default function Home() {
  return (

    <>
      <Navbar />
      <Hero />

      <section className="bg-slate-100 py-20">
          <div className="mx-auto max-w-5xl px-6">
          <QuoteForm />
          </div>
      </section>
      
      <Trust />
      <FeatureSection />
      <Testimonials />
      <CTA />
      <Footer />

    </>
  );
}