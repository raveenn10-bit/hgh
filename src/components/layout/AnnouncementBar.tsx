'use client';

import React from 'react';
import { useStore } from '@/context/StoreContext';
import { Zap, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const AnnouncementBar: React.FC = () => {
  const { config } = useStore();

  return (
    <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-medium">
          <span className="bg-blue-600 text-white text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded">
            DEMO
          </span>
          <span className="truncate">{config.announcementText}</span>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span>{config.phone}</span>
          </div>
          <span className="hidden sm:inline text-slate-700">|</span>
          <div className="hidden sm:flex items-center gap-1 hover:text-white transition-colors">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Sri Lanka Islandwide Warranty</span>
          </div>
          <span className="hidden sm:inline text-slate-700">|</span>
          <Link
            href="/admin"
            className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-2"
          >
            Admin Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
