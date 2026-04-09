import { motion } from "motion/react";
import { Filter, Grid, List, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const chapters = Array.from({ length: 12 }).map((_, i) => ({
  id: 42 - i,
  title: `The Deepest Echo Part ${42 - i}`,
  date: "Oct 2026",
  image: `https://picsum.photos/seed/cadet-chapter-${42 - i}/400/600`,
  isNew: i === 0,
  isRead: i > 3,
}));

export function Archive() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tighter glow-cyan">ARCHIVE</h1>
            <p className="text-muted-foreground max-w-xl">
              Access the complete history of the Cadet transmissions. 
              Filter by arc, release date, or format.
            </p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-grow md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search chapters..."
                className="w-full bg-white/5 border border-white/10 rounded-none pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <Button variant="outline" size="icon" className="rounded-none border-white/10">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <Button variant="secondary" size="sm" className="rounded-none uppercase tracking-widest text-[10px] font-bold">All Chapters</Button>
          <Button variant="ghost" size="sm" className="rounded-none uppercase tracking-widest text-[10px] font-bold text-muted-foreground">Arc 1: Awakening</Button>
          <Button variant="ghost" size="sm" className="rounded-none uppercase tracking-widest text-[10px] font-bold text-muted-foreground">Arc 2: The Core</Button>
          <Button variant="ghost" size="sm" className="rounded-none uppercase tracking-widest text-[10px] font-bold text-muted-foreground">Special Issues</Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {chapters.map((chapter, i) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={`/comic/chapter-${chapter.id}`} className="group block space-y-3">
                <div className="relative aspect-[2/3] overflow-hidden border border-white/10">
                  <img
                    src={chapter.image}
                    alt={chapter.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  
                  {chapter.isNew && (
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-none">NEW</Badge>
                  )}
                  
                  {chapter.isRead && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                      <div className="h-full bg-primary w-full" />
                    </div>
                  )}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    <span>Chapter {chapter.id}</span>
                    <span>{chapter.date}</span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-tight group-hover:text-primary transition-colors line-clamp-1">
                    {chapter.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <Button variant="outline" className="rounded-none px-12 h-14 font-bold border-white/10 hover:bg-white/5 uppercase tracking-widest">
            Load More Transmissions
          </Button>
        </div>
      </div>
    </div>
  );
}
