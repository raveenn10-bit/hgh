'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useStore } from '@/context/StoreContext';
import { useCart } from '@/context/CartContext';
import { categories } from '@/data/categories';
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  Smartphone,
  Wrench,
  Battery,
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react';

export const Header: React.FC = () => {
  const router = useRouter();
  const { config, products } = useStore();
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  // Quick search filtering
  const searchResults = searchQuery.trim().length > 1
    ? products
        .filter((p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchFocused(false);
    }
  };

  const whatsappDirectUrl = `https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello ${config.storeName}, I would like to inquire about your products.`
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Smartphone className="w-6 h-6 stroke-[2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                APEX <span className="text-blue-600">HUB</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                Mobile & Repair Parts SL
              </span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg relative">
            <form onSubmit={handleSearchSubmit} className="w-full relative">
              <input
                type="text"
                placeholder="Search phones, LCD screens, batteries, tools, chargers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                className="w-full bg-slate-100/90 border border-slate-200 rounded-full pl-11 pr-24 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-inner"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-full transition-colors shadow-sm"
              >
                Search
              </button>
            </form>

            {/* Search Dropdown preview */}
            {searchFocused && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="p-2 border-b border-slate-100 text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3">
                  Matching Products
                </div>
                {searchResults.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="flex items-center justify-between p-3 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs">
                        {product.brand.slice(0, 2)}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 line-clamp-1">
                          {product.name}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {product.brand} • {product.category}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-blue-600 whitespace-nowrap pl-2">
                      Rs. {product.price.toLocaleString('en-US')}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Quick Inquire Button */}
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-3.5 py-2 rounded-full text-xs font-semibold transition-transform hover:scale-105 shadow-sm shadow-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-500" />
              <span>WhatsApp Chat</span>
            </a>

            {/* Shopping Cart */}
            <Link
              href="/cart"
              className="relative p-2.5 rounded-full hover:bg-slate-100 text-slate-700 hover:text-blue-600 transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-6 h-6 stroke-[1.8]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white animate-in zoom-in duration-150">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Secondary Navigation Bar (Desktop) */}
        <nav className="hidden md:flex items-center justify-between py-2.5 border-t border-slate-100 text-sm font-medium text-slate-600">
          <div className="flex items-center gap-7">
            {/* Mega Menu Toggle */}
            <div className="relative">
              <button
                onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
                className="flex items-center gap-2 text-slate-900 font-semibold hover:text-blue-600 transition-colors py-1"
              >
                <Layers className="w-4 h-4 text-blue-600" />
                <span>All Categories</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    categoriesDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Categories Mega Dropdown */}
              {categoriesDropdownOpen && (
                <div
                  onMouseLeave={() => setCategoriesDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-[720px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 z-50 grid grid-cols-3 gap-4 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/shop?category=${cat.slug}`}
                      onClick={() => setCategoriesDropdownOpen(false)}
                      className="group p-2.5 rounded-xl hover:bg-blue-50/70 transition-all flex flex-col gap-1 border border-transparent hover:border-blue-100"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-slate-800 group-hover:text-blue-600 transition-colors">
                          {cat.name}
                        </span>
                        <span className="text-[10px] bg-slate-100 text-slate-500 font-medium px-1.5 py-0.5 rounded-full">
                          {cat.count}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-1 leading-relaxed">
                        {cat.subcategories.slice(0, 2).join(', ')}
                      </p>
                    </Link>
                  ))}
                  <div className="col-span-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/categories"
                      onClick={() => setCategoriesDropdownOpen(false)}
                      className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      View All 15 Product Categories & Sub-Parts →
                    </Link>
                    <span className="text-[11px] text-slate-400">
                      Genuine OEM & Premium Aftermarket Grade
                    </span>
                  </div>
                </div>
              )}
            </div>

            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/shop" className="hover:text-blue-600 transition-colors">
              Shop All Products
            </Link>
            <Link href="/shop?category=displays-lcd" className="hover:text-blue-600 transition-colors">
              Displays / LCD
            </Link>
            <Link href="/shop?category=repair-tools" className="hover:text-blue-600 transition-colors">
              Repair Tools
            </Link>
            <Link href="/shop?category=batteries" className="hover:text-blue-600 transition-colors">
              Batteries
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5 text-emerald-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Stock Available
            </span>
            <Link
              href="/admin"
              className="text-slate-400 hover:text-slate-800 transition-colors"
            >
              Demo Admin Panel
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 space-y-4">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-900"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </form>

          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-50 text-slate-800"
            >
              Home
            </Link>
            <Link
              href="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-50 text-slate-800"
            >
              All Products
            </Link>
            <Link
              href="/categories"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-50 text-slate-800"
            >
              Categories
            </Link>
            <Link
              href="/cart"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-50 text-slate-800"
            >
              Cart ({cartCount})
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-50 text-slate-800"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-50 text-slate-800"
            >
              Contact
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
