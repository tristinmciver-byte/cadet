import { Link } from "react-router-dom";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Comic", href: "/comic" },
  { name: "Universe", href: "/universe" },
  { name: "Characters", href: "/characters" },
  { name: "Gallery", href: "/gallery" },
  { name: "News", href: "/news" },
  { name: "Community", href: "/community" },
  { name: "Shop", href: "/shop" },
];

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background border-r border-white/10 p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-white/10">
                  <Link to="/" className="text-2xl font-display font-bold tracking-tighter glow-cyan">
                    CADET
                  </Link>
                </div>
                <div className="flex-1 overflow-y-auto py-6 px-6 space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block text-lg font-medium hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="p-6 border-t border-white/10">
                  <Button className="w-full">Join Transmission</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link to="/" className="text-2xl font-display font-bold tracking-tighter glow-cyan lg:mr-8">
          CADET
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 200, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="hidden md:block overflow-hidden"
              >
                <input
                  type="text"
                  placeholder="Search universe..."
                  className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-1 text-sm focus:outline-none focus:border-primary"
                  autoFocus
                />
              </motion.div>
            )}
          </AnimatePresence>
          
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </Button>
          
          <Link to="/shop/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full" />
            </Button>
          </Link>

          <Link to="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>

          <Button className="hidden md:flex ml-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none uppercase tracking-tighter font-bold">
            Join Transmission
          </Button>
        </div>
      </div>
    </nav>
  );
}
