'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Product, StoreConfig } from '@/types';
import { products as initialProducts } from '@/data/products';
import { storeConfig as defaultStoreConfig } from '@/data/config';

interface StoreContextType {
  config: StoreConfig;
  updateConfig: (newConfig: Partial<StoreConfig>) => void;
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  toggleStock: (id: string) => void;
  toggleFeatured: (id: string) => void;
  resetToDefaults: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<StoreConfig>(defaultStoreConfig);
  const [productsList, setProductsList] = useState<Product[]>(initialProducts);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedConfig = localStorage.getItem('apex_config');
      if (savedConfig) {
        setConfig(JSON.parse(savedConfig));
      }
      const savedProducts = localStorage.getItem('apex_products');
      if (savedProducts) {
        setProductsList(JSON.parse(savedProducts));
      }
    } catch (e) {
      console.error('Failed to load store data from localStorage', e);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem('apex_config', JSON.stringify(config));
      } catch (e) {
        console.error('Failed to save config to localStorage', e);
      }
    }
  }, [config, mounted]);

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem('apex_products', JSON.stringify(productsList));
      } catch (e) {
        console.error('Failed to save products to localStorage', e);
      }
    }
  }, [productsList, mounted]);

  const updateConfig = (newConfig: Partial<StoreConfig>) => {
    setConfig((prev) => ({ ...prev, ...newConfig }));
  };

  const addProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...productData,
      id: `prod-custom-${Date.now()}`,
    };
    setProductsList((prev) => [newProduct, ...prev]);
  };

  const updateProduct = (updated: Product) => {
    setProductsList((prev) =>
      prev.map((p) => (p.id === updated.id ? updated : p))
    );
  };

  const deleteProduct = (id: string) => {
    setProductsList((prev) => prev.filter((p) => p.id !== id));
  };

  const toggleStock = (id: string) => {
    setProductsList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, inStock: !p.inStock } : p))
    );
  };

  const toggleFeatured = (id: string) => {
    setProductsList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isFeatured: !p.isFeatured } : p))
    );
  };

  const resetToDefaults = () => {
    setConfig(defaultStoreConfig);
    setProductsList(initialProducts);
    try {
      localStorage.removeItem('apex_config');
      localStorage.removeItem('apex_products');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <StoreContext.Provider
      value={{
        config,
        updateConfig,
        products: productsList,
        addProduct,
        updateProduct,
        deleteProduct,
        toggleStock,
        toggleFeatured,
        resetToDefaults,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
