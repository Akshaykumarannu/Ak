"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { classes } from "./data";
import { ClassVideo } from "./components/class-video";
import { ClassDetails } from "./components/class-details";

export default function Classes() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="relative h-[60vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-silhouette-of-a-woman-dancing-in-front-of-sunset-40940-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <ScrollReveal className="absolute inset-0 flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Classes</h1>
            <p className="text-xl max-w-3xl mx-auto px-4">
              Discover your passion through our diverse range of artistic programs
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="container py-20 px-4">
        <Tabs defaultValue={classes[0].id} className="space-y-8">
          <ScrollReveal>
            <TabsList className="flex flex-wrap justify-center gap-2">
              {classes.map((classItem) => (
                <TabsTrigger
                  key={classItem.id}
                  value={classItem.id}
                  className="px-6 py-2"
                >
                  {classItem.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </ScrollReveal>

          {classes.map((classItem) => (
            <TabsContent key={classItem.id} value={classItem.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ClassVideo video={classItem.video} />
                <ClassDetails classItem={classItem} />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}