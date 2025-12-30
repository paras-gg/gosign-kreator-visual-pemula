import { CheckCircle, Heart, Lightbulb, Target } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Materi Mudah Dipahami",
      description: "Dibuat khusus untuk pemula, tanpa istilah teknis yang membingungkan."
    },
    {
      icon: Target,
      title: "Praktik Langsung",
      description: "Setiap materi disertai latihan praktik agar kamu langsung bisa action."
    },
    {
      icon: Heart,
      title: "Support yang Ramah",
      description: "Tim kami siap membantu kalau kamu stuck atau ada pertanyaan."
    }
  ];

  return (
    <section id="tentang" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold mb-4">Tentang Gosign</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Kenapa Harus Belajar Desain di Gosign?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Gosign hadir untuk membantu siapa saja yang ingin belajar desain, terutama pemula total! 
              Kami percaya bahwa semua orang bisa jadi kreator visual yang keren, asalkan punya panduan yang tepat.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="flex gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 shadow-xl border border-border">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-orange-light/50 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <p className="text-6xl font-bold text-primary mb-2">100%</p>
                  <p className="text-muted-foreground font-medium">Pemula Friendly</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Tanpa pengalaman desain sebelumnya</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Cukup pakai Canva gratis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Belajar dari mana saja</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Akses materi selamanya</span>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -z-10 top-8 left-8 w-full h-full bg-primary/20 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
