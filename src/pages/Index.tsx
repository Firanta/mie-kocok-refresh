import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { HeroSection } from '@/components/HeroSection';
import { SearchBar } from '@/components/SearchBar';
import { CategoryFilter, CategoryType } from '@/components/CategoryFilter';
import { MenuItemCard } from '@/components/MenuItemCard';
import { FloatingCart } from '@/components/FloatingCart';
import { ScrollToTop } from '@/components/ScrollToTop';
import { useCart } from '@/hooks/useCart';
import { menuItems, MenuItem } from '@/lib/menuData';

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryType>('semua');
  const [customerName, setCustomerName] = useState('');
  
  const { 
    items: cartItems, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    totalPrice, 
    totalItems 
  } = useCart();

  // Filter menu items based on search and category
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'semua' || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
    toast.success(`${item.name} ditambahkan ke keranjang!`, {
      position: 'bottom-center',
      duration: 2000,
    });
  };

  const handleCheckout = () => {
    if (!customerName.trim()) {
      toast.error('Nama pemesan wajib diisi!', {
        position: 'bottom-center',
      });
      return;
    }

    if (cartItems.length === 0) {
      toast.error('Keranjang masih kosong!', {
        position: 'bottom-center',
      });
      return;
    }

    // Store order data for payment page (simulating Firebase behavior)
    const orderData = {
      id: `order-${Date.now()}`,
      name: customerName,
      items: cartItems,
      total: totalPrice,
      status: 'pending',
      timestamp: new Date().toISOString(),
    };
    
    localStorage.setItem('currentOrder', JSON.stringify(orderData));
    clearCart();
    setCustomerName('');
    
    navigate(`/payment?id=${orderData.id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="container py-8 md:py-12">
        {/* Search & Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 mb-10"
        >
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Menu Kami
            </h2>
            <p className="text-muted-foreground">
              Pilih menu favoritmu dari berbagai pilihan lezat
            </p>
          </div>

          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          
          <CategoryFilter 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredItems.map((item, index) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onAddToCart={handleAddToCart}
              index={index}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <span className="text-4xl">🍜</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Menu tidak ditemukan
            </h3>
            <p className="text-muted-foreground">
              Coba kata kunci lain atau pilih kategori berbeda
            </p>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 mt-12">
        <div className="container text-center">
          <h3 className="font-display text-xl font-bold mb-2">
            Mie Kocok Bandung
          </h3>
          <p className="text-secondary-foreground/70 text-sm">
            © 2024 Mie Kocok Bandung. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating Cart */}
      <FloatingCart
        items={cartItems}
        totalPrice={totalPrice}
        totalItems={totalItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
        customerName={customerName}
        onCustomerNameChange={setCustomerName}
      />

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
};

export default Index;
