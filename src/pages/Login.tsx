import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Eye, EyeOff, LogIn, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Email dan password harus diisi!');
      return;
    }

    setIsLoading(true);

    // Simulate login (in real app, this would be Firebase auth)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Demo credentials check
    if (email === 'admin@miekocok.com' && password === 'admin123') {
      sessionStorage.setItem('currentUser', JSON.stringify({ 
        email, 
        username: 'Admin' 
      }));
      toast.success('Login berhasil!');
      navigate('/admin');
    } else {
      toast.error('Email atau password salah!');
    }

    setIsLoading(false);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1622115837997-90c89ae689f9?q=80&w=2070&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-4xl"
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20">
          <div className="grid md:grid-cols-2">
            {/* Left Side - Branding */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                  <ChefHat className="w-8 h-8 text-primary" />
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                  Mie Kocok<br />Bandung
                </h1>
                <p className="text-white/70 text-lg">
                  Admin Panel
                </p>
                <p className="text-white/50 text-sm mt-2">
                  Kelola pesanan dan menu dengan mudah
                </p>
              </motion.div>
            </div>

            {/* Right Side - Login Form */}
            <div className="p-8 md:p-12 bg-white/5">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="font-display text-2xl font-bold text-white mb-6">
                  Masuk ke Admin
                </h2>

                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <label className="text-white/70 text-sm block mb-2">Email</label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@miekocok.com"
                      className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label className="text-white/70 text-sm block mb-2">Password</label>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-primary focus:ring-primary/20 pr-12"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-warm"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Memproses...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <LogIn className="w-5 h-5" />
                        Login
                      </span>
                    )}
                  </Button>
                </form>

                <p className="text-white/40 text-xs text-center mt-6">
                  Demo: admin@miekocok.com / admin123
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
