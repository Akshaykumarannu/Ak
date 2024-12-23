"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Play, Expand, Image as ImageIcon, Calendar } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useState } from "react";

interface MediaItem {
  type: "video" | "image";
  url: string;
  thumbnail?: string;
  title: string;
  category: string;
  date?: string;
}

interface MediaGridProps {
  items: MediaItem[];
}

export function MediaGrid({ items }: MediaGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence>
        {items.map((item, index) => (
          <ScrollReveal
            key={index}
            animation="slide"
            direction="up"
            delay={index * 0.1}
          >
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="overflow-hidden group hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/20 transition-all duration-500">
                <CardContent className="p-0 relative aspect-video">
                  {item.type === "video" ? (
                    <>
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="icon"
                            className="absolute inset-0 m-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm w-16 h-16 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                          >
                            <Play className="h-8 w-8 text-white" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl p-0">
                          <video controls className="w-full aspect-video">
                            <source src={item.url} type="video/mp4" />
                          </video>
                        </DialogContent>
                      </Dialog>
                    </>
                  ) : (
                    <>
                      <img
                        src={item.url}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="icon"
                            className="absolute inset-0 m-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm w-16 h-16 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                          >
                            <Expand className="h-8 w-8 text-white" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl p-0">
                          <img src={item.url} alt={item.title} className="w-full" />
                        </DialogContent>
                      </Dialog>
                    </>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-white/20 hover:bg-white/30 text-white">
                          {item.type === "video" ? (
                            <Play className="h-3 w-3 mr-1" />
                          ) : (
                            <ImageIcon className="h-3 w-3 mr-1" />
                          )}
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-white/70">
                          <Calendar className="h-3 w-3" />
                          <span>{item.date || "2024"}</span>
                        </div>
                      </div>
                      <p className="text-white font-medium text-lg line-clamp-2">{item.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollReveal>
        ))}
      </AnimatePresence>
    </div>
  );
}