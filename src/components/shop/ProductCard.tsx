'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { useStore } from '@/context/StoreContext';
import { ProductImage } from '@/components/ui/ProductImage';
import {
  ShoppingCart,
  Eye,
  Star,
  CheckCircle,
  XCircle,
  MessageCircle,
  Sparkles,
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const { config } = useStore();
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const handleQuickWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const cleanNumber = config.whatsappNumber.replace(/[^0-9]/g, '');
    const msg = `Hi ${config.storeName}, I want to check availability for:\n*${product.name}*\nPrice: Rs. ${product.price.toLocaleString('en-US')}\nLink: /products/${product.slug}`;
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/80 hover:border-blue-400/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5 pointer-events-none">
        {product.isFeatured && (
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5" /> Featured
          </span>
        )}
        {discountPercent > 0 && (
          <span className="bg-rose-500 text-white text-[10px] font-extrabold tracking-wider px-2 py-0.5 rounded-full shadow-sm">
            Save {discountPercent}%
          </span>
        )}
        {product.condition && (
          <span className="bg-slate-900/80 backdrop-blur-sm text-slate-200 text-[10px] font-semibold px-2 py-0.5 rounded-full">
            {product.condition}
          </span>
        )}
      </div>

      {/* Image Container with Quick View Button */}
      <Link href={`/products/${product.slug}`} className="block relative aspect-square bg-slate-50 overflow-hidden">
        <ProductImage
          src={product.images[0] || ''}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Quick Action Overlay on Hover */}
        <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
          {onQuickView && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onQuickView(product);
              }}
              className="bg-white/95 hover:bg-white text-slate-800 p-2.5 rounded-full shadow-md hover:scale-110 transition-transform"
              title="Quick View"
              aria-label="Quick View"
            >
              <Eye className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={handleQuickWhatsApp}
            className="bg-emerald-500 hover:bg-emerald-600 text-white p-2.5 rounded-full shadow-md hover:scale-110 transition-transform"
            title="Ask on WhatsApp"
            aria-label="Ask on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>
      </Link>

      {/* Product Information */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Brand info */}
          <div className="flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
            <span className="text-blue-600 truncate">{product.brand}</span>
            <span className="truncate">{product.subcategory || product.category}</span>
          </div>

          {/* Product Name */}
          <Link href={`/products/${product.slug}`} className="block">
            <h3 className="font-bold text-sm text-slate-900 hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
              {product.name}
            </h3>
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
            </div>
            <span className="text-xs font-bold text-slate-700">{product.rating}</span>
            <span className="text-[11px] text-slate-400">({product.reviewCount})</span>
          </div>
        </div>

        {/* Pricing & Stock Status */}
        <div className="pt-4 mt-3 border-t border-slate-100">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <div className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                Rs. {product.price.toLocaleString('en-US')}
              </div>
              {product.originalPrice && product.originalPrice > product.price && (
                <div className="text-xs text-slate-400 line-through">
                  Rs. {product.originalPrice.toLocaleString('en-US')}
                </div>
              )}
            </div>

            <div className="text-[11px] font-semibold flex items-center gap-1">
              {product.inStock ? (
                <span className="text-emerald-600 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> In Stock
                </span>
              ) : (
                <span className="text-rose-500 flex items-center gap-1">
                  <XCircle className="w-3 h-3" /> Out of Stock
                </span>
              )}
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm ${
              !product.inStock
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : addedAnimation
                ? 'bg-emerald-600 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-md'
            }`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>{addedAnimation ? 'Added to Cart!' : 'Add to Cart'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
