import { motion } from "motion/react";
import { Calendar, ChevronRight, Search, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    title: "Chapter 42: The Deepest Echo Now Live",
    excerpt: "The signals are getting stronger. As Unit 734 descends into the core of Aquanium, the boundary between reality and simulation begins to blur.",
    date: "Oct 24, 2026",
    category: "Release",
    image: "https://picsum.photos/seed/cadet-news-1/800/450",
    featured: true,
  },
  {
    id: 2,
    title: "Limited Edition 'Aquanium' Vinyl Pre-orders",
    excerpt: "The official soundtrack of the Cadet universe is coming to high-fidelity vinyl. Featuring 12 tracks of atmospheric sci-fi soundscapes.",
    date: "Oct 20, 2026",
    category: "Merch",
    image: "https://picsum.photos/seed/cadet-news-2/800/450",
  },
  {
    id: 3,
    title: "Behind the Scenes: Designing the TV-Head",
    excerpt: "Lead artist Marcus Chen discusses the inspiration and technical challenges of creating the iconic silhouette of Unit 734.",
    date: "Oct 15, 2026",
    category: "Production",
    image: "https://picsum.photos/seed/cadet-news-3/800/450",
  },
  {
    id: 4,
    title: "Cadet Universe at Neo-Con 2026",
    excerpt: "Join us for an exclusive panel and first look at the upcoming 'Sector 7' expansion. Meet the creators and get exclusive loot.",
    date: "Oct 10, 2026",
    category: "Event",
    image: "https://picsum.photos/seed/cadet-news-4/800/450",
  },
];

export function News() {
  const featured = newsItems.find(item => item.featured);
  const others = newsItems.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tighter glow-cyan">NEWSROOM</h1>
            <p className="text-muted-foreground max-w-xl">
              Official transmissions from the Cadet production team. 
              Releases, updates, and community events.
            </p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-grow md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-white/5 border border-white/10 rounded-none pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <Link to={`/news/${featured.id}`} className="group relative block aspect-[21/9] overflow-hidden border border-white/10">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <div className="max-w-3xl space-y-4">
                  <div className="flex items-center gap-4">
                    <Badge className="bg-primary text-primary-foreground rounded-none uppercase tracking-widest text-[10px] font-bold">
                      FEATURED
                    </Badge>
                    <span className="text-xs font-mono text-white/60 uppercase tracking-widest">{featured.date}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold group-hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground text-lg line-clamp-2 hidden md:block">
                    {featured.excerpt}
                  </p>
                  <Button className="rounded-none px-8 h-12 font-bold uppercase tracking-widest">
                    READ TRANSMISSION
                  </Button>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/news/${item.id}`} className="group block space-y-4">
                <div className="aspect-video overflow-hidden border border-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest">
                    <span className="text-primary">{item.category}</span>
                    <span className="text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center text-xs font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors">
                    READ MORE <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup (Mini) */}
        <div className="mt-24 glass-panel p-12 text-center space-y-6">
          <h3 className="text-2xl font-display font-bold">NEVER MISS A TRANSMISSION</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Join 50,000+ fans receiving weekly updates directly from the core.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="flex-grow bg-white/5 border border-white/10 px-6 py-3 focus:outline-none focus:border-primary font-mono text-xs"
            />
            <Button className="rounded-none px-8 h-12 font-bold">SUBSCRIBE</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
