import { motion } from "motion/react";
import { BookOpen, Heart, History, LogOut, Package, Settings, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Account() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12 p-8 glass-panel">
          <div className="relative">
            <div className="h-32 w-32 rounded-none border-2 border-primary p-1">
              <img
                src="https://picsum.photos/seed/cadet-user/200/200"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <Badge className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-none text-[8px] font-bold">
              LEVEL 42
            </Badge>
          </div>
          <div className="text-center md:text-left space-y-2 flex-grow">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <h1 className="text-3xl font-display font-bold tracking-tight">TRANSMISSION_USER_01</h1>
              <Badge variant="outline" className="w-fit mx-auto md:mx-0 border-primary/50 text-primary uppercase tracking-widest text-[8px]">
                PREMIUM MEMBER
              </Badge>
            </div>
            <p className="text-muted-foreground text-sm font-mono">ID: 4huvtofx7akwjidqavm3md</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                <Star className="h-3 w-3 text-amber-500 fill-current" /> 1,240 XP
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                <BookOpen className="h-3 w-3 text-primary" /> 42 Chapters Read
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                <Heart className="h-3 w-3 text-rose-500 fill-current" /> 15 Artworks Saved
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-none border-white/10"><Settings className="h-4 w-4" /></Button>
            <Button variant="outline" size="icon" className="rounded-none border-white/10 text-rose-500 hover:bg-rose-500/10"><LogOut className="h-4 w-4" /></Button>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <Tabs defaultValue="reading" className="space-y-8">
          <TabsList className="bg-transparent border-b border-white/10 w-full justify-start rounded-none h-auto p-0 gap-8">
            <TabsTrigger value="reading" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-4 uppercase tracking-widest text-[10px] font-bold">
              Reading History
            </TabsTrigger>
            <TabsTrigger value="saved" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-4 uppercase tracking-widest text-[10px] font-bold">
              Saved Art
            </TabsTrigger>
            <TabsTrigger value="orders" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-4 uppercase tracking-widest text-[10px] font-bold">
              Order History
            </TabsTrigger>
            <TabsTrigger value="community" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-4 uppercase tracking-widest text-[10px] font-bold">
              Community Activity
            </TabsTrigger>
          </TabsList>

          <TabsContent value="reading" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-white/5 border-white/10 rounded-none overflow-hidden group cursor-pointer">
                  <div className="flex h-32">
                    <div className="w-24 overflow-hidden">
                      <img src={`https://picsum.photos/seed/cadet-read-${i}/200/300`} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <CardContent className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-tight">Chapter {42 - i}</h4>
                        <p className="text-[10px] text-muted-foreground uppercase">The Deepest Echo Part {42 - i}</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-[8px] font-mono uppercase tracking-widest">
                          <span>Progress</span>
                          <span>100%</span>
                        </div>
                        <div className="h-1 bg-white/10">
                          <div className="h-full bg-primary w-full" />
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
            <Button variant="ghost" className="w-full border border-dashed border-white/10 rounded-none uppercase tracking-widest text-[10px] font-bold">
              View Full History
            </Button>
          </TabsContent>

          <TabsContent value="saved" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square overflow-hidden border border-white/10 group cursor-pointer relative">
                  <img src={`https://picsum.photos/seed/cadet-saved-${i}/400/400`} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="icon" variant="ghost" className="rounded-full bg-white/10"><Heart className="h-4 w-4 fill-rose-500 text-rose-500" /></Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="p-6 border border-white/10 bg-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 bg-slate-900 border border-white/10 flex items-center justify-center">
                    <Package className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest">Order #CADET-102{i}</h4>
                    <p className="text-xs text-muted-foreground">Placed on Oct {20 - i}, 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-12">
                  <div className="text-right">
                    <p className="text-sm font-bold">$45.00</p>
                    <p className="text-[10px] text-primary uppercase tracking-widest">Delivered</p>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-none border-white/10 text-[10px] uppercase font-bold">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>

        {/* Membership Progression */}
        <div className="mt-16 p-12 glass-panel relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <History className="h-64 w-64" />
          </div>
          <div className="relative z-10 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-display font-bold">MEMBERSHIP PROGRESSION</h2>
              <p className="text-muted-foreground text-sm">Unlock exclusive rewards and early access by engaging with the universe.</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">Next Rank: ARCHIVIST</p>
                  <p className="text-xl font-display font-bold">1,240 / 2,000 XP</p>
                </div>
                <Badge variant="outline" className="border-primary/50 text-primary">760 XP TO GO</Badge>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "62%" }}
                  className="h-full bg-primary" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 border border-white/10 bg-black/40 space-y-2">
                <Badge className="bg-primary/20 text-primary text-[8px]">UNLOCKED</Badge>
                <h4 className="text-xs font-bold uppercase tracking-widest">Early Access</h4>
                <p className="text-[10px] text-muted-foreground">Read chapters 24h before public release.</p>
              </div>
              <div className="p-4 border border-white/10 bg-black/40 space-y-2">
                <Badge className="bg-primary/20 text-primary text-[8px]">UNLOCKED</Badge>
                <h4 className="text-xs font-bold uppercase tracking-widest">Collector Badge</h4>
                <p className="text-[10px] text-muted-foreground">Exclusive badge on forum profile.</p>
              </div>
              <div className="p-4 border border-white/20 bg-primary/5 space-y-2 opacity-50">
                <Badge variant="outline" className="text-[8px]">LOCKED</Badge>
                <h4 className="text-xs font-bold uppercase tracking-widest">Digital Artifact</h4>
                <p className="text-[10px] text-muted-foreground">Receive a unique digital collectible at Level 50.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
