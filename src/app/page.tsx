'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useStore } from '@/context/StoreContext';
import { categories } from '@/data/categories';
import { defaultBanners } from '@/data/config';
import { ProductCard } from '@/components/shop/ProductCard';
import { QuickViewModal } from '@/components/shop/QuickViewModal';
import { Product } from '@/types';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Truck,
  Wrench,
  MessageCircle,
  Cpu,
  Layers,
  ChevronRight,
  Package,
} from 'lucide-react';

export default function HomePage() {
  const { config, products } = useStore();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Segment products
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 8);
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 8);
  const newArrivals = products.filter((p) => p.isNewArrival).slice(0, 8);
  const repairToolProducts = products.filter((p) => p.category === 'repair-tools').slice(0, 4);

  const whatsappDirectUrl = `https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello ${config.storeName}, I want to make an inquiry from your website.`
  )}`;

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Large Editorial Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-16 pb-24 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,102,255,0.2),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premier Mobile Parts & Accessories in Sri Lanka</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Genuine Mobile Parts. <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Precision Repair Tools.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                Authentic OLED displays, 0-cycle batteries, charging flex boards, and laboratory-grade microsoldering tools. Islandwide delivery across Sri Lanka with direct WhatsApp checkout.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/shop"
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 flex items-center gap-2"
                >
                  <span>Explore All Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-lg shadow-emerald-600/20 transition-all hover:scale-105 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-blue-400" />
                  <span>1-3 Days Islandwide</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Checking Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-cyan-400" />
                  <span>Tech Verified</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Banner Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl bg-gradient-to-tr from-blue-900/60 via-slate-800/80 to-slate-900/90 border border-slate-700/80 p-8 shadow-2xl backdrop-blur-xl space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/50">
                    Technician Special
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    Stock Available
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white">
                    Trinocular Stereo Microscopes & Stations
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Elevate your motherboard repair with continuous 7X-45X zoom, high thermal heat guns, and precision T12 irons.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Featured Microscope:</span>
                    <span className="font-bold text-white">Relife RL-M3T 45X</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Sample Demo Price:</span>
                    <span className="font-extrabold text-blue-400 text-sm">Rs. 78,000 LKR</span>
                  </div>
                </div>

                <Link
                  href="/shop?category=repair-tools"
                  className="block text-center w-full py-3 rounded-xl bg-white text-slate-900 hover:bg-blue-50 text-xs font-bold transition-all shadow-md"
                >
                  View Repair Lab Catalog →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Three Feature Promotional Banners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {defaultBanners.map((banner) => (
            <div
              key={banner.id}
              className={`rounded-2xl p-6 bg-gradient-to-br ${banner.bgGradient} text-white shadow-xl border border-slate-700/50 flex flex-col justify-between hover:scale-[1.02] transition-transform`}
            >
              <div>
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-cyan-300 bg-cyan-950/60 px-2.5 py-0.5 rounded-full mb-3 border border-cyan-800/40">
                  {banner.badge}
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {banner.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                  {banner.subtitle}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={banner.linkUrl}
                  className="text-xs font-bold text-blue-300 hover:text-white flex items-center gap-1 group"
                >
                  <span>{banner.linkText}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Shop by Category Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              Parts & Accessories Catalog
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Shop by Category
            </h2>
          </div>
          <Link
            href="/categories"
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <span>View All 15 Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/shop?category=${cat.slug}`}
              className="group bg-white rounded-2xl p-4 border border-slate-200/80 hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {cat.name}
                </h3>
                <span className="text-[11px] text-slate-400 font-medium">
                  {cat.count} Items
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Featured Products Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              Top Picks
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Products
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <span>Browse Full Store ({products.length} Products)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>
      </section>

      {/* 5. Mobile Repair Tech Lab Spotlight Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
                Technician & Laboratory Gear
              </span>
              <h2 className="text-3xl font-black text-white">
                Professional Repair Tools & Equipment
              </h2>
              <p className="text-xs text-slate-400 max-w-xl">
                Specialized hardware for smartphone technicians in Sri Lanka: Relife stereomicroscopes, Quick hot air stations, Mechanic soldering irons, and Sunshine UV curing lamps.
              </p>
            </div>
            <Link
              href="/shop?category=repair-tools"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors whitespace-nowrap self-start md:self-auto"
            >
              View All Repair Tools →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairToolProducts.map((tool) => (
              <ProductCard
                key={tool.id}
                product={tool}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Best Sellers Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              Customer Favorites
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Best Sellers
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <span>See More Best Sellers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>
      </section>

      {/* 7. New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">
              Fresh Inventory
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              New Arrivals
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <span>Explore Latest Stock</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setQuickViewProduct}
            />
          ))}
        </div>
      </section>

      {/* 8. WhatsApp Direct CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-100 bg-white/20 px-3 py-1 rounded-full">
              Fast WhatsApp Inquiries & Islandwide Orders
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Need a part or compatibility confirmation?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed">
              Send us the model number or broken screen photo directly on WhatsApp. Our technicians will verify stock and prepare cash-on-delivery courier dispatch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-2xl bg-white text-emerald-800 hover:bg-emerald-50 font-extrabold text-sm shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-800 text-white" />
              <span>Chat with Sales ({config.whatsappNumber})</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}
