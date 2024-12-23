"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Star, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { cn } from "@/lib/utils";

const coreTeam = [
  {
    name: "Sarah Chen",
    role: "Artistic Director",
    experience: "15+ years",
    achievements: ["International Dance Champion", "Certified Instructor"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    instagram: "sarahchen_dance",
    specialty: "Contemporary"
  },
  {
    name: "David Kim",
    role: "Dance Director",
    experience: "12+ years",
    achievements: ["Award-winning Choreographer", "Master Trainer"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    instagram: "davidkim_dance",
    specialty: "Hip Hop"
  },
  // Add 6 more core team members with similar structure
];

const instructors = [
  {
    name: "Emily Wang",
    specialty: "Classical Dance",
    experience: "8+ years",
    certifications: ["ISTD Certified", "RAD Certified"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
    instagram: "emilywang_dance",
    classes: ["Ballet", "Contemporary"]
  },
  {
    name: "Michael Zhang",
    specialty: "Hip Hop",
    experience: "10+ years",
    certifications: ["Street Dance Certified", "Breaking Champion"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    instagram: "michaelzhang_dance",
    classes: ["Hip Hop", "Breaking"]
  },
  // Add 18 more instructors with similar structure
];

const stats = [
  { icon: Star, value: "20+", label: "Years Combined Experience" },
  { icon: Award, value: "50+", label: "Dance Awards" },
  { icon: Users, value: "1000+", label: "Students Trained" }
];

export default function Team() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [hoveredMember, setHoveredMember] = useState(null);

  const filters = ["all", "contemporary", "hip hop", "classical", "jazz"];

  const filteredInstructors = selectedFilter === "all" 
    ? instructors 
    : instructors.filter(i => i.specialty.toLowerCase().includes(selectedFilter));

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="relative h-[50vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/494252666.hd.mp4?s=2f448cf4273903cc3f7f8626133a2052d7c5b961&profile_id=175" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-background/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <Badge className="mb-4 text-lg px-4 py-1">Our Team</Badge>
            <h1 className="text-4xl md:text-7xl font-bold mb-4 gradient-text">Meet Our Experts</h1>
            <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
              Passionate professionals dedicated to nurturing young talent
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Core Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden group h-full">
                  <div className="relative aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {member.achievements.map((achievement, i) => (
                            <Badge key={i} variant="secondary" className="bg-white/20">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full text-white border-white hover:bg-white hover:text-black"
                          onClick={() => window.open(`https://instagram.com/${member.instagram}`, '_blank')}
                        >
                          <Instagram className="h-4 w-4 mr-2" />
                          Follow on Instagram
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="text-center p-6">
                    <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.experience} Experience</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Our Instructors</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={selectedFilter === filter ? "default" : "outline"}
                  onClick={() => setSelectedFilter(filter)}
                  className="capitalize"
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredInstructors.map((instructor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredMember(index)}
                onHoverEnd={() => setHoveredMember(null)}
              >
                <Card className={cn(
                  "overflow-hidden group h-full transition-shadow duration-300",
                  hoveredMember === index && "shadow-2xl shadow-primary/20"
                )}>
                  <div className="relative aspect-square">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {instructor.certifications.map((cert, i) => (
                            <Badge key={i} variant="secondary" className="bg-white/20">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {instructor.classes.map((className, i) => (
                            <Badge key={i} className="bg-primary/80">
                              {className}
                            </Badge>
                          ))}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full text-white border-white hover:bg-white hover:text-black"
                          onClick={() => window.open(`https://instagram.com/${instructor.instagram}`, '_blank')}
                        >
                          <Instagram className="h-4 w-4 mr-2" />
                          Follow on Instagram
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="text-center p-6">
                    <h3 className="font-semibold text-xl mb-1">{instructor.name}</h3>
                    <p className="text-primary font-medium mb-2">{instructor.specialty}</p>
                    <p className="text-muted-foreground text-sm">{instructor.experience} Experience</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}