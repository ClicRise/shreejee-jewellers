import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowLeft, ArrowRight, Clock3, Instagram, MapPin, Menu, MessageCircle, Phone, Sparkles, X } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Logo.jpg";
import product2 from "@/assets/2.png";
import product3 from "@/assets/3.png";
import product4 from "@/assets/4.png";
import product5 from "@/assets/5.png";
import product6 from "@/assets/6.png";
import product7 from "@/assets/7.png";
import product8 from "@/assets/8.png";
import product9 from "@/assets/9.png";
import heroImage from "@/assets/hero-unsplash.jpg";

const WHATSAPP = "919012261900";
const PHONE = "+919012261900";
const INSTAGRAM = "https://www.instagram.com/shreejeejewellers1/";
const MAPS = "https://maps.app.goo.gl/2DxT59K5yvFT5hyu9";

const products = [
  { name: "Krishna Leaf Idol", category: "Devotional", image: product2, position: "object-center" },
  { name: "Rudraksha Bead Bracelet", category: "Spiritual", image: product3, position: "object-center" },
  { name: "Brilliant Stone Necklace Set", category: "Necklaces", image: product4, position: "object-center" },
  { name: "Braided Statement Chain", category: "Chains", image: product5, position: "object-center" },
  { name: "Pearl Necklace with Red Accents", category: "Pearls", image: product6, position: "object-center" },
  { name: "Classic Pearl Necklace", category: "Pearls", image: product7, position: "object-center" },
  { name: "Textured Silver-Tone Bangles", category: "Bangles", image: product8, position: "object-center" },
  { name: "Patterned Silver-Tone Bangles", category: "Bangles", image: product9, position: "object-center" },
];

const whatsappLink = (product?: string) => {
  const message = product
    ? `Hello, I would like to know the price of ${product}.`
    : "Hello, I would like to know more about your jewellery collection.";
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shree Jee Jewellers | Gold, Silver, Diamond & Gemstones in Meerut" },
      { name: "description", content: "Explore jewellery from Shree Jee Jewellers in Meerut. Browse the collection and ask prices instantly on WhatsApp." },
      { property: "og:title", content: "Shree Jee Jewellers — Jewellery Designed With You" },
      { property: "og:description", content: "Browse our jewellery collection and ask for prices directly on WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: import.meta.env.BASE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: import.meta.env.BASE_URL }],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiry, setEnquiry] = useState({ name: "", phone: "", message: "" });
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 1 | -1) => {
    const track = carouselRef.current;
    if (!track) return;
    const card = track.querySelector("article");
    const amount = card ? card.getBoundingClientRect().width + 20 : track.clientWidth;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  const sendEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const lines = ["Hello Shree Jee Jewellers,"];
    const name = enquiry.name.trim();
    const phone = enquiry.phone.trim();
    const message = enquiry.message.trim();
    if (name) lines.push(`My name is ${name}.`);
    if (phone) lines.push(`You can reach me at ${phone}.`);
    if (message) lines.push(message);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join(" "))}`, "_blank", "noopener");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-50 border-b border-border/50">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:h-24 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Shree Jee Jewellers home">
            <img src={logo} alt="Shree Jee Jewellers" className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16" />
            <span className="font-display text-base font-semibold uppercase sm:text-3xl">Shree Jee Jewellers</span>
          </a>
          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.16em] md:flex" aria-label="Main navigation">
            <a className="transition-colors hover:text-primary" href="#collection">Collection</a>
            <a className="transition-colors hover:text-primary" href="#visit">Visit us</a>
            <a className="transition-colors hover:text-primary" href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a>
          </nav>
          <Button variant="goldOutline" size="icon" className="md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-5 md:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-5 text-sm uppercase tracking-[0.14em]">
              <a href="#collection" onClick={() => setMenuOpen(false)}>Collection</a>
              <a href="#visit" onClick={() => setMenuOpen(false)}>Visit us</a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="relative flex min-h-[68svh] items-end pt-24 sm:min-h-[74svh] sm:pt-28">
        <div className="absolute inset-0 image-wash">
          <img src={heroImage} alt="Gold Indian jewellery with red stones" className="h-full w-full object-cover object-center opacity-55" />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-8 px-5 pb-8 sm:pb-10 lg:grid-cols-[1fr_0.45fr] lg:px-8 lg:pb-12">
          <div className="max-w-3xl">
            <p className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary sm:mb-5 sm:text-xs"><span className="h-px w-10 bg-primary" /> Meerut, India</p>
            <h1 className="text-5xl font-semibold leading-[0.92] sm:text-7xl lg:text-8xl">Jewellery,<br /><span className="italic text-gold-soft">designed with you.</span></h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">Genuine gold, silver, diamond and gemstone jewellery—chosen for every celebration and every day.</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="xl"><a href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle /> Enquire on WhatsApp</a></Button>
              <Button asChild variant="dark" size="xl"><a href="#collection">View collection <ArrowDown /></a></Button>
            </div>
          </div>
          <div className="hidden justify-self-end border-l border-primary/40 pl-8 lg:block">
            <p className="font-display text-2xl text-gold-soft">Gold · Silver · Diamond</p>
            <p className="mt-2 text-sm text-muted-foreground">Gemstones & custom designs</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface-raised">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {["Genuine products", "Custom designs", "Free shipping in India", "Personal assistance"].map((item) => (
            <div key={item} className="flex min-h-20 items-center justify-center gap-2 px-3 text-center text-[11px] font-medium uppercase tracking-[0.1em] text-gold-soft sm:min-h-24 sm:gap-3 sm:px-4 sm:text-xs"><Sparkles className="size-4 shrink-0 text-primary" />{item}</div>
          ))}
        </div>
      </section>

      <section id="collection" className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto mb-10 flex max-w-7xl flex-col justify-between gap-5 px-5 sm:mb-12 md:flex-row md:items-end lg:px-8">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our collection</p><h2 className="mt-3 text-4xl font-semibold sm:text-5xl lg:text-6xl">Pieces to treasure</h2></div>
          <div className="flex items-end justify-between gap-4 md:flex-col md:items-end">
            <p className="max-w-md text-sm leading-6 text-muted-foreground">See something you love? Ask for its price directly on WhatsApp and we’ll personally assist you.</p>
            <div className="flex shrink-0 gap-2">
              <Button variant="goldOutline" size="icon" onClick={() => scrollCarousel(-1)} aria-label="Previous pieces"><ArrowLeft /></Button>
              <Button variant="goldOutline" size="icon" onClick={() => scrollCarousel(1)} aria-label="Next pieces"><ArrowRight /></Button>
            </div>
          </div>
        </div>
        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        >
          {products.map((product) => (
            <article key={product.name} className="w-[78vw] max-w-80 shrink-0 snap-start sm:w-72 lg:w-80">
              <div className="group relative aspect-[4/5] overflow-hidden bg-card">
                <img src={product.image} alt={product.name} loading="lazy" className={`h-full w-full ${product.position} object-cover transition-transform duration-700 group-hover:scale-[1.03]`} />
                <span className="absolute left-3 top-3 bg-background/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-gold-soft backdrop-blur-sm">{product.category}</span>
              </div>
              <div className="pt-5">
                <h3 className="text-xl font-semibold sm:text-2xl">{product.name}</h3>
                <Button asChild variant="goldOutline" className="mt-4 w-full justify-between rounded-sm">
                  <a href={whatsappLink(product.name)} target="_blank" rel="noreferrer">Ask price on WhatsApp <MessageCircle /></a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="visit" className="border-t border-border bg-surface-raised">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="px-5 py-12 sm:py-16 lg:px-8 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Visit our store</p>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl lg:text-6xl">Come find your piece.</h2>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4"><MapPin className="mt-1 size-5 shrink-0 text-primary" /><div><p className="font-semibold">Fazalpur Road, Rohta Road</p><p className="mt-1 text-sm text-muted-foreground">Meerut, Uttar Pradesh 250002</p></div></div>
              <div className="flex gap-4"><Clock3 className="mt-1 size-5 shrink-0 text-primary" /><div><p className="font-semibold">Tuesday – Sunday</p><p className="mt-1 text-sm text-muted-foreground">10:00 AM – 8:00 PM · Monday closed</p></div></div>
              <div className="flex gap-4"><Phone className="mt-1 size-5 shrink-0 text-primary" /><div><p className="font-semibold">+91 90122 61900</p><p className="mt-1 text-sm text-muted-foreground">Call or WhatsApp us</p></div></div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="xl"><a href={MAPS} target="_blank" rel="noreferrer"><MapPin /> Get directions</a></Button>
              <Button asChild variant="dark" size="xl"><a href={`tel:${PHONE}`}><Phone /> Call now</a></Button>
            </div>
          </div>
          <form onSubmit={sendEnquiry} className="flex flex-col gap-4 border-t border-border bg-card p-5 sm:p-6 lg:min-h-full lg:justify-center lg:border-l lg:border-t-0 lg:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Send an enquiry</p>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl">Message us on WhatsApp</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <input value={enquiry.name} onChange={(e) => setEnquiry({ ...enquiry, name: e.target.value })} type="text" maxLength={60} placeholder="Your name" aria-label="Your name" className="w-full rounded-sm border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
              <input value={enquiry.phone} onChange={(e) => setEnquiry({ ...enquiry, phone: e.target.value })} type="tel" maxLength={20} placeholder="Phone (optional)" aria-label="Your phone number" className="w-full rounded-sm border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
            </div>
            <textarea value={enquiry.message} onChange={(e) => setEnquiry({ ...enquiry, message: e.target.value })} rows={4} maxLength={500} required placeholder="Tell us what you're looking for — a piece, a custom design, or a price." aria-label="Your message" className="w-full resize-none rounded-sm border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
            <Button type="submit" variant="gold" size="xl" className="w-full justify-between"><span>Send on WhatsApp</span><MessageCircle /></Button>
            <p className="text-xs text-muted-foreground">Your message opens directly in WhatsApp — nothing is stored on this website.</p>
          </form>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3"><img src={logo} alt="" className="h-10 w-10 rounded-full" /><p className="font-display text-xl">Shree Jee Jewellers</p></div>
          <div className="flex gap-2">
            <Button asChild variant="goldOutline" size="icon"><a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Visit Instagram"><Instagram /></a></Button>
            <Button asChild variant="goldOutline" size="icon"><a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Message on WhatsApp"><MessageCircle /></a></Button>
            <Button asChild variant="goldOutline" size="icon"><a href={`tel:${PHONE}`} aria-label="Call Shree Jee Jewellers"><Phone /></a></Button>
          </div>
        </div>
        <div className="mx-auto mt-8 h-px max-w-7xl gold-rule" />
        <p className="mt-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Shree Jee Jewellers. All rights reserved.</p>
      </footer>

      <Button asChild variant="gold" size="icon" className="fixed bottom-5 right-5 z-40 size-12 rounded-full md:hidden">
        <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Enquire on WhatsApp"><MessageCircle /></a>
      </Button>
    </main>
  );
}
