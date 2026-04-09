import { motion } from "motion/react";
import { ChevronRight, MessageCircle, MessageSquare, Search, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const categories = [
  { name: "General Discussion", threads: 1240, posts: 8420, icon: MessageCircle, color: "cyan" },
  { name: "Chapter Reactions", threads: 420, posts: 15600, icon: MessageSquare, color: "violet" },
  { name: "Theory & Lore", threads: 850, posts: 12300, icon: Search, color: "amber" },
  { name: "Fan Art & Creative", threads: 620, posts: 4500, icon: TrendingUp, color: "emerald" },
  { name: "Merch & Collector", threads: 310, posts: 2100, icon: Users, color: "rose" },
];

const trendingThreads = [
  { title: "Is Unit 734 actually human?", author: "LoreMaster99", replies: 156, views: "2.4k", category: "Theory & Lore" },
  { title: "Chapter 42 Discussion Thread", author: "Cadet_Official", replies: 842, views: "12k", category: "Chapter Reactions", pinned: true },
  { title: "My fan art of Dr. Vora", author: "Artie_Z", replies: 45, views: "800", category: "Fan Art & Creative" },
  { title: "Sector 7 vinyl arrived!", author: "VinylCollector", replies: 12, views: "300", category: "Merch & Collector" },
];

export function Community() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tighter glow-cyan">COMMUNITY</h1>
            <p className="text-muted-foreground max-w-xl">
              The hub for all Cadet fans. Discuss theories, share art, 
              and connect with the universe.
            </p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <Button className="rounded-none px-8 h-12 font-bold uppercase tracking-widest flex-grow md:flex-grow-0">
              NEW THREAD
            </Button>
            <div className="relative hidden md:block w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search forums..."
                className="w-full bg-white/5 border border-white/10 rounded-none pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content: Categories */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Categories</h2>
              <div className="space-y-4">
                {categories.map((cat, i) => (
                  <motion.div
                    key={cat.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="bg-white/5 border-white/10 rounded-none hover:bg-white/10 transition-colors cursor-pointer group">
                      <CardContent className="p-6 flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <div className="h-12 w-12 rounded-none bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                            <cat.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">{cat.name}</h3>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest">
                              {cat.threads} Threads • {cat.posts} Posts
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Trending & Stats */}
          <div className="space-y-12">
            {/* Trending */}
            <div className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Trending Threads</h2>
              <div className="space-y-4">
                {trendingThreads.map((thread, i) => (
                  <motion.div
                    key={thread.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link to="#" className="block group p-4 border border-white/5 hover:border-primary/30 transition-colors bg-slate-950/50">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline" className="text-[8px] border-white/10 text-muted-foreground uppercase">
                          {thread.category}
                        </Badge>
                        {thread.pinned && <Badge className="bg-primary/20 text-primary text-[8px] border-primary/20">PINNED</Badge>}
                      </div>
                      <h4 className="text-sm font-bold group-hover:text-primary transition-colors mb-2 line-clamp-1">
                        {thread.title}
                      </h4>
                      <div className="flex items-center justify-between text-[10px] text-muted-foreground font-mono">
                        <span>by {thread.author}</span>
                        <span>{thread.replies} replies</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="glass-panel p-8 space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Universe Stats</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-2xl font-display font-bold">52.4k</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Members</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-display font-bold">1.2M</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Posts</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-display font-bold">42</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Chapters</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-display font-bold">156</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Artworks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
