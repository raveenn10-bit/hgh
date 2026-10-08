'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { CartItem, Product } from '@/types';
import { storeConfig } from '@/data/config';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedVariant?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  generateWhatsAppOrderUrl: (customerName?: string, customerPhone?: string, address?: string, notes?: string) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('apex_cart');
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load cart from localStorage', e);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem('apex_cart', JSON.stringify(cart));
      } catch (e) {
        console.error('Failed to save cart to localStorage', e);
      }
    }
  }, [cart, mounted]);

  const addToCart = (product: Product, quantity = 1, selectedVariant?: string) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      }
      return [...prev, { product, quantity, selectedVariant }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const generateWhatsAppOrderUrl = (
    customerName = '',
    customerPhone = '',
    address = '',
    notes = ''
  ) => {
    const cleanNumber = storeConfig.whatsappNumber.replace(/[^0-9]/g, '');
    if (!cleanNumber) return '#';

    let msg = `🛒 *NEW ORDER - ${storeConfig.storeName}*\n`;
    msg += `----------------------------------------\n\n`;

    cart.forEach((item, idx) => {
      msg += `${idx + 1}. *${item.product.name}*\n`;
      msg += `   • Brand: ${item.product.brand}\n`;
      msg += `   • Qty: ${item.quantity} x Rs. ${item.product.price.toLocaleString('en-US')}\n`;
      msg += `   • Subtotal: Rs. ${(item.product.price * item.quantity).toLocaleString('en-US')}\n\n`;
    });

    msg += `----------------------------------------\n`;
    msg += `💰 *TOTAL AMOUNT: Rs. ${cartTotal.toLocaleString('en-US')} (LKR)*\n\n`;

    if (customerName || customerPhone || address) {
      msg += `👤 *Customer Details:*\n`;
      if (customerName) msg += `• Name: ${customerName}\n`;
      if (customerPhone) msg += `• Phone: ${customerPhone}\n`;
      if (address) msg += `• Delivery Address: ${address}\n`;
      if (notes) msg += `• Special Notes: ${notes}\n`;
      msg += `\n`;
    }

    msg += `⚡ _Sent via Apex Mobile Hub Website Demo. Please confirm stock availability and delivery schedule._`;

    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        generateWhatsAppOrderUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
