import { motion } from "motion/react";
import { Download, Expand, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const artworks = [
  { id: 1, title: "The Core Descent", category: "Concept Art", image: "https://picsum.photos/seed/cadet-art-1/800/1200", size: "large" },
  { id: 2, title: "Unit 734 Sketch", category: "Character", image: "https://picsum.photos/seed/cadet-art-2/800/800", size: "small" },
  { id: 3, title: "Aquanium Skyline", category: "Environment", image: "https://picsum.photos/seed/cadet-art-3/1200/800", size: "wide" },
  { id: 4, title: "The Transmission", category: "Promo", image: "https://picsum.photos/seed/cadet-art-4/800/1000", size: "medium" },
  { id: 5, title: "Dr. Vora's Lab", category: "Environment", image: "https://picsum.photos/seed/cadet-art-5/1000/800", size: "medium" },
  { id: 6, title: "Utopia Crystal", category: "Object", image: "https://picsum.photos/seed/cadet-art-6/800/1200", size: "large" },
  { id: 7, title: "Guard Patrol", category: "Character", image: "https://picsum.photos/seed/cadet-art-7/800/800", size: "small" },
  { id: 8, title: "Sector 7 Gate", category: "Environment", image: "https://picsum.photos/seed/cadet-art-8/1200/600", size: "wide" },
];

export function Gallery() {
  const [filter, setFilter] = useState("All");

  const filteredArt = filter === "All" 
    ? artworks 
    : artworks.filter(art => art.category === filter);

  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter glow-cyan">VISUAL ARCHIVE</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the concept art, character designs, and world-building visuals 
            that bring the Cadet universe to life.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Concept Art", "Character", "Environment", "Promo", "Object"].map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "secondary" : "ghost"}
              onClick={() => setFilter(cat)}
              className="rounded-none uppercase tracking-widest text-[10px] font-bold"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredArt.map((art, i) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="relative group break-inside-avoid overflow-hidden border border-white/10 bg-slate-900"
            >
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-6">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/10 hover:bg-primary hover:text-primary-foreground">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/10 hover:bg-primary hover:text-primary-foreground">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <Badge variant="outline" className="text-[8px] border-primary/50 text-primary uppercase tracking-widest">
                    {art.category}
                  </Badge>
                  <h3 className="text-lg font-display font-bold">{art.title}</h3>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="h-8 rounded-none border-white/20 text-[10px] uppercase font-bold">
                      <Expand className="mr-1 h-3 w-3" /> Full View
                    </Button>
                    <Button size="sm" variant="outline" className="h-8 rounded-none border-white/20 text-[10px] uppercase font-bold">
                      <Download className="mr-1 h-3 w-3" /> Download
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-24 text-center">
          <Button variant="outline" className="rounded-none px-12 h-14 font-bold border-white/10 hover:bg-white/5 uppercase tracking-widest">
            Access More Data
          </Button>
        </div>
      </div>
    </div>
  );
}
