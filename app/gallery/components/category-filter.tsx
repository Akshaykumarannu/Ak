"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Camera, Video, Users, Trophy, Sparkles } from "lucide-react";

const categories = [
  { id: "all", label: "All", icon: Sparkles },
  { id: "performance", label: "Performances", icon: Video },
  { id: "workshop", label: "Workshops", icon: Users },
  { id: "practice", label: "Practice", icon: Camera },
  { id: "competition", label: "Competitions", icon: Trophy }
];

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => {
        const Icon = category.icon;
        const isSelected = selectedCategory === category.id;
        
        return (
          <motion.div
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={isSelected ? "default" : "outline"}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "px-6 py-2 gap-2",
                isSelected && "bg-gradient-to-r from-primary via-accent to-secondary animate-gradient"
              )}
            >
              <Icon className="w-4 h-4" />
              {category.label}
            </Button>
          </motion.div>
        );
      })}
    </div>
  );
}