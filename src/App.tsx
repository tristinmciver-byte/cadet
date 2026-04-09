import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@/src/pages/Home";
import { ComicReader } from "@/src/pages/ComicReader";
import { Archive } from "@/src/pages/Archive";
import { Gallery } from "@/src/pages/Gallery";
import { News } from "@/src/pages/News";
import { Community } from "@/src/pages/Community";
import { Shop } from "@/src/pages/Shop";
import { Account } from "@/src/pages/Account";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comic" element={<ComicReader />} />
            <Route path="/comic/:id" element={<ComicReader />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/community" element={<Community />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/account" element={<Account />} />
            {/* Other routes will be added here */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
