import { motion } from "motion/react";
import { ArrowRight, BookOpen, ChevronRight, Play, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const characters = [
  {
    name: "Unit 734",
    role: "The Transmissionist",
    image: "https://picsum.photos/seed/cadet-duo/600/800",
    color: "cyan",
  },
  {
    name: "Kaelen",
    role: "Aquanium Guard",
    image: "https://picsum.photos/seed/cadet-city/600/800",
    color: "violet",
  },
  {
    name: "Dr. Vora",
    role: "Chief Surgeon",
    image: "https://picsum.photos/seed/cadet-medical/600/800",
    color: "red",
  },
  {
    name: "The Overseer",
    role: "Utopia Architect",
    image: "https://picsum.photos/seed/cadet-purple/600/800",
    color: "amber",
  },
];

const news = [
  {
    title: "Chapter 42: The Deepest Echo Now Live",
    date: "Oct 24, 2026",
    category: "Release",
    image: "https://picsum.photos/seed/cadet-utopia/800/450",
  },
  {
    title: "Limited Edition 'Aquanium' Vinyl Pre-orders",
    date: "Oct 20, 2026",
    category: "Merch",
    image: "https://picsum.photos/seed/cadet-red/800/450",
  },
  {
    title: "Behind the Scenes: Designing the TV-Head",
    date: "Oct 15, 2026",
    category: "Production",
    image: "https://picsum.photos/seed/cadet-duo/800/450",
  },
];

export function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/cadet-city/1920/1080"
            alt="Cadet Universe Hero"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
          <div className="sci-fi-grid absolute inset-0 opacity-20" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Badge className="bg-primary/20 text-primary border-primary/50 px-4 py-1 rounded-full text-xs uppercase tracking-[0.2em] font-bold">
              Original Sci-Fi Universe
            </Badge>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-none glow-cyan">
              CADET
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light tracking-wide">
              A cinematic story-first digital universe. Uncover the secrets of Aquanium and the transmission that changed everything.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button size="lg" className="h-14 px-8 text-lg font-bold rounded-none bg-primary text-primary-foreground hover:bg-primary/90 group">
                <BookOpen className="mr-2 h-5 w-5" />
                READ COMIC
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold rounded-none border-white/20 hover:bg-white/5">
                EXPLORE LORE
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Featured Release */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
              >
                <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="https://picsum.photos/seed/cadet-utopia/800/1200"
                  alt="Latest Chapter"
                  className="w-full aspect-[2/3] object-cover border border-white/10 relative z-10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20 flex flex-col justify-end p-8">
                  <Badge className="w-fit mb-2 bg-primary text-primary-foreground">NEW RELEASE</Badge>
                  <h3 className="text-3xl font-display font-bold">Chapter 42: The Deepest Echo</h3>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">LATEST TRANSMISSION</h2>
                <div className="w-20 h-1 bg-primary" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The signals are getting stronger. As Unit 734 descends into the core of Aquanium, 
                the boundary between reality and simulation begins to blur. Will the truth be 
                worth the cost of existence?
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm font-mono text-primary">
                  <span className="opacity-50">STATUS:</span>
                  <span className="animate-pulse">DECRYPTING...</span>
                </div>
                <div className="flex items-center gap-4 text-sm font-mono text-primary">
                  <span className="opacity-50">LOCATION:</span>
                  <span>SECTOR 7, AQUANIUM CORE</span>
                </div>
              </div>
              <Button size="lg" className="w-full sm:w-auto h-14 px-12 text-lg font-bold rounded-none">
                START READING
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section className="py-24 bg-slate-950/50 relative overflow-hidden">
        <div className="sci-fi-grid absolute inset-0 opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold">THE INHABITANTS</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the souls caught in the crossfire of a dying world and a digital rebirth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {characters.map((char, i) => (
              <motion.div
                key={char.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden aspect-[3/4] border border-white/10"
              >
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="text-primary text-xs font-mono mb-1 uppercase tracking-widest">{char.role}</p>
                  <h3 className="text-2xl font-display font-bold mb-4">{char.name}</h3>
                  <Button variant="link" className="p-0 h-auto text-white group-hover:text-primary transition-colors w-fit">
                    VIEW PROFILE <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-display font-bold">TRANSMISSIONS</h2>
              <p className="text-muted-foreground">Stay updated with the latest from the Cadet universe.</p>
            </div>
            <Button variant="outline" className="hidden md:flex rounded-none border-white/10">
              VIEW ALL NEWS
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-transparent border-none rounded-none overflow-hidden group cursor-pointer">
                  <div className="aspect-video overflow-hidden border border-white/10 mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <CardContent className="p-0 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest">
                      <span className="text-primary">{item.category}</span>
                      <span className="text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action: Shop/Community */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Shop CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sparkles className="h-32 w-32" />
              </div>
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl font-display font-bold">COLLECT THE UNIVERSE</h3>
                <p className="text-muted-foreground">
                  Own a piece of Aquanium. From physical books to limited edition apparel 
                  and exclusive collector items.
                </p>
                <Button className="rounded-none px-8 h-12 font-bold">
                  VISIT THE SHOP
                </Button>
              </div>
            </motion.div>

            {/* Community CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users className="h-32 w-32" />
              </div>
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl font-display font-bold">JOIN THE FORUMS</h3>
                <p className="text-muted-foreground">
                  Discuss theories, share fan art, and connect with other fans 
                  in our premium community space.
                </p>
                <Button variant="outline" className="rounded-none px-8 h-12 font-bold border-white/20 hover:bg-white/5">
                  ENTER COMMUNITY
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-24 bg-background border-t border-white/10">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-display font-bold tracking-tight">JOIN THE TRANSMISSION</h2>
              <p className="text-muted-foreground">
                Receive exclusive updates, early access to releases, and limited drop notifications.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="flex-grow bg-white/5 border border-white/10 px-6 py-4 focus:outline-none focus:border-primary font-mono text-sm"
                required
              />
              <Button size="lg" className="h-14 px-12 rounded-none font-bold uppercase tracking-widest">
                SUBSCRIBE
              </Button>
            </form>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest opacity-50">
              By subscribing, you agree to our privacy policy and terms of service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
