'use client';

import React, { useState, useEffect } from 'react';
import WhatSection from '@/components/WhatSection';
import GamePieces from '@/components/GamePieces';
import UpcomingChanges from '@/components/UpcomingChanges';
import GameModes from '@/components/GameModes';
import LoadingSpinner from '@/components/LoadingSpinner';
import { motion } from 'framer-motion';

// this page needs to be responsive for all
const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    // Simulate loading content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Rotate through sections automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 4);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <LoadingSpinner size="lg" text="Loading dashboard..." />;
  }

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full scrollable overflow-x-hidden"
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-10 px-4 md:px-20 lg:px-32 py-10 md:py-20">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <WhatSection isActive={activeSection === 0} />
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <GamePieces isActive={activeSection === 1} />
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <UpcomingChanges isActive={activeSection === 2} />
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <GameModes isActive={activeSection === 3} />
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Page;
