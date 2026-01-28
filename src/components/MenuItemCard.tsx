import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { MenuItem, formatRupiah } from '@/lib/menuData';
import { Button } from '@/components/ui/button';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
  index: number;
}

export function MenuItemCard({ item, onAddToCart, index }: MenuItemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift border border-border/50"
    >
      {/* Image Container */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium ${
          item.category === 'makanan' 
            ? 'bg-primary/90 text-primary-foreground' 
            : 'bg-accent/90 text-accent-foreground'
        }`}>
          {item.category === 'makanan' ? '🍜 Makanan' : '🥤 Minuman'}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display font-semibold text-base sm:text-lg text-foreground mb-1 line-clamp-1">
          {item.name}
        </h3>
        
        <div className="flex items-center justify-between mt-3">
          <p className="text-primary font-bold text-lg">
            Rp {formatRupiah(item.price)}
          </p>
          
          <Button
            size="sm"
            onClick={() => onAddToCart(item)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 shadow-warm hover:shadow-lg transition-all duration-300"
          >
            <Plus className="w-4 h-4 mr-1" />
            Tambah
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
