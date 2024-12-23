"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const tourSpots = [
  {
    title: "Main Dance Studio",
    description: "Our spacious main studio features professional flooring, mirrors, and sound system.",
    image: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&q=80"
  },
  {
    title: "Practice Rooms",
    description: "Multiple practice rooms for individual or small group rehearsals.",
    image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80"
  },
  {
    title: "Performance Hall",
    description: "State-of-the-art performance space for recitals and showcases.",
    image: "https://images.unsplash.com/photo-1519925610903-381054cc2a1c?auto=format&fit=crop&q=80"
  }
];

export default function VirtualTour() {
  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Virtual Tour</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore our state-of-the-art dance facilities from anywhere
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tourSpots.map((spot, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="overflow-hidden">
              <div className="relative aspect-video group cursor-pointer">
                <img
                  src={spot.image}
                  alt={spot.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="icon" variant="outline" className="rounded-full">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{spot.title}</h3>
                <p className="text-muted-foreground">{spot.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}