import { motion, useScroll, useSpring } from "motion/react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, MessageSquare, Share2, Settings, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const panels = [
  "https://picsum.photos/seed/cadet-panel-1/1200/1800",
  "https://picsum.photos/seed/cadet-panel-2/1200/1800",
  "https://picsum.photos/seed/cadet-panel-3/1200/1800",
  "https://picsum.photos/seed/cadet-panel-4/1200/1800",
  "https://picsum.photos/seed/cadet-panel-5/1200/1800",
];

export function ComicReader() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = () => {
      setShowControls(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setShowControls(false), 3000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Top Controls */}
      <motion.div
        animate={{ y: showControls ? 0 : -100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 h-16 flex items-center px-4"
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/archive">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </Link>
            <div>
              <h1 className="text-sm font-bold uppercase tracking-widest">Chapter 42</h1>
              <p className="text-[10px] text-muted-foreground uppercase">The Deepest Echo</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon"><Settings className="h-5 w-5" /></Button>
            <Button variant="ghost" size="icon"><Share2 className="h-5 w-5" /></Button>
            <Button variant="ghost" size="icon"><List className="h-5 w-5" /></Button>
          </div>
        </div>
      </motion.div>

      {/* Comic Panels */}
      <div className="w-full max-w-3xl flex flex-col pt-16">
        {panels.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <img
              src={src}
              alt={`Panel ${i + 1}`}
              className="w-full h-auto block"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>

      {/* End of Chapter */}
      <section className="w-full max-w-3xl py-24 px-4 text-center space-y-12 bg-background border-t border-white/10">
        <div className="space-y-4">
          <Badge variant="outline" className="border-primary text-primary">END OF CHAPTER</Badge>
          <h2 className="text-4xl font-display font-bold">STAY TUNED FOR THE NEXT TRANSMISSION</h2>
          <p className="text-muted-foreground">New chapters released every Friday at 00:00 UTC.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-16 rounded-none border-white/10 flex flex-col items-center justify-center">
            <ChevronLeft className="h-5 w-5 mb-1" />
            <span className="text-[10px] uppercase tracking-widest">Previous</span>
          </Button>
          <Button className="h-16 rounded-none flex flex-col items-center justify-center">
            <ChevronRight className="h-5 w-5 mb-1" />
            <span className="text-[10px] uppercase tracking-widest">Next Chapter</span>
          </Button>
        </div>

        <div className="pt-12 border-t border-white/5">
          <Button variant="ghost" className="w-full h-16 rounded-none border border-dashed border-white/10 group">
            <MessageSquare className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
            VIEW COMMENTS (1,248)
          </Button>
        </div>

        <div className="pt-12 space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Related Content</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/characters/unit-734" className="group">
              <div className="aspect-square overflow-hidden border border-white/10 mb-2">
                <img src="https://picsum.photos/seed/cadet-duo/400/400" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-xs font-bold uppercase tracking-tighter">Unit 734 Profile</p>
            </Link>
            <Link to="/shop/books/vol-1" className="group">
              <div className="aspect-square overflow-hidden border border-white/10 mb-2">
                <img src="https://picsum.photos/seed/cadet-red/400/400" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-xs font-bold uppercase tracking-tighter">Get Volume 1</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Navigation (Bottom) */}
      <motion.div
        animate={{ y: showControls ? 0 : 100 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-full p-2"
      >
        <Button variant="ghost" size="icon" className="rounded-full"><ChevronLeft className="h-5 w-5" /></Button>
        <div className="px-4 border-x border-white/10 flex flex-col items-center">
          <span className="text-[10px] font-bold uppercase tracking-widest">Chapter 42</span>
          <span className="text-[8px] text-muted-foreground uppercase">Page 1 / 12</span>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full"><ChevronRight className="h-5 w-5" /></Button>
      </motion.div>
    </div>
  );
}
