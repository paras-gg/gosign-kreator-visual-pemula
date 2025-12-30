import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Apakah saya harus punya pengalaman desain sebelumnya?",
      answer: "Nggak perlu sama sekali! Semua materi di Gosign dibuat khusus untuk pemula total. Kami akan guide kamu dari nol sampai bisa bikin desain profesional sendiri."
    },
    {
      question: "Bagaimana cara membeli produk Gosign?",
      answer: "Gampang banget! Klik tombol 'Beli Sekarang via WhatsApp', nanti kamu akan diarahkan ke WhatsApp kami. Tim kami akan bantu proses pembelian dan kasih akses produknya."
    },
    {
      question: "Apakah saya perlu Canva Pro?",
      answer: "Nggak wajib! Semua materi kami bisa diikuti pakai Canva gratis. Tapi kalau kamu punya Canva Pro, tentu akan ada fitur tambahan yang bisa kamu eksplor."
    },
    {
      question: "Berapa lama akses produk yang saya beli?",
      answer: "Selamanya! Sekali beli, kamu dapat akses lifetime. Plus, semua update materi di masa depan juga gratis untukmu."
    },
    {
      question: "Apakah template bisa dipakai untuk keperluan komersial?",
      answer: "Bisa banget! Semua template kami sudah include commercial use license. Kamu bisa pakai untuk bisnis, client, atau dijual lagi (dengan modifikasi)."
    },
    {
      question: "Bagaimana kalau saya stuck atau ada pertanyaan?",
      answer: "Tenang, tim support kami siap bantu! Kamu bisa langsung chat via WhatsApp dan kami akan respon secepat mungkin."
    },
    {
      question: "Apa bedanya paket bundling dengan beli satuan?",
      answer: "Paket bundling lebih hemat! Kamu dapat semua produk (kursus, ebook, template) dengan harga special. Plus ada bonus eksklusif yang nggak ada kalau beli satuan."
    },
    {
      question: "Apakah ada garansi uang kembali?",
      answer: "Kami yakin kamu akan puas dengan produk kami. Tapi kalau ada masalah, hubungi kami via WhatsApp dan kami akan cari solusi terbaik untukmu."
    }
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold mb-4">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Pertanyaan yang Sering Ditanyakan
            </h2>
            <p className="text-muted-foreground text-lg">
              Punya pertanyaan? Mungkin jawabannya ada di sini!
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
