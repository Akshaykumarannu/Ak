"use client";

import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/scroll-reveal";

interface ClassVideoProps {
  video: string;
}

export function ClassVideo({ video }: ClassVideoProps) {
  return (
    <ScrollReveal animation="slide" direction="left">
      <Card className="overflow-hidden">
        <div className="relative aspect-video">
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Card>
    </ScrollReveal>
  );
}