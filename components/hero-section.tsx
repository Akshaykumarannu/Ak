"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, LogIn } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export function HeroSection() {
  const { data: session } = useSession();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="https://player.vimeo.com/external/494252666.hd.mp4?s=2f448cf4273903cc3f7f8626133a2052d7c5b961&profile_id=175" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-block"
          >
            <span className="glass-effect px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 justify-center">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="gradient-text">New Classes Starting Soon</span>
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Unleash Your Child's
            <span className="gradient-text text-glow block mt-2">Dancing Spirit</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Where passion meets precision, and dreams take center stage
          </motion.p>
          
          <motion.div 
            className="space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 animate-gradient glow-effect"
              asChild
            >
              <Link href="/classes">
                Start Dancing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gradient-border glass-effect"
              asChild
            >
              <Link href="/about">Discover More</Link>
            </Button>
            {!session && (
              <Button
                size="lg"
                variant="ghost"
                className="glass-effect"
                asChild
              >
                <Link href="/admin/login">
                  <LogIn className="mr-2 h-4 w-4" />
                  Admin Login
                </Link>
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}