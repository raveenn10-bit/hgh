'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { useStore } from '@/context/StoreContext';
import { ProductImage } from '@/components/ui/ProductImage';
import {
  X,
  ShoppingCart,
  MessageCircle,
  CheckCircle,
  XCircle,
  Star,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { config } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(0);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  const handleWhatsApp = () => {
    const cleanNumber = config.whatsappNumber.replace(/[^0-9]/g, '');
    const msg = `Hi ${config.storeName}, I want to order:\n*${product.name}*\nQty: ${quantity}\nTotal: Rs. ${(product.price * quantity).toLocaleString('en-US')}\nLink: /products/${product.slug}`;
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 md:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl bg-slate-50 overflow-hidden border border-slate-100">
              <ProductImage
                src={product.images[selectedImg] || product.images[0] || ''}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(idx)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImg === idx ? 'border-blue-600 scale-105' : 'border-slate-200 opacity-70'
                    }`}
                  >
                    <ProductImage src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                {product.brand} • {product.category}
              </div>
              <h2 className="text-xl font-bold text-slate-900 leading-snug">
                {product.name}
              </h2>

              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                <span className="text-xs text-slate-400">({product.reviewCount} reviews)</span>
                <span className="text-slate-300">•</span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  {product.inStock ? (
                    <span className="text-emerald-600 flex items-center gap-1 font-semibold">
                      <CheckCircle className="w-3.5 h-3.5" /> In Stock ({product.stockCount})
                    </span>
                  ) : (
                    <span className="text-rose-500 flex items-center gap-1 font-semibold">
                      <XCircle className="w-3.5 h-3.5" /> Out of Stock
                    </span>
                  )}
                </span>
              </div>

              <div className="mt-4 p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Price (LKR)</span>
                  <span className="text-2xl font-black text-slate-900">
                    Rs. {product.price.toLocaleString('en-US')}
                  </span>
                </div>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-sm text-slate-400 line-through">
                    Rs. {product.originalPrice.toLocaleString('en-US')}
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mt-4 line-clamp-3">
                {product.description}
              </p>

              {/* Hardware Specifications Snippet */}
              {Object.keys(product.specifications).length > 0 && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Key Specifications
                  </h4>
                  <div className="space-y-1.5 text-xs">
                    {Object.entries(product.specifications).slice(0, 3).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-slate-600">
                        <span className="text-slate-400">{key}:</span>
                        <span className="font-semibold text-slate-800 text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.warranty && (
                <div className="mt-3 flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl">
                  <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                  <span>{product.warranty}</span>
                </div>
              )}
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-600">Quantity:</span>
                <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1.5 text-slate-600 hover:bg-slate-100 transition-colors font-bold text-sm"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-xs font-bold text-slate-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1.5 text-slate-600 hover:bg-slate-100 transition-colors font-bold text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors disabled:bg-slate-100 disabled:text-slate-400"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order WhatsApp</span>
                </button>
              </div>

              <Link
                href={`/products/${product.slug}`}
                onClick={onClose}
                className="block text-center text-xs font-semibold text-blue-600 hover:underline pt-1"
              >
                View Full Product Details & Compatibility →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
