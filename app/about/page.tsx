"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      <div className="relative h-[60vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/494252666.hd.mp4?s=2f448cf4273903cc3f7f8626133a2052d7c5b961&profile_id=175" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">A Space For Your Dreams</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Where passion meets excellence in dance and performing arts
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Card className="h-full overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&q=80"
                  alt="Dance Studio"
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <CardContent className="relative p-6">
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground">
                  Asian Kids is a dance studio in Uduma & Kanhangad (KASARAGOD), is a highly professional 
                  and dynamic dancing community started by a group of passionate and creative young people. 
                  These young spirits all have the passion for dance burned into their every DNA, and Asian 
                  Kids is the culmination of years of their hard work, dedication, and pain.
                </p>
                <p className="text-muted-foreground mt-4">
                  This is the dream destination for anyone who is looking to learn under expert guidance, 
                  inspire each other and grow altogether as one big community.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Card className="h-full overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80"
                  alt="Vision"
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <CardContent className="relative p-6">
                <h2 className="text-2xl font-bold mb-4">Our Vision & Mission</h2>
                <p className="text-muted-foreground mb-6">
                  Our team of experienced and passionate instructors are dedicated to helping each student 
                  reach their full potential. They bring a wealth of knowledge and a love of dance to every class.
                </p>
                <p className="text-muted-foreground">
                  Our mission is to promote physical fitness, creativity, and self-expression through dance. 
                  We believe that dance can have a profound impact on a child's development, fostering 
                  confidence, discipline, and teamwork.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Card className="overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?auto=format&fit=crop&q=80"
                alt="History"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            <CardContent className="relative p-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Our History</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Founded in 2000, Asian Kids Dance Crew has quickly become a beloved part of the community. 
                We have helped hundreds of children discover the joy of dance and look forward to continuing 
                to inspire future generations.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  );
}