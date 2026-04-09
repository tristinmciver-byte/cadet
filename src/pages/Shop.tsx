import { motion } from "motion/react";
import { Filter, Search, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Cadet: Volume 1 (Hardcover)",
    price: 34.99,
    category: "Books",
    image: "https://picsum.photos/seed/cadet-book-1/600/800",
    rating: 4.9,
    isNew: false,
    isLimited: true,
  },
  {
    id: 2,
    name: "Unit 734 'Transmission' Hoodie",
    price: 65.00,
    category: "Apparel",
    image: "https://picsum.photos/seed/cadet-hoodie/600/800",
    rating: 4.8,
    isNew: true,
    isLimited: false,
  },
  {
    id: 3,
    name: "Aquanium Core Crystal (Replica)",
    price: 120.00,
    category: "Collectors",
    image: "https://picsum.photos/seed/cadet-crystal/600/800",
    rating: 5.0,
    isNew: true,
    isLimited: true,
  },
  {
    id: 4,
    name: "Sector 7 Art Print (Signed)",
    price: 45.00,
    category: "Art",
    image: "https://picsum.photos/seed/cadet-print/600/800",
    rating: 4.7,
    isNew: false,
    isLimited: true,
  },
  {
    id: 5,
    name: "Cadet Universe Logo Tee",
    price: 28.00,
    category: "Apparel",
    image: "https://picsum.photos/seed/cadet-tee/600/800",
    rating: 4.5,
    isNew: false,
    isLimited: false,
  },
  {
    id: 6,
    name: "Dr. Vora's Medical ID Card",
    price: 15.00,
    category: "Collectors",
    image: "https://picsum.photos/seed/cadet-id/600/800",
    rating: 4.9,
    isNew: true,
    isLimited: false,
  },
];

export function Shop() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tighter glow-cyan">THE DEPOT</h1>
            <p className="text-muted-foreground max-w-xl">
              Official merchandise and collector items from the Cadet universe. 
              Limited drops and premium quality gear.
            </p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-grow md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-white/5 border border-white/10 rounded-none pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <Button variant="outline" size="icon" className="rounded-none border-white/10">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Featured Drop Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 relative aspect-[21/7] overflow-hidden border border-white/10 group cursor-pointer"
        >
          <img
            src="https://picsum.photos/seed/cadet-shop-hero/1920/600"
            alt="Featured Drop"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 space-y-4">
            <Badge className="w-fit bg-primary text-primary-foreground rounded-none uppercase tracking-widest text-[10px] font-bold">
              LIMITED DROP
            </Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">THE AQUANIUM COLLECTION</h2>
            <p className="text-muted-foreground max-w-md hidden md:block">
              Exclusive apparel and artifacts inspired by the core of the utopian city. 
              Available for 72 hours only.
            </p>
            <Button className="w-fit rounded-none px-8 h-12 font-bold uppercase tracking-widest">
              SHOP COLLECTION
            </Button>
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-2 scrollbar-hide">
          {["All Products", "Books", "Apparel", "Collectors", "Art"].map((cat) => (
            <Button
              key={cat}
              variant={cat === "All Products" ? "secondary" : "ghost"}
              className="rounded-none uppercase tracking-widest text-[10px] font-bold"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="bg-transparent border-none rounded-none group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden border border-white/10 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  
                  <div className="absolute top-2 left-2 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-primary text-primary-foreground rounded-none text-[8px] font-bold uppercase tracking-widest">NEW</Badge>
                    )}
                    {product.isLimited && (
                      <Badge className="bg-amber-500 text-black rounded-none text-[8px] font-bold uppercase tracking-widest">LIMITED</Badge>
                    )}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-primary text-primary-foreground text-center font-bold uppercase tracking-widest text-xs">
                    QUICK ADD TO CART
                  </div>
                </div>
                <CardContent className="p-0 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{product.category}</span>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-amber-500">
                      <Star className="h-3 w-3 fill-current" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-display font-bold group-hover:text-primary transition-colors leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-xl font-mono font-bold">${product.price.toFixed(2)}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pagination/Load More */}
        <div className="mt-24 text-center">
          <Button variant="outline" className="rounded-none px-12 h-14 font-bold border-white/10 hover:bg-white/5 uppercase tracking-widest">
            View More Products
          </Button>
        </div>
      </div>
    </div>
  );
}
