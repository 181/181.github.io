// src/app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <>
    <section className="py-20 text-center">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I&#39;m Dev
      </motion.h1>

      <motion.p
        className="text-lg text-gray-400 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Web developer specializing in Python, PHP, Java, JavaScript, and modern
        React/Next.js systems. 
      
      </motion.p>
    </section>
    <div className="items-center text-center">
      <Button>Contact me</Button>
    </div>
  </>    
  );
  
}