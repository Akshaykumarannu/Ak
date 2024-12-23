"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Users, Star, Award } from "lucide-react";
import { useState, useEffect } from "react";

const achievements = [
  {
    icon: Trophy,
    number: 2000,
    suffix: "+",
    title: "Live Shows",
    description: "Mesmerizing performances worldwide"
  },
  {
    icon: Users,
    number: 1000,
    suffix: "+",
    title: "Students Trained",
    description: "Building confidence through dance"
  },
  {
    icon: Star,
    number: 15,
    suffix: "+",
    title: "Years of Excellence",
    description: "Dedicated to dance education"
  },
  {
    icon: Award,
    number: 100,
    suffix: "%",
    title: "Parent Satisfaction",
    description: "Trusted by families"
  }
];

const Counter = ({ target, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * target));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    if (inView) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, target, duration]);

  return (
    <div ref={ref} className="text-4xl font-bold mb-2">
      {count}
      {suffix}
    </div>
  );
};

export function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-pink-500/10 to-violet-500/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Achievements</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Celebrating excellence in dance education and performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-all"
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <Counter target={item.number} suffix={item.suffix} />
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}