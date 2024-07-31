'use client';

import { motion, AnimatePresence } from "framer-motion";
import React, { ReactNode } from "react";

const PageWrapper: React.FC<{ children: ReactNode }> = ({ children }) => (
  <AnimatePresence>
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

export default PageWrapper;
