import { Link } from "react-router-dom";
import { PlayCircle, BookOpen, Layout, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  PlayCircle,
  BookOpen,
  Layout,
  Package,
};

const ProductCatalog = () => {
  return (
    <section id="produk" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-primary font-semibold mb-4">Produk Kami</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pilih Produk yang Cocok Buatmu
          </h2>
          <p className="text-muted-foreground text-lg">
            Dari video kursus sampai template siap pakai, semua ada di sini. 
            Tinggal pilih sesuai kebutuhanmu!
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const IconComponent = iconMap[product.icon];
            return (
              <div 
                key={product.id}
                className="group bg-card rounded-2xl p-6 border border-border card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>

                {/* Badge */}
                <Badge 
                  variant={product.badge === "Best Value" ? "default" : "secondary"}
                  className={`mb-4 ${product.badge === "Best Value" ? "bg-primary" : ""}`}
                >
                  {product.badge}
                </Badge>

                {/* Content */}
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.shortDescription}
                </p>

                {/* Price Label */}
                <p className="text-primary font-semibold mb-4">{product.priceLabel}</p>

                {/* CTA */}
                <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Link to={`/produk/${product.slug}`}>
                    Lihat Detail
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
