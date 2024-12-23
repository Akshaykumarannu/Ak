"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const blogPosts = [
  {
    title: "5 Benefits of Dance for Child Development",
    excerpt: "Discover how dance classes can boost your child's physical and mental growth...",
    date: "March 15, 2024",
    category: "Child Development",
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80"
  },
  {
    title: "Behind the Scenes: Summer Showcase Preparation",
    excerpt: "Get a glimpse of what goes into preparing for our annual summer dance showcase...",
    date: "March 10, 2024",
    category: "Events",
    image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?auto=format&fit=crop&q=80"
  },
  {
    title: "The Rise of K-Pop Dance in Youth Culture",
    excerpt: "Exploring the growing influence of K-Pop dance among young dancers...",
    date: "March 5, 2024",
    category: "Dance Trends",
    image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&q=80"
  }
];

export default function Blog() {
  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Dance Blog</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Stay updated with the latest news, tips, and stories from our dance community
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}