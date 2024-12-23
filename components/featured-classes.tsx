"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "./enquiry-dialog";

const classes = [
  {
    title: "Classical Dance",
    age: "5-15",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1516475429286-465d815a0df7?auto=format&fit=crop&q=80",
    description: "Learn the grace and beauty of traditional classical dance forms."
  },
  {
    title: "Contemporary",
    age: "8-15",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&q=80",
    description: "Express yourself through fluid, modern dance movements."
  },
  {
    title: "Hip Hop Foundations",
    age: "7-15",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&q=80",
    description: "Master the fundamentals of hip hop and urban dance styles."
  },
  {
    title: "Zumba",
    age: "6-15",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80",
    description: "Fun, energetic dance fitness program for all skill levels."
  },
  {
    title: "Western Dance",
    age: "7-15",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?auto=format&fit=crop&q=80",
    description: "Learn popular western dance styles and techniques."
  },
  {
    title: "Drawing & Art",
    age: "4-15",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80",
    description: "Express creativity through various art forms and techniques."
  },
  {
    title: "Instrumental Music",
    age: "6-15",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80",
    description: "Learn to play various musical instruments with expert guidance."
  }
];

export function FeaturedClasses() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentPage, setCurrentPage] = useState(0);
  const classesPerPage = 3;
  const totalPages = Math.ceil(classes.length / classesPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalPages]);

  const currentClasses = classes.slice(
    currentPage * classesPerPage,
    (currentPage + 1) * classesPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Classes</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of artistic programs for young talents
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentClasses.map((classItem, index) => (
              <motion.div
                key={`${currentPage}-${index}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={classItem.image}
                      alt={classItem.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                      <span>{classItem.title}</span>
                      <div className="space-x-2">
                        <Badge variant="secondary">{classItem.age}</Badge>
                        <Badge>{classItem.level}</Badge>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{classItem.description}</p>
                    <EnquiryDialog 
                      classTitle={classItem.title}
                      className="w-full"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 hidden md:flex"
            onClick={prevPage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 hidden md:flex"
            onClick={nextPage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                currentPage === index ? "bg-primary w-4" : "bg-primary/30"
              }`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}