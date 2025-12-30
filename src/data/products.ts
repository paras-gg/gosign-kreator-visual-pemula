export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  badge: string;
  priceLabel: string;
  features: string[];
  targetAudience: string[];
  benefits: string[];
}

export const products: Product[] = [
  {
    id: "1",
    slug: "kursus",
    name: "Kursus Canva Video",
    shortDescription: "Video tutorial lengkap dari dasar sampai mahir. Belajar dengan pace-mu sendiri!",
    fullDescription: "Kursus video komprehensif yang dirancang khusus untuk pemula. Dengan lebih dari 20+ video tutorial, kamu akan belajar Canva dari nol hingga bisa membuat desain profesional sendiri. Setiap video dilengkapi dengan praktik langsung dan file pendukung.",
    icon: "PlayCircle",
    badge: "Pemula Friendly",
    priceLabel: "Mulai dari Rp...",
    features: [
      "20+ video tutorial HD",
      "Akses selamanya",
      "Update materi gratis",
      "File latihan lengkap",
      "Sertifikat completion",
      "Grup komunitas eksklusif"
    ],
    targetAudience: [
      "Pemula yang ingin belajar desain dari nol",
      "Content creator yang ingin meningkatkan visual",
      "Pelajar/mahasiswa yang butuh skill desain",
      "UMKM yang ingin buat konten sendiri"
    ],
    benefits: [
      "Hemat biaya hiring designer",
      "Skill desain yang bisa dipakai seumur hidup",
      "Bisa buat berbagai jenis konten visual",
      "Tingkatkan engagement social media"
    ]
  },
  {
    id: "2",
    slug: "ebook",
    name: "Ebook Tutorial Canva",
    shortDescription: "Panduan PDF lengkap dengan step-by-step tutorial dan tips praktis.",
    fullDescription: "Ebook 100+ halaman berisi panduan lengkap menguasai Canva. Dilengkapi dengan screenshot detail, tips & tricks rahasia, dan shortcut yang akan mempercepat workflow desainmu. Bisa dibaca kapan saja, dimana saja.",
    icon: "BookOpen",
    badge: "Pemula Friendly",
    priceLabel: "Mulai dari Rp...",
    features: [
      "100+ halaman panduan",
      "Screenshot step-by-step",
      "Tips & tricks rahasia",
      "Shortcut keyboard lengkap",
      "Template checklist desain",
      "Bonus color palette guide"
    ],
    targetAudience: [
      "Yang suka belajar dengan membaca",
      "Pemula desain yang butuh referensi",
      "Yang ingin panduan offline",
      "Yang suka belajar dengan pace sendiri"
    ],
    benefits: [
      "Bisa dibaca offline kapan saja",
      "Referensi yang bisa dibuka berulang",
      "Hemat kuota internet",
      "Mudah di-highlight dan catat"
    ]
  },
  {
    id: "3",
    slug: "template",
    name: "Template Canva Siap Pakai",
    shortDescription: "Koleksi template premium yang tinggal edit. Hemat waktu, hasil profesional!",
    fullDescription: "Koleksi 50+ template Canva premium yang bisa langsung kamu gunakan. Tinggal ganti teks dan gambar, desain profesional langsung jadi! Cocok untuk Instagram, YouTube, presentasi, dan berbagai kebutuhan lainnya.",
    icon: "Layout",
    badge: "Pemula Friendly",
    priceLabel: "Mulai dari Rp...",
    features: [
      "50+ template premium",
      "Berbagai kategori lengkap",
      "Editable 100%",
      "Update template gratis",
      "Panduan penggunaan",
      "Commercial use license"
    ],
    targetAudience: [
      "Content creator yang butuh konten cepat",
      "Bisnis yang perlu branding konsisten",
      "Yang tidak punya waktu desain dari nol",
      "Yang ingin hasil profesional instan"
    ],
    benefits: [
      "Hemat waktu desain berjam-jam",
      "Hasil profesional tanpa skill tinggi",
      "Konsistensi visual terjaga",
      "Bisa dipakai untuk keperluan komersial"
    ]
  },
  {
    id: "4",
    slug: "bundling",
    name: "Paket Bundling Lengkap",
    shortDescription: "Kursus + Ebook + Template dalam satu paket hemat. Best value!",
    fullDescription: "Paket paling lengkap dan hemat! Dapatkan akses ke semua produk Gosign: Kursus Video, Ebook Tutorial, dan Template Premium. Dengan paket ini, kamu mendapat semua yang dibutuhkan untuk jadi kreator visual yang handal.",
    icon: "Package",
    badge: "Best Value",
    priceLabel: "Mulai dari Rp...",
    features: [
      "Kursus video lengkap",
      "Ebook tutorial PDF",
      "50+ template premium",
      "Akses selamanya",
      "Bonus eksklusif",
      "Prioritas support"
    ],
    targetAudience: [
      "Yang ingin belajar komprehensif",
      "Yang serius jadi kreator visual",
      "Yang ingin investasi skill jangka panjang",
      "Yang mencari value terbaik"
    ],
    benefits: [
      "Hemat dibanding beli satuan",
      "Pembelajaran komprehensif",
      "Semua tools dalam satu paket",
      "Bonus dan prioritas support"
    ]
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const whatsappNumber = "6282154945903";
export const whatsappBaseUrl = `https://wa.me/${whatsappNumber}`;

export const getWhatsAppLink = (productName?: string): string => {
  const message = productName 
    ? `Halo, saya tertarik dengan ${productName} dari Gosign. Boleh info lebih lanjut?`
    : "Halo, saya tertarik dengan produk Gosign. Boleh info lebih lanjut?";
  return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
};
