import { Clock, DollarSign, Headphones, RefreshCw, Shield, Smile } from "lucide-react";

const WhyGosign = () => {
  const advantages = [
    {
      icon: Smile,
      title: "Mudah Dipahami",
      description: "Bahasa sederhana, tanpa jargon teknis. Cocok banget buat pemula!"
    },
    {
      icon: Clock,
      title: "Belajar Kapan Saja",
      description: "Akses 24/7, belajar sesuai waktu luangmu. Nggak ada deadline!"
    },
    {
      icon: RefreshCw,
      title: "Update Gratis",
      description: "Dapat update materi terbaru tanpa biaya tambahan. Selamanya!"
    },
    {
      icon: Headphones,
      title: "Support Responsif",
      description: "Ada pertanyaan? Tim kami siap bantu lewat WhatsApp."
    },
    {
      icon: DollarSign,
      title: "Harga Terjangkau",
      description: "Investasi sekali, ilmu seumur hidup. Worth it banget!"
    },
    {
      icon: Shield,
      title: "Garansi Kepuasan",
      description: "Nggak puas? Kami kasih solusi terbaik untukmu."
    }
  ];

  return (
    <section id="keunggulan" className="section-padding bg-primary/5">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-primary font-semibold mb-4">Keunggulan Kami</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Kenapa Belajar di Gosign?
          </h2>
          <p className="text-muted-foreground text-lg">
            Ada banyak alasan kenapa ribuan orang memilih Gosign sebagai tempat belajar desain Canva mereka.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <div 
              key={item.title}
              className="bg-card rounded-2xl p-6 border border-border card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGosign;
