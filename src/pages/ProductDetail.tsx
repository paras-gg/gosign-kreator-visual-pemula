import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, CheckCircle, Users, PlayCircle, BookOpen, Layout, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProductBySlug, getWhatsAppLink } from "@/data/products";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  PlayCircle,
  BookOpen,
  Layout,
  Package,
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Produk tidak ditemukan</h1>
            <Button asChild>
              <Link to="/">Kembali ke Beranda</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const IconComponent = iconMap[product.icon];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            {/* Back Button */}
            <Link 
              to="/#produk" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Katalog
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Visual */}
              <div className="order-2 lg:order-1">
                <div className="bg-card rounded-3xl p-8 shadow-xl border border-border">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-orange-light rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-32 h-32 text-primary animate-float" />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="order-1 lg:order-2">
                <Badge className={product.badge === "Best Value" ? "bg-primary mb-4" : "mb-4"}>
                  {product.badge}
                </Badge>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  {product.name}
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6">
                  {product.fullDescription}
                </p>

                <p className="text-2xl font-bold text-primary mb-6">
                  {product.priceLabel}
                </p>

                <Button 
                  asChild 
                  size="lg" 
                  className="btn-primary rounded-full text-lg px-8 py-6 w-full sm:w-auto"
                >
                  <a 
                    href={getWhatsAppLink(product.name)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Beli Sekarang via WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* What You Get */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Apa yang Kamu Dapat
                </h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target Audience */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Cocok untuk Siapa
                </h2>
                <ul className="space-y-3">
                  {product.targetAudience.map((audience, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{audience}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-card rounded-2xl p-6 border border-border md:col-span-2 lg:col-span-1">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Benefit Utama
                </h2>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary/5">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Tertarik dengan {product.name}?
              </h2>
              <p className="text-muted-foreground mb-6">
                Yuk mulai belajar sekarang! Klik tombol di bawah untuk chat dengan tim kami via WhatsApp.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="btn-primary rounded-full text-lg px-8 py-6"
              >
                <a 
                  href={getWhatsAppLink(product.name)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Beli via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
