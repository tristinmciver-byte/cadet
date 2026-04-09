import { Link } from "react-router-dom";
import { Github, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-display font-bold tracking-tighter glow-cyan">
              CADET
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              An original sci-fi story universe. Explore the depths of Aquanium, 
              uncover the secrets of the transmission, and join the community of collectors.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Universe */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6">Universe</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/comic" className="hover:text-primary transition-colors">Read Comic</Link></li>
              <li><Link to="/universe" className="hover:text-primary transition-colors">Lore & World</Link></li>
              <li><Link to="/characters" className="hover:text-primary transition-colors">Characters</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Art Gallery</Link></li>
              <li><Link to="/archive" className="hover:text-primary transition-colors">Chapter Archive</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6">Community</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/community" className="hover:text-primary transition-colors">Forums</Link></li>
              <li><Link to="/news" className="hover:text-primary transition-colors">News & Updates</Link></li>
              <li><Link to="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link to="/membership" className="hover:text-primary transition-colors">Membership</Link></li>
              <li><Link to="/discord" className="hover:text-primary transition-colors">Discord Server</Link></li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/shop" className="hover:text-primary transition-colors">All Products</Link></li>
              <li><Link to="/shop/books" className="hover:text-primary transition-colors">Physical Books</Link></li>
              <li><Link to="/shop/apparel" className="hover:text-primary transition-colors">Apparel</Link></li>
              <li><Link to="/shop/collectors" className="hover:text-primary transition-colors">Collector Items</Link></li>
              <li><Link to="/shop/shipping" className="hover:text-primary transition-colors">Shipping Info</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-muted-foreground uppercase tracking-widest">
          <p>© 2026 CADET UNIVERSE. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
