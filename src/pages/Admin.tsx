import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Menu, LogOut, LayoutDashboard, ClipboardList, 
  DollarSign, ShoppingBag, TrendingUp, Clock,
  CheckCircle, XCircle, Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatRupiah } from '@/lib/menuData';

interface Order {
  id: string;
  name: string;
  items: { name: string; price: number; quantity: number }[];
  total: number;
  status: 'pending' | 'completed';
  metode?: string;
  timestamp: string;
}

// Demo orders for showcase
const demoOrders: Order[] = [
  {
    id: 'order-1',
    name: 'Budi Santoso',
    items: [
      { name: 'Mie Kocok Bandung', price: 20000, quantity: 2 },
      { name: 'Teh Manis', price: 5000, quantity: 2 },
    ],
    total: 50000,
    status: 'completed',
    metode: 'QRIS',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: 'order-2',
    name: 'Dewi Lestari',
    items: [
      { name: 'Seblak Janda', price: 25000, quantity: 1 },
      { name: 'Thai Tea', price: 15000, quantity: 1 },
    ],
    total: 40000,
    status: 'pending',
    metode: 'Cash',
    timestamp: new Date(Date.now() - 1800000).toISOString(),
  },
  {
    id: 'order-3',
    name: 'Ahmad Rizki',
    items: [
      { name: 'Ramen Kari', price: 25000, quantity: 3 },
      { name: 'Coffee Latte', price: 10000, quantity: 3 },
    ],
    total: 105000,
    status: 'completed',
    metode: 'BCA',
    timestamp: new Date(Date.now() - 7200000).toISOString(),
  },
];

const Admin = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState<'dashboard' | 'orders'>('dashboard');
  const [orders, setOrders] = useState<Order[]>(demoOrders);

  useEffect(() => {
    const user = sessionStorage.getItem('currentUser');
    if (!user) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('currentUser');
    navigate('/login');
  };

  const handleStatusChange = (orderId: string, newStatus: 'pending' | 'completed') => {
    setOrders(prev => 
      prev.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const totalIncome = orders
    .filter(o => o.status === 'completed')
    .reduce((sum, o) => sum + o.total, 0);

  const totalSold = orders
    .filter(o => o.status === 'completed')
    .reduce((sum, o) => sum + o.items.reduce((s, i) => s + i.quantity, 0), 0);

  const pendingOrders = orders.filter(o => o.status === 'pending').length;

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-secondary z-50 flex items-center justify-between px-4 shadow-lg">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-secondary-foreground hover:bg-secondary-foreground/10"
          >
            <Menu className="w-5 h-5" />
          </Button>
          <h1 className="font-display font-bold text-primary text-lg">
            Admin Panel
          </h1>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleLogout}
          className="border-warning text-warning hover:bg-warning hover:text-warning-foreground"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </nav>

      <div className="flex pt-16">
        {/* Sidebar */}
        <motion.aside
          initial={false}
          animate={{ width: sidebarOpen ? 240 : 0, opacity: sidebarOpen ? 1 : 0 }}
          className="fixed left-0 top-16 bottom-0 bg-secondary overflow-hidden z-40"
        >
          <nav className="p-4 space-y-2">
            <button
              onClick={() => setActivePage('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activePage === 'dashboard'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-secondary-foreground hover:bg-secondary-foreground/10'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span className="font-medium">Dashboard</span>
            </button>
            <button
              onClick={() => setActivePage('orders')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activePage === 'orders'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-secondary-foreground hover:bg-secondary-foreground/10'
              }`}
            >
              <ClipboardList className="w-5 h-5" />
              <span className="font-medium">Daftar Pesanan</span>
              {pendingOrders > 0 && (
                <span className="ml-auto bg-warning text-warning-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                  {pendingOrders}
                </span>
              )}
            </button>
          </nav>
        </motion.aside>

        {/* Main Content */}
        <main 
          className="flex-1 p-6 transition-all duration-300"
          style={{ marginLeft: sidebarOpen ? 240 : 0 }}
        >
          {activePage === 'dashboard' ? (
            <DashboardContent 
              totalIncome={totalIncome}
              totalSold={totalSold}
              totalOrders={orders.length}
              pendingOrders={pendingOrders}
              recentOrders={orders.slice(0, 5)}
            />
          ) : (
            <OrdersContent 
              orders={orders}
              onStatusChange={handleStatusChange}
            />
          )}
        </main>
      </div>
    </div>
  );
};

// Dashboard Content Component
function DashboardContent({ 
  totalIncome, 
  totalSold, 
  totalOrders, 
  pendingOrders,
  recentOrders 
}: {
  totalIncome: number;
  totalSold: number;
  totalOrders: number;
  pendingOrders: number;
  recentOrders: Order[];
}) {
  const stats = [
    { label: 'Total Pemasukan', value: `Rp ${formatRupiah(totalIncome)}`, icon: DollarSign, color: 'bg-primary' },
    { label: 'Produk Terjual', value: totalSold.toString(), icon: ShoppingBag, color: 'bg-success' },
    { label: 'Total Pesanan', value: totalOrders.toString(), icon: TrendingUp, color: 'bg-accent' },
    { label: 'Pesanan Pending', value: pendingOrders.toString(), icon: Clock, color: 'bg-warning' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="font-display text-2xl font-bold text-foreground">Dashboard</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-2xl p-6 shadow-card border border-border hover-lift"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-xl font-bold text-foreground">{stat.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
        <h3 className="font-display font-semibold text-lg text-foreground mb-4">
          Pesanan Terbaru
        </h3>
        <div className="space-y-3">
          {recentOrders.map((order) => (
            <div 
              key={order.id}
              className="flex items-center justify-between p-4 bg-muted/50 rounded-xl"
            >
              <div>
                <p className="font-medium text-foreground">{order.name}</p>
                <p className="text-sm text-muted-foreground">
                  {order.items.length} item • Rp {formatRupiah(order.total)}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                order.status === 'completed'
                  ? 'bg-success/20 text-success'
                  : 'bg-warning/20 text-warning'
              }`}>
                {order.status === 'completed' ? 'Selesai' : 'Pending'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Orders Content Component
function OrdersContent({ 
  orders, 
  onStatusChange 
}: {
  orders: Order[];
  onStatusChange: (orderId: string, status: 'pending' | 'completed') => void;
}) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <div className="space-y-6">
      <h2 className="font-display text-2xl font-bold text-foreground">Daftar Pesanan</h2>

      <div className="space-y-4">
        {orders.map((order) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl p-6 shadow-card border border-border"
          >
            {/* Order Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="font-semibold text-lg text-foreground">{order.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {new Date(order.timestamp).toLocaleString('id-ID')}
                </p>
              </div>
              <span className={`px-4 py-1.5 rounded-full text-sm font-semibold border-2 border-dashed ${
                order.status === 'completed'
                  ? 'border-success text-success'
                  : 'border-warning text-warning'
              }`}>
                {order.status === 'completed' ? 'Selesai' : 'Pending'}
              </span>
            </div>

            {/* Order Details Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {/* Items */}
              <div className="bg-muted/50 rounded-xl p-4">
                <h4 className="font-medium text-foreground mb-3 text-sm">Menu Pesanan</h4>
                <ul className="space-y-2">
                  {order.items.map((item, index) => (
                    <li key={index} className="flex justify-between text-sm">
                      <span className="text-foreground">{item.name} x{item.quantity}</span>
                      <span className="text-muted-foreground">Rp {formatRupiah(item.price * item.quantity)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Info */}
              <div className="bg-muted/50 rounded-xl p-4">
                <h4 className="font-medium text-foreground mb-3 text-sm">Informasi Pembayaran</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Metode</span>
                    <span className="font-medium text-foreground">{order.metode || '-'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total</span>
                    <span className="font-bold text-primary">Rp {formatRupiah(order.total)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-2 justify-end">
              {order.status === 'pending' && (
                <Button
                  size="sm"
                  onClick={() => onStatusChange(order.id, 'completed')}
                  className="bg-success hover:bg-success/90 text-success-foreground"
                >
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Konfirmasi
                </Button>
              )}
              {order.status === 'completed' && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onStatusChange(order.id, 'pending')}
                  className="border-warning text-warning hover:bg-warning hover:text-warning-foreground"
                >
                  <XCircle className="w-4 h-4 mr-1" />
                  Batalkan
                </Button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
