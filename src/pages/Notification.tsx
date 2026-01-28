import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Printer, ArrowLeft, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatRupiah } from '@/lib/menuData';

interface OrderData {
  id: string;
  name: string;
  items: { name: string; price: number; quantity: number }[];
  total: number;
  status: string;
  metode?: string;
}

const Notification = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const orderId = searchParams.get('id');
  
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [status, setStatus] = useState<'pending' | 'completed'>('pending');

  useEffect(() => {
    const stored = localStorage.getItem('currentOrder');
    if (stored) {
      const data = JSON.parse(stored);
      setOrderData(data);
      
      // Simulate status update after 5 seconds for demo
      setTimeout(() => {
        setStatus('completed');
      }, 5000);
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (!orderData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Order tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors print:hidden"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Menu</span>
        </button>

        <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden relative">
          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="absolute top-4 right-4 w-10 h-10 bg-success hover:bg-success/90 text-success-foreground rounded-full flex items-center justify-center transition-colors print:hidden"
          >
            <Printer className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="bg-secondary p-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center"
            >
              <UtensilsCrossed className="w-8 h-8 text-primary" />
            </motion.div>
            <h1 className="font-display text-2xl font-bold text-secondary-foreground">
              Struk Belanja
            </h1>
            <p className="text-secondary-foreground/70 text-sm mt-1">
              Mie Kocok Bandung
            </p>
          </div>

          <div className="p-6 space-y-4">
            {/* Customer Info */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Nama</span>
                <span className="font-medium text-foreground">{orderData.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Metode Pembayaran</span>
                <span className="font-medium text-foreground">{orderData.metode || '-'}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-border" />

            {/* Order Items */}
            <div className="space-y-2">
              {orderData.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-between items-center py-2 px-3 bg-muted/50 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-foreground text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">x{item.quantity}</p>
                  </div>
                  <p className="font-medium text-foreground text-sm">
                    Rp {formatRupiah(item.price * item.quantity)}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-border" />

            {/* Total */}
            <div className="bg-primary/10 border-2 border-primary rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">Total Pembayaran</p>
              <p className="text-2xl font-bold text-primary">
                Rp {formatRupiah(orderData.total)}
              </p>
            </div>

            {/* Status */}
            <motion.div
              key={status}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`
                flex items-center justify-center gap-2 p-4 rounded-xl text-center
                ${status === 'completed' 
                  ? 'bg-success/10 text-success' 
                  : 'bg-warning/10 text-warning'
                }
              `}
            >
              {status === 'completed' ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Pembayaran diterima, pesanan sedang diproses.</span>
                </>
              ) : (
                <>
                  <Clock className="w-5 h-5 animate-pulse" />
                  <span className="font-medium">Pembayaran sedang dicek, mohon tunggu konfirmasi admin.</span>
                </>
              )}
            </motion.div>

            {/* Back to Menu Button */}
            {status === 'completed' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="print:hidden"
              >
                <Button
                  onClick={() => navigate('/')}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-warm"
                >
                  🍜 Kembali ke Menu
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Notification;
