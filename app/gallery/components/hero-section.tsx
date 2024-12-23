"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Camera } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative h-[60vh] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-silhouette-of-a-woman-dancing-in-front-of-sunset-40940-large.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <ScrollReveal className="absolute inset-0 flex items-center justify-center text-center">
        <div className="text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Badge className="px-6 py-2 text-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20">
              <Camera className="w-5 h-5 mr-2" />
              Our Moments
            </Badge>
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            Gallery & <span className="text-primary">Performances</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto px-4 text-white/80">
            Experience the artistry, passion, and dedication of our dancers through captivating moments
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}