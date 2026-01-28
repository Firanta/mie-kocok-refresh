import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Wallet, QrCode, CreditCard, Upload, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatRupiah } from '@/lib/menuData';

type PaymentMethod = 'Cash' | 'QRIS' | 'BCA' | null;

interface OrderData {
  id: string;
  name: string;
  items: { name: string; price: number; quantity: number }[];
  total: number;
  status: string;
}

const paymentMethods = [
  { id: 'Cash' as PaymentMethod, label: 'Cash', icon: Wallet, color: 'bg-success' },
  { id: 'QRIS' as PaymentMethod, label: 'QRIS', icon: QrCode, color: 'bg-primary' },
  { id: 'BCA' as PaymentMethod, label: 'Debit BCA', icon: CreditCard, color: 'bg-blue-500' },
];

const Payment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const orderId = searchParams.get('id');
  
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('currentOrder');
    if (stored) {
      setOrderData(JSON.parse(stored));
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!selectedMethod) {
      toast.error('Pilih metode pembayaran dulu ya!');
      return;
    }

    if (!uploadedFile && selectedMethod !== 'Cash') {
      toast.error('Mohon upload bukti pembayaran!');
      return;
    }

    setIsLoading(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Update order with payment info
    if (orderData) {
      const updatedOrder = {
        ...orderData,
        metode: selectedMethod,
        waktuPembayaran: new Date().toISOString(),
      };
      localStorage.setItem('currentOrder', JSON.stringify(updatedOrder));
    }

    setIsLoading(false);
    navigate(`/notification?id=${orderId}`);
  };

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
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Menu</span>
        </button>

        <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
          {/* Header */}
          <div className="bg-secondary p-6 text-center">
            <h1 className="font-display text-2xl font-bold text-secondary-foreground">
              Pembayaran
            </h1>
            {orderData && (
              <p className="text-secondary-foreground/70 mt-2">
                Total: <span className="text-primary font-bold">Rp {formatRupiah(orderData.total)}</span>
              </p>
            )}
          </div>

          <div className="p-6 space-y-6">
            {/* Payment Methods */}
            <div>
              <h2 className="font-semibold text-foreground mb-4">Pilih Metode Pembayaran</h2>
              <div className="grid grid-cols-3 gap-3">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  const isSelected = selectedMethod === method.id;
                  
                  return (
                    <motion.button
                      key={method.id}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`
                        p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2
                        ${isSelected 
                          ? 'border-primary bg-primary/10' 
                          : 'border-border bg-muted/50 hover:border-primary/50'
                        }
                      `}
                    >
                      <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className={`text-sm font-medium ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                        {method.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* QRIS QR Code */}
            {selectedMethod === 'QRIS' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="flex justify-center"
              >
                <div className="bg-white p-4 rounded-xl">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxN6mJaFC1om7RYzyj0RGE_WDKse7uUDKhg&s"
                    alt="QR Code Pembayaran"
                    className="w-48 h-48 object-contain"
                  />
                </div>
              </motion.div>
            )}

            {/* BCA Virtual Account */}
            {selectedMethod === 'BCA' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center"
              >
                <p className="text-sm text-muted-foreground mb-2">Nomor Virtual Account</p>
                <p className="text-2xl font-bold text-blue-600 tracking-wider">1234567890</p>
                <p className="text-sm text-muted-foreground mt-2">a.n. MIE KOCOK BANDUNG</p>
              </motion.div>
            )}

            {/* Upload Proof */}
            {selectedMethod && selectedMethod !== 'Cash' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
              >
                <label className="block">
                  <span className="text-sm font-medium text-foreground mb-2 block">
                    Upload Bukti Pembayaran
                  </span>
                  <div className={`
                    relative border-2 border-dashed rounded-xl p-6 text-center cursor-pointer
                    transition-colors hover:border-primary/50
                    ${uploadedFile ? 'border-success bg-success/5' : 'border-border'}
                  `}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Upload className={`w-8 h-8 mx-auto mb-2 ${uploadedFile ? 'text-success' : 'text-muted-foreground'}`} />
                    <p className={`text-sm ${uploadedFile ? 'text-success' : 'text-muted-foreground'}`}>
                      {uploadedFile ? uploadedFile.name : 'Klik untuk upload gambar'}
                    </p>
                  </div>
                </label>
              </motion.div>
            )}

            {/* Cash Info */}
            {selectedMethod === 'Cash' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-warning/10 border border-warning/30 rounded-xl p-4 text-center"
              >
                <p className="text-warning font-medium">
                  Tunggu konfirmasi admin setelah bayar di kasir.
                </p>
              </motion.div>
            )}

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              disabled={!selectedMethod || isLoading}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-warm disabled:opacity-50"
            >
              {isLoading ? 'Memproses...' : 'Kirim Pembayaran'}
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Payment;
