"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Artistic Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    instagram: "sarahchen_dance"
  },
  {
    name: "David Kim",
    role: "Dance Instructor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    instagram: "davidkim_dance"
  },
  // Add more team members...
];

const instructors = [
  {
    name: "Emily Wang",
    specialty: "Classical Dance",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
    instagram: "emilywang_dance"
  },
  {
    name: "Michael Zhang",
    specialty: "Hip Hop",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    instagram: "michaelzhang_dance"
  },
  // Add more instructors...
];

export default function Team() {
  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Team</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Meet the passionate individuals behind Asian Kids Dance Crew
        </p>
      </motion.div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">Core Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group">
                <div className="relative aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="text-white border-white hover:text-white"
                      onClick={() => window.open(`https://instagram.com/${member.instagram}`, '_blank')}
                    >
                      <Instagram className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <CardContent className="text-center p-4">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Our Instructors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group">
                <div className="relative aspect-square">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="text-white border-white hover:text-white"
                      onClick={() => window.open(`https://instagram.com/${instructor.instagram}`, '_blank')}
                    >
                      <Instagram className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <CardContent className="text-center p-4">
                  <h3 className="font-semibold text-lg">{instructor.name}</h3>
                  <p className="text-muted-foreground">{instructor.specialty}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}