import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import CollectionSection from "../components/CollectionSection";
import BrandStory from "../components/BrandStory";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import {
  getCollections,
  getFeaturedProducts
} from "../services/catalogService";

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [collectionItems, setCollectionItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadCatalogData() {
      try {
        const [products, collections] = await Promise.all([
          getFeaturedProducts(),
          getCollections()
        ]);

        setFeaturedProducts(products);
        setCollectionItems(collections);
      } catch (error) {
        console.error("Failed to load catalog data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadCatalogData();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-void text-bone">
      <div className="noise-overlay" />

      <Navbar />
      <Hero />

      {isLoading ? (
        <section className="section-shell py-20">
          <div className="card-border rounded-3xl p-8 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-ash">
              Loading catalog...
            </p>
          </div>
        </section>
      ) : (
        <>
          <ProductGrid products={featuredProducts} />
          <CollectionSection items={collectionItems} />
        </>
      )}

      <BrandStory />
      <CTASection />
      <Footer />
    </main>
  );
}
