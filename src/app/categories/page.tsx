'use client';

import React from 'react';
import Link from 'next/link';
import { categories } from '@/data/categories';
import { Layers, ArrowRight, Smartphone, Monitor, BatteryCharging, Zap, Cpu, Box, Wrench, Plug, Headphones, Battery, Cable, Shield, Volume2, HardDrive } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-6 h-6" />,
  Monitor: <Monitor className="w-6 h-6" />,
  BatteryCharging: <BatteryCharging className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Box: <Box className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  Plug: <Plug className="w-6 h-6" />,
  Headphones: <Headphones className="w-6 h-6" />,
  Battery: <Battery className="w-6 h-6" />,
  Cable: <Cable className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Volume2: <Volume2 className="w-6 h-6" />,
  HardDrive: <HardDrive className="w-6 h-6" />,
};

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="border-b border-slate-200 pb-6">
        <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
          Catalog Taxonomy
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Browse All Product Categories
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-2xl leading-relaxed">
          Explore complete mobile replacement modules, technician workshop equipment, and high-performance smartphone accessories cataloged for Sri Lankan retailers and repair labs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/shop?category=${cat.slug}`}
            className="group bg-white rounded-3xl p-6 border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                  {iconMap[(cat.iconName || cat.icon || '') as string] || <Layers className="w-6 h-6" />}
                </div>
                <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                  {cat.count} Items
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                {cat.description}
              </p>

              {/* Subcategories */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {cat.subcategories.map((sub, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-200/80 px-2.5 py-1 rounded-lg"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
              <span>View {cat.name} Products</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
