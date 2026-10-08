'use client';

import React from 'react';
import Link from 'next/link';
import { useStore } from '@/context/StoreContext';
import {
  Smartphone,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Truck,
  Wrench,
  MessageCircle,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { config } = useStore();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 mb-12 border-b border-slate-800 text-slate-300">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-900/40 text-blue-400 border border-blue-800/50">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Islandwide Delivery</h4>
              <p className="text-xs text-slate-400 mt-0.5">Reliable 1-3 business days courier delivery across Sri Lanka.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-900/40 text-emerald-400 border border-emerald-800/50">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Checking Warranty</h4>
              <p className="text-xs text-slate-400 mt-0.5">Genuine checking warranty on all mobile displays, batteries & boards.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-indigo-900/40 text-indigo-400 border border-indigo-800/50">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Technician Grade Tools</h4>
              <p className="text-xs text-slate-400 mt-0.5">Microscopes, hot air stations, & precision screwdrivers in stock.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-900/40 text-emerald-400 border border-emerald-800/50">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Direct WhatsApp Order</h4>
              <p className="text-xs text-slate-400 mt-0.5">Fast one-click checkout sent straight to WhatsApp sales team.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                APEX <span className="text-blue-500">MOBILE HUB</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {config.tagline}. Leading distributor of smartphone OLED/LCD display assemblies, high capacity batteries, charging flex boards, repair microscopes, and high quality mobile accessories in Sri Lanka.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>{config.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>{config.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>{config.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>{config.openingHours || 'Mon-Sat 9AM-7PM'}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">Quick Navigation</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/shop" className="hover:text-blue-400 transition-colors">Shop All Products</Link></li>
              <li><Link href="/categories" className="hover:text-blue-400 transition-colors">Browse Categories</Link></li>
              <li><Link href="/cart" className="hover:text-blue-400 transition-colors">Shopping Cart</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Our Store</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact & Locations</Link></li>
              <li><Link href="/admin" className="hover:text-blue-400 transition-colors font-semibold text-blue-400">Demo Admin Panel</Link></li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">Parts & Hardware</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/shop?category=displays-lcd" className="hover:text-blue-400 transition-colors">Displays & OLEDs</Link></li>
              <li><Link href="/shop?category=batteries" className="hover:text-blue-400 transition-colors">0-Cycle Batteries</Link></li>
              <li><Link href="/shop?category=charging-flex" className="hover:text-blue-400 transition-colors">Charging Port Flex</Link></li>
              <li><Link href="/shop?category=repair-tools" className="hover:text-blue-400 transition-colors">Repair Lab Microscopes</Link></li>
              <li><Link href="/shop?category=housing" className="hover:text-blue-400 transition-colors">Housings & Back Glass</Link></li>
              <li><Link href="/shop?category=phone-parts" className="hover:text-blue-400 transition-colors">Camera Lenses & Buzzers</Link></li>
            </ul>
          </div>

          {/* Accessories */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">Accessories</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/shop?category=chargers" className="hover:text-blue-400 transition-colors">GaN Fast Chargers</Link></li>
              <li><Link href="/shop?category=earbuds" className="hover:text-blue-400 transition-colors">ANC Wireless Earbuds</Link></li>
              <li><Link href="/shop?category=power-banks" className="hover:text-blue-400 transition-colors">High Capacity Power Banks</Link></li>
              <li><Link href="/shop?category=cables" className="hover:text-blue-400 transition-colors">100W Braided Cables</Link></li>
              <li><Link href="/shop?category=screen-protectors" className="hover:text-blue-400 transition-colors">9H & Privacy Glass</Link></li>
              <li><Link href="/shop?category=phone-cases" className="hover:text-blue-400 transition-colors">MagSafe Cases</Link></li>
            </ul>
          </div>
        </div>

        {/* Demo Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {config.storeName}. Temporary Client Demo Store. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded text-[11px] font-medium">
              Demo Mode Only: No real financial payments are processed
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
