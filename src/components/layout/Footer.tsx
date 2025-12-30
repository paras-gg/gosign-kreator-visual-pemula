import { Link } from "react-router-dom";
import { Sparkles, MessageCircle, Instagram, Youtube, Mail } from "lucide-react";
import { getWhatsAppLink } from "@/data/products";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Gosign</span>
            </Link>
            <p className="text-background/70 mb-6 max-w-md">
              Belajar Desain Canva dari Nol, Siap Jadi Kreator Visual. 
              Platform edukasi desain terlengkap untuk pemula Indonesia.
            </p>
            <div className="flex gap-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@gosign.id"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-3">
              <li>
                <a href="#tentang" className="text-background/70 hover:text-primary transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#produk" className="text-background/70 hover:text-primary transition-colors">
                  Produk
                </a>
              </li>
              <li>
                <a href="#keunggulan" className="text-background/70 hover:text-primary transition-colors">
                  Keunggulan
                </a>
              </li>
              <li>
                <a href="#faq" className="text-background/70 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Produk</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/produk/kursus" className="text-background/70 hover:text-primary transition-colors">
                  Kursus Video
                </Link>
              </li>
              <li>
                <Link to="/produk/ebook" className="text-background/70 hover:text-primary transition-colors">
                  Ebook Tutorial
                </Link>
              </li>
              <li>
                <Link to="/produk/template" className="text-background/70 hover:text-primary transition-colors">
                  Template Canva
                </Link>
              </li>
              <li>
                <Link to="/produk/bundling" className="text-background/70 hover:text-primary transition-colors">
                  Paket Bundling
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} Gosign. All rights reserved.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
