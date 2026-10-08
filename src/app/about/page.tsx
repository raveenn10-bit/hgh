'use client';

import React from 'react';
import Link from 'next/link';
import { useStore } from '@/context/StoreContext';
import {
  Smartphone,
  ShieldCheck,
  Truck,
  Wrench,
  Users,
  Award,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

export default function AboutPage() {
  const { config } = useStore();

  return (
    <div className="space-y-16 pb-20">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
            About Apex Mobile Hub
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            Sri Lanka's Trusted Mobile Parts & Technician Hub
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Supplying original smartphone replacement displays, testing-grade batteries, IC parts, and specialized repair machinery across the island since 2018.
          </p>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Empowering Smartphone Technicians and Retailers Across Sri Lanka
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              At {config.storeName}, we bridge the gap between world-class mobile component manufacturers and local repair workshops across Colombo, Kandy, Galle, Jaffna, Kurunegala, and beyond.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every display assembly, battery cell, and microscope in our catalog is rigorously inspected to ensure authentic color reproduction, touch sensitivity, and battery health matching OEM factory specifications.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
                <div className="text-2xl font-black text-blue-600">15,000+</div>
                <div className="text-xs font-semibold text-slate-600 mt-1">Mobile Parts in Stock</div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                <div className="text-2xl font-black text-emerald-600">25+ Districts</div>
                <div className="text-xs font-semibold text-slate-600 mt-1">Islandwide Courier Reach</div>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-slate-900">Checking Warranty</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Clear test-before-fitting warranty on all OLEDs, touch screens, and flex assemblies for technicians.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-slate-900">Lab Grade Tools</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Official distributors of Relife, Quick, Mechanic, and Sunshine microsoldering and inspection stations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-slate-900">Fast Courier Dispatch</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Same-day packing and dispatch with express tracking and cash-on-delivery options.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-slate-900">Direct Technician Chat</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Connect with our technical support team via WhatsApp for instant part identification and advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black">
            Looking for a specific part or bulk wholesale pricing?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Reach out to our sales team directly on WhatsApp or browse our full online catalog.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
            >
              Browse Shop Catalog
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs"
            >
              Contact Store Location
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
