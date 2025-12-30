import { ArrowRight, Palette, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/data/products";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-50" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-light rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>Platform Belajar Desain #1 untuk Pemula</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Belajar Desain Canva dari Nol, Siap Jadi{" "}
              <span className="text-primary">Kreator Visual!</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Mulai dari nol, tanpa pengalaman desain? Tenang! Di Gosign, kamu akan belajar Canva dengan cara yang mudah, step-by-step, dan praktis. Siap jadi content creator handal!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="btn-primary rounded-full text-lg px-8 py-6">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  Beli Sekarang via WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="#produk">
                  Lihat Produk
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Siswa Aktif</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-primary">20+</p>
                <p className="text-sm text-muted-foreground">Video Tutorial</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Template Premium</p>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative lg:pl-12 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Main Illustration Card */}
              <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-orange-light rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <Palette className="w-32 h-32 text-primary animate-float" />
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-primary/20 rounded-full animate-pulse" />
                  <div className="absolute bottom-8 left-8 w-12 h-12 bg-orange-light rounded-lg rotate-12" />
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-xl border border-border animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Mudah Dipahami</p>
                    <p className="text-xs text-muted-foreground">Step by step</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-xl border border-border animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Hasil Profesional</p>
                    <p className="text-xs text-muted-foreground">Kualitas terjamin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
