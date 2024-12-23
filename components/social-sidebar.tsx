"use client";

import { motion } from "framer-motion";
import { Instagram, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SocialSidebar() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden md:block"
    >
      <div className="flex flex-col gap-2 bg-background/80 backdrop-blur-sm p-2 rounded-r-lg shadow-lg">
        <Button
          size="icon"
          variant="ghost"
          className="text-pink-500 hover:text-pink-600 hover:bg-pink-100 dark:hover:bg-pink-900/20"
          onClick={() => window.open('https://www.instagram.com/asiankids_dancecrew_official/', '_blank')}
        >
          <Instagram className="h-5 w-5" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="text-green-500 hover:text-green-600 hover:bg-green-100 dark:hover:bg-green-900/20"
          onClick={() => window.open('https://wa.me/918138865559', '_blank')}
        >
          <MessageCircle className="h-5 w-5" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="text-blue-500 hover:text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20"
          onClick={() => window.open('tel:+918138865559')}
        >
          <Phone className="h-5 w-5" />
        </Button>
      </div>
    </motion.div>
  );
}