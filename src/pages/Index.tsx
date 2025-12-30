import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductCatalog from "@/components/sections/ProductCatalog";
import WhyGosign from "@/components/sections/WhyGosign";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Gosign - Belajar Desain Canva dari Nol, Siap Jadi Kreator Visual</title>
        <meta 
          name="description" 
          content="Belajar desain Canva untuk pemula. Kursus video, ebook tutorial, dan template premium. Mulai dari nol, jadi kreator visual handal bersama Gosign!" 
        />
        <meta name="keywords" content="belajar canva, tutorial canva, kursus desain, template canva, desain grafis pemula" />
        <link rel="canonical" href="https://gosign.id" />
      </Helmet>

      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProductCatalog />
        <WhyGosign />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
