'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { useStore } from '@/context/StoreContext';
import { useCart } from '@/context/CartContext';
import { ProductImage } from '@/components/ui/ProductImage';
import { ProductCard } from '@/components/shop/ProductCard';
import {
  ShoppingCart,
  MessageCircle,
  ShieldCheck,
  Truck,
  CheckCircle,
  XCircle,
  Star,
  ChevronRight,
  ArrowLeft,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const { products, config } = useStore();
  const { addToCart } = useCart();

  const product = products.find((p) => p.slug === slug);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Product Not Found</h1>
        <p className="text-xs text-slate-500">The requested product could not be located in our demo catalog.</p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Shop Catalog
        </Link>
      </div>
    );
  }

  // Related products
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  const cleanNumber = config.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappMsg = `Hello ${config.storeName},\nI would like to order this item:\n*${product.name}*\n• Brand: ${product.brand}\n• Price: Rs. ${product.price.toLocaleString('en-US')} LKR\n• Quantity: ${quantity}\n• Total: Rs. ${(product.price * quantity).toLocaleString('en-US')} LKR\n• Product Link: https://apexmobilehub.lk/products/${product.slug}\n\nPlease let me know if this is currently in stock for delivery.`;
  const whatsappOrderUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-400 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
        <Link href="/shop" className="hover:text-blue-600 transition-colors">Shop</Link>
        <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
        <Link href={`/shop?category=${product.category}`} className="hover:text-blue-600 transition-colors capitalize">
          {product.category.replace('-', ' ')}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
        <span className="text-slate-800 font-semibold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Gallery Column */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-square rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-sm">
            <ProductImage
              src={product.images[selectedImageIndex] || product.images[0] || ''}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isFeatured && (
                <span className="bg-blue-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md">
                  Featured Part
                </span>
              )}
              {discountPercent > 0 && (
                <span className="bg-rose-500 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md">
                  Save {discountPercent}%
                </span>
              )}
            </div>
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                    selectedImageIndex === idx ? 'border-blue-600 scale-105 shadow-md' : 'border-slate-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <ProductImage src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Buy Box & Specifications */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
              <span>{product.brand}</span>
              <span>•</span>
              <span className="text-slate-400">{product.subcategory || product.category}</span>
              {product.condition && (
                <>
                  <span>•</span>
                  <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full text-[10px]">
                    {product.condition}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              {product.name}
            </h1>

            {/* Rating and Reviews */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="ml-1 text-xs font-bold text-slate-800">{product.rating}</span>
              </div>
              <span className="text-xs text-slate-400">({product.reviewCount} customer reviews)</span>
              <span className="text-slate-300">|</span>
              <span className="text-xs font-semibold flex items-center gap-1">
                {product.inStock ? (
                  <span className="text-emerald-600 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> In Stock ({product.stockCount} units available)
                  </span>
                ) : (
                  <span className="text-rose-500 flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5" /> Currently Out of Stock
                  </span>
                )}
              </span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-baseline justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 block mb-0.5">Demo Price in LKR</span>
              <div className="text-3xl font-black text-slate-900 tracking-tight">
                Rs. {product.price.toLocaleString('en-US')}
              </div>
            </div>
            {product.originalPrice && product.originalPrice > product.price && (
              <div className="text-right">
                <span className="text-xs text-slate-400 block">Original Price</span>
                <span className="text-base font-bold text-slate-400 line-through">
                  Rs. {product.originalPrice.toLocaleString('en-US')}
                </span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
            <p>{product.description}</p>
          </div>

          {/* Model Compatibility */}
          {product.modelCompatibility && product.modelCompatibility.length > 0 && (
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block">
                Model & Hardware Compatibility
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.modelCompatibility.map((model, idx) => (
                  <span
                    key={idx}
                    className="bg-white border border-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-lg shadow-2xs"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Purchase Controls */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-700">Quantity:</span>
              <div className="flex items-center border border-slate-300 rounded-xl bg-white overflow-hidden shadow-2xs">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3.5 py-2 text-slate-600 hover:bg-slate-100 font-bold transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 text-xs font-bold text-slate-900">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3.5 py-2 text-slate-600 hover:bg-slate-100 font-bold transition-colors"
                >
                  +
                </button>
              </div>
              <span className="text-xs text-slate-400">
                Subtotal: <strong className="text-slate-800">Rs. {(product.price * quantity).toLocaleString('en-US')}</strong>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`py-3.5 px-6 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm ${
                  !product.inStock
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : addedAnimation
                    ? 'bg-emerald-600 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-md'
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>{addedAnimation ? 'Added to Cart!' : 'Add to Shopping Cart'}</span>
              </button>

              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order via WhatsApp Direct</span>
              </a>
            </div>
          </div>

          {/* Guarantees Box */}
          <div className="grid grid-cols-2 gap-3 pt-4 text-xs text-slate-600">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <Truck className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>Islandwide Delivery in 1-3 Business Days</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{product.warranty || 'Checking Warranty on Delivery'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Table Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
        <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
          <Cpu className="w-5 h-5 text-blue-600" />
          <span>Technical Specifications & Hardware Details</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(product.specifications).map(([label, val]) => (
            <div
              key={label}
              className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs"
            >
              <span className="font-semibold text-slate-500">{label}</span>
              <span className="font-bold text-slate-900 text-right">{val}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <h2 className="text-xl font-extrabold text-slate-900">
              Related {product.category.replace('-', ' ')}
            </h2>
            <Link
              href={`/shop?category=${product.category}`}
              className="text-xs font-bold text-blue-600 hover:underline"
            >
              View More →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
