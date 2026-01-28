import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-24 h-24 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center"
        >
          <AlertCircle className="w-12 h-12 text-primary" />
        </motion.div>

        <h1 className="font-display text-6xl font-bold text-foreground mb-4">
          404
        </h1>
        <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Maaf, halaman yang kamu cari tidak ada. Mungkin sudah dipindah atau dihapus.
        </p>

        <Link to="/">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-warm">
            <Home className="w-4 h-4 mr-2" />
            Kembali ke Menu
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
