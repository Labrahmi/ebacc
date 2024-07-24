'use client';

import { motion, AnimatePresence } from 'framer-motion'
import React, { ReactNode } from 'react'

interface PageWrapperProps {
    children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <AnimatePresence >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}