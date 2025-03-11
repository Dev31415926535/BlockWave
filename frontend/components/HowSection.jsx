import { ArrowRight, Factory, Truck, Store, Shield, Clock } from 'lucide-react';
import { motion } from "framer-motion";
import { useEffect } from "react";
import { gsap } from "gsap";

const ProductJourney = () => {
  useEffect(() => {
    // GSAP Animation for arrows and blockchain records
    const timeline = gsap.timeline();

    // Animate arrows with staggered effect
    timeline.from(".arrow", { opacity: 0, y: -20, duration: 1, stagger: 0.3 });

    // Animate blockchain records
    timeline.from(".blockchain-record", {
      opacity: 0,
      x: -20,
      duration: 0.8,
      stagger: 0.4,
      delay: 1,
    });
  }, []);

  return (
    <div className="w-full bg-gray-800 p-8 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-center mb-8">Product Journey Blockchain Visualization</h3>

      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Manufacturer */}
        <motion.div
          className="flex flex-col items-center mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-blue-600 p-4 rounded-full mb-2">
            <Factory className="text-white" size={32} />
          </div>
          <p className="font-medium text-center">Manufacturer</p>
          <div className="text-xs text-center mt-2 bg-blue-500 text-white p-1 rounded w-full">
            Smart Contract Created
          </div>
        </motion.div>

        {/* Arrow */}
        <motion.div
          className="hidden md:block arrow text-blue-400 mx-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ArrowRight size={24} />
        </motion.div>

        {/* Distribution */}
        <motion.div
          className="flex flex-col items-center mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="bg-blue-600 p-4 rounded-full mb-2">
            <Truck className="text-white" size={32} />
          </div>
          <p className="font-medium text-center">Distribution</p>
          <div className="text-xs text-center mt-2 bg-blue-500 text-white p-1 rounded w-full">
            Blockchain Update
          </div>
        </motion.div>

        {/* Arrow */}
        <motion.div
          className="hidden md:block arrow text-blue-400 mx-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ArrowRight size={24} />
        </motion.div>

        {/* Retailer */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="bg-blue-600 p-4 rounded-full mb-2">
            <Store className="text-white" size={32} />
          </div>
          <p className="font-medium text-center">Retailer</p>
          <div className="text-xs text-center mt-2 bg-blue-500 text-white p-1 rounded w-full">
            Verified on Chain
          </div>
        </motion.div>
      </div>

      {/* Blockchain Layer Visualization */}
      <div className="mt-12 relative">
        <div className="h-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full relative">
          {/* Blockchain Records */}
          <motion.div
            className="absolute -top-8 left-0 blockchain-record"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-blue-700 text-white text-xs px-2 py-1 rounded">
              Production Record
            </div>
          </motion.div>
          <motion.div
            className="absolute -top-8 left-1/3 transform -translate-x-1/2 blockchain-record"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-blue-700 text-white text-xs px-2 py-1 rounded">
              Shipping Data
            </div>
          </motion.div>
          <motion.div
            className="absolute -top-8 left-2/3 transform -translate-x-1/2 blockchain-record"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-blue-700 text-white text-xs px-2 py-1 rounded">
              Quality Check
            </div>
          </motion.div>
          <motion.div
            className="absolute -top-8 right-0 blockchain-record"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-blue-700 text-white text-xs px-2 py-1 rounded">
              Retail Transfer
            </div>
          </motion.div>
        </div>
        <p className="text-center text-sm font-medium mt-6 text-gray-300">
          Secure Blockchain Ledger - Immutable Record of Each Transaction
        </p>
      </div>
    </div>
  );
};

const ProductJourneySection = () => {
  return (
    <section className="w-full py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Track Every Step of Your Product's Journey</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
        </div>
        
        {/* Main Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Real-Time Tracking */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Clock className="text-blue-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Real-Time Tracking</h3>
            </div>
            <p className="text-gray-300">
              Businesses and consumers can view real-time data about the product's location and status on the blockchain network.
            </p>
          </div>
          
          {/* Immutable Proof */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Shield className="text-blue-400 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Immutable Proof</h3>
            </div>
            <p className="text-gray-300">
              Every action (shipping, production, retail) is stored securely on the blockchain, ensuring transparency and preventing fraud.
            </p>
          </div>
        </div>
        <ProductJourney/>
        
      </div>
    </section>
  );
};

export default ProductJourneySection;
