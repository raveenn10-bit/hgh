'use client';

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { 
  Package, 
  Smartphone, 
  Tv, 
  BatteryCharging, 
  Wrench, 
  Zap, 
  Cpu, 
  Sparkles, 
  Flame,
  Layers,
  HardDrive,
  Headphones,
  ShieldCheck,
  Ban
} from 'lucide-react';
import { cn } from '@/lib/utils';

export type ProductBadgeType = 'sale' | 'out-of-stock' | 'featured' | 'new' | 'bestseller' | string;

export interface ProductImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src?: string | null;
  alt: string;
  productName?: string;
  brand?: string;
  category?: string;
  badge?: ProductBadgeType;
  badgeText?: string;
  discountPercent?: number;
  inStock?: boolean;
  isFeatured?: boolean;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  aspectRatio?: 'square' | 'video' | 'portrait' | '4/3' | 'auto';
  zoomOnHover?: boolean;
  containerClassName?: string;
  fallbackInitials?: string;
}

// Category Icon resolver for the fallback state
function getCategoryIcon(category?: string) {
  if (!category) return Package;
  const cat = category.toLowerCase();
  if (cat.includes('phone') || cat.includes('smartphone')) return Smartphone;
  if (cat.includes('display') || cat.includes('lcd') || cat.includes('screen') || cat.includes('oled')) return Tv;
  if (cat.includes('battery')) return BatteryCharging;
  if (cat.includes('tool') || cat.includes('microscope') || cat.includes('soldering')) return Wrench;
  if (cat.includes('flex') || cat.includes('charge') || cat.includes('cable')) return Zap;
  if (cat.includes('part') || cat.includes('camera') || cat.includes('housing')) return Cpu;
  if (cat.includes('case') || cat.includes('protector')) return Layers;
  if (cat.includes('memory') || cat.includes('storage') || cat.includes('card')) return HardDrive;
  if (cat.includes('earbud') || cat.includes('audio') || cat.includes('headphone') || cat.includes('speaker')) return Headphones;
  return Package;
}

// Extract clean 2-3 letter initials from product title
function getInitials(name?: string, fallback = 'APX'): string {
  if (!name) return fallback;
  const words = name.trim().split(/\s+/);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return name.slice(0, 3).toUpperCase();
}

export function ProductImage({
  src,
  alt,
  productName,
  brand,
  category,
  badge,
  badgeText,
  discountPercent,
  inStock = true,
  isFeatured,
  isNewArrival,
  isBestSeller,
  aspectRatio = 'square',
  zoomOnHover = true,
  containerClassName,
  className,
  fallbackInitials,
  width,
  height,
  fill = true,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...props
}: ProductImageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(!src);

  // Reset state whenever src changes
  useEffect(() => {
    setIsLoading(true);
    setHasError(!src);
  }, [src]);

  // Determine aspect ratio class
  const aspectClass = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    '4/3': 'aspect-[4/3]',
    auto: '',
  }[aspectRatio];

  // Resolve Badge Details
  let activeBadge: { label: string; style: string; icon?: React.ReactNode } | null = null;

  if (inStock === false || badge === 'out-of-stock') {
    activeBadge = {
      label: 'Out of Stock',
      style: 'bg-slate-900/90 text-slate-300 border border-slate-700/80 shadow-sm backdrop-blur-md',
      icon: <Ban className="w-3 h-3 mr-1 text-slate-400" />,
    };
  } else if (discountPercent && discountPercent > 0) {
    activeBadge = {
      label: `-${discountPercent}%`,
      style: 'bg-gradient-to-r from-rose-600 to-red-500 text-white font-black shadow-md shadow-rose-600/30',
      icon: <Flame className="w-3 h-3 mr-1 fill-white text-white" />,
    };
  } else if (badge === 'sale' || badgeText) {
    activeBadge = {
      label: badgeText || 'SALE',
      style: 'bg-gradient-to-r from-rose-600 to-red-500 text-white font-bold shadow-md shadow-rose-600/30',
      icon: <Flame className="w-3 h-3 mr-1 text-white" />,
    };
  } else if (isBestSeller || badge === 'bestseller') {
    activeBadge = {
      label: 'Best Seller',
      style: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-md shadow-amber-500/30',
      icon: <Sparkles className="w-3 h-3 mr-1 text-white fill-white" />,
    };
  } else if (isNewArrival || badge === 'new') {
    activeBadge = {
      label: 'New Arrival',
      style: 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold shadow-md shadow-emerald-600/30',
      icon: <Sparkles className="w-3 h-3 mr-1 text-white" />,
    };
  } else if (isFeatured || badge === 'featured') {
    activeBadge = {
      label: 'Featured',
      style: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-md shadow-blue-600/30',
      icon: <Sparkles className="w-3 h-3 mr-1 text-white" />,
    };
  }

  // Detect SVG for unoptimized bypass
  const isSvg = typeof src === 'string' && (src.endsWith('.svg') || src.includes('.svg?'));
  const CategoryIcon = getCategoryIcon(category);
  const initials = fallbackInitials || getInitials(productName || alt, brand ? brand.slice(0, 3) : 'APX');

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-xl bg-slate-900 border border-slate-800/80 transition-all duration-300',
        aspectClass,
        containerClassName
      )}
    >
      {/* Badge Overlay */}
      {activeBadge && (
        <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none">
          <span
            className={cn(
              'inline-flex items-center px-2.5 py-1 rounded-full text-[11px] uppercase tracking-wider backdrop-blur-sm transition-transform duration-200 group-hover:scale-105',
              activeBadge.style
            )}
          >
            {activeBadge.icon}
            {activeBadge.label}
          </span>
        </div>
      )}

      {/* Brand Watermark / Lab Tag in Top-Right */}
      {brand && !hasError && (
        <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 text-blue-400 border border-slate-800 backdrop-blur-sm">
            {brand}
          </span>
        </div>
      )}

      {/* High-Fidelity Skeleton Loader */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 z-10 bg-slate-900/90 flex flex-col items-center justify-center p-4">
          {/* Subtle Ambient Shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" />
          
          <div className="relative flex flex-col items-center">
            {/* Pulsing Hardware Ring */}
            <div className="relative w-14 h-14 rounded-2xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center shadow-inner">
              <CategoryIcon className="w-6 h-6 text-blue-400/70 animate-pulse" />
              <div className="absolute -inset-1 rounded-2xl border border-blue-500/20 animate-ping opacity-40 pointer-events-none" />
            </div>

            {/* Skeleton shimmer bars */}
            <div className="mt-3 w-20 h-2 bg-slate-800 rounded-full animate-pulse" />
            <div className="mt-1.5 w-12 h-1.5 bg-slate-800/60 rounded-full animate-pulse" />
          </div>
        </div>
      )}

      {/* Out of Stock Dark Overlay */}
      {inStock === false && !hasError && (
        <div className="absolute inset-0 z-10 bg-slate-950/60 backdrop-grayscale pointer-events-none" />
      )}

      {/* Graceful Error / Fallback State */}
      {hasError ? (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 select-none">
          {/* Subtle Technical Grid Background */}
          <div 
            className="absolute inset-0 opacity-10 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" 
          />

          {/* Central Hardware Icon Disc */}
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-xl flex items-center justify-center mb-3">
            <CategoryIcon className="w-8 h-8 text-blue-400" />
            
            {/* Initials badge overlay */}
            <div className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-md bg-blue-600 text-white text-[9px] font-black tracking-wider shadow">
              {initials}
            </div>
          </div>

          {/* Informative Fallback Typography */}
          <div className="relative z-10 max-w-[200px]">
            <p className="text-xs font-bold text-slate-200 line-clamp-1">
              {productName || alt}
            </p>
            <div className="mt-1 flex items-center justify-center space-x-1.5">
              <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="text-[10px] font-medium text-slate-400">
                APEX Verified OEM
              </span>
            </div>
          </div>

          {/* Bottom subtle watermark */}
          <span className="absolute bottom-2 text-[9px] font-mono tracking-widest text-slate-600 uppercase">
            APEX MOBILE HUB
          </span>
        </div>
      ) : (
        /* Actual Next.js / Standard Image */
        <Image
          src={src as string}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          sizes={sizes}
          priority={priority}
          unoptimized={isSvg || props.unoptimized}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={cn(
            'object-contain p-2 transition-all duration-500 ease-out',
            isLoading ? 'opacity-0 scale-95 blur-[2px]' : 'opacity-100 scale-100 blur-0',
            zoomOnHover && 'group-hover:scale-105',
            className
          )}
          {...props}
        />
      )}
    </div>
  );
}

export default ProductImage;
