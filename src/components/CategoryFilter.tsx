import { motion } from 'framer-motion';
import { Utensils, Coffee, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type CategoryType = 'semua' | 'makanan' | 'minuman';

interface CategoryFilterProps {
  activeCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
}

const categories = [
  { id: 'semua' as CategoryType, label: 'Semua Menu', icon: LayoutGrid },
  { id: 'makanan' as CategoryType, label: 'Makanan', icon: Utensils },
  { id: 'minuman' as CategoryType, label: 'Minuman', icon: Coffee },
];

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => {
        const isActive = activeCategory === category.id;
        const Icon = category.icon;
        
        return (
          <motion.div
            key={category.id}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={isActive ? 'default' : 'outline'}
              onClick={() => onCategoryChange(category.id)}
              className={`
                rounded-full px-6 py-2.5 font-medium transition-all duration-300
                ${isActive 
                  ? 'bg-primary text-primary-foreground shadow-warm' 
                  : 'bg-card text-foreground hover:bg-muted border-border'
                }
              `}
            >
              <Icon className="w-4 h-4 mr-2" />
              {category.label}
            </Button>
          </motion.div>
        );
      })}
    </div>
  );
}
