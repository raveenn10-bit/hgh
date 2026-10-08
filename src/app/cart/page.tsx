'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useStore } from '@/context/StoreContext';
import { ProductImage } from '@/components/ui/ProductImage';
import {
  Trash2,
  MessageCircle,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart, cartTotal, generateWhatsAppOrderUrl } = useCart();
  const { config } = useStore();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');
  const [orderSent, setOrderSent] = useState(false);

  const handleWhatsAppCheckout = () => {
    if (!config.whatsappNumber) {
      alert('WhatsApp number is not configured in the store settings!');
      return;
    }
    const url = generateWhatsAppOrderUrl(customerName, customerPhone, deliveryAddress, customerNotes);
    window.open(url, '_blank');
    setOrderSent(true);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto shadow-inner">
          <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">Your Cart is Empty</h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            You haven't added any mobile parts or accessories to your cart yet. Browse our extensive catalogue of displays, batteries, and tools.
          </p>
        </div>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all hover:scale-105"
        >
          <span>Start Shopping Now</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Shopping Cart</h1>
          <p className="text-xs text-slate-500 mt-1">Review your items and proceed with Direct WhatsApp Checkout (LKR)</p>
        </div>
        <button
          onClick={clearCart}
          className="text-xs text-rose-500 hover:text-rose-700 font-bold flex items-center gap-1.5 self-start sm:self-auto"
        >
          <Trash2 className="w-4 h-4" /> Clear All Items
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Cart Item List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm divide-y divide-slate-100">
            {cart.map((item) => (
              <div key={item.product.id} className="p-4 sm:p-6 flex gap-4 items-center">
                {/* Thumb */}
                <div className="relative w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden flex-shrink-0">
                  <ProductImage
                    src={item.product.images[0] || ''}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                    {item.product.brand}
                  </div>
                  <Link
                    href={`/products/${item.product.slug}`}
                    className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors line-clamp-2"
                  >
                    {item.product.name}
                  </Link>
                  <div className="text-xs font-semibold text-slate-500 mt-1">
                    Rs. {item.product.price.toLocaleString('en-US')} each
                  </div>
                </div>

                {/* Quantity Controls & Subtotal */}
                <div className="flex flex-col items-end gap-2 flex-shrink-0">
                  <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-white">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="px-2.5 py-1 text-slate-600 hover:bg-slate-100 font-bold text-xs"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-xs font-bold text-slate-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="px-2.5 py-1 text-slate-600 hover:bg-slate-100 font-bold text-xs"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-xs font-black text-slate-900">
                    Rs. {(item.product.price * item.quantity).toLocaleString('en-US')}
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-slate-400 hover:text-rose-500 transition-colors p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-800">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Notice:</strong> This is a demonstration store. No online debit/credit card gateway is required. Orders are transmitted via WhatsApp to verify genuine stock before dispatching with Islandwide Cash on Delivery (COD).
            </p>
          </div>
        </div>

        {/* Order Summary & WhatsApp Checkout Box */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6 sticky top-28">
            <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-4">
              Order Summary
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Items Subtotal:</span>
                <span className="font-bold text-slate-900">Rs. {cartTotal.toLocaleString('en-US')}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Islandwide Delivery:</span>
                <span className="font-bold text-emerald-600">Standard Courier (COD Available)</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Currency:</span>
                <span className="font-bold text-slate-900">LKR (Sri Lankan Rupee)</span>
              </div>
              <div className="pt-3 border-t border-slate-100 flex justify-between items-baseline">
                <span className="text-sm font-bold text-slate-900">Total Order Amount:</span>
                <span className="text-2xl font-black text-blue-600">
                  Rs. {cartTotal.toLocaleString('en-US')}
                </span>
              </div>
            </div>

            {/* Customer Details Form (Optional but recommended for WhatsApp message) */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Recipient Details (For Delivery Verification)
              </h4>

              <input
                type="text"
                placeholder="Your Full Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                placeholder="Contact Phone Number (e.g. 077 123 4567)"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                placeholder="Delivery Address & City (e.g. Colombo, Kandy, Galle...)"
                rows={2}
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Special notes / Preferred delivery time"
                value={customerNotes}
                onChange={(e) => setCustomerNotes(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* WhatsApp Checkout CTA */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Complete Order on WhatsApp</span>
              </button>

              {orderSent && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>WhatsApp message prepared! Please hit send in your WhatsApp window.</span>
                </div>
              )}
            </div>

            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                <span>Testing warranty provided for all LCDs and batteries</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-blue-500" />
                <span>Cash on delivery or Bank Transfer confirmed upon WhatsApp chat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
