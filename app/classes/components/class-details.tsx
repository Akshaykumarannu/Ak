"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Calendar } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { EnquiryDialog } from "@/components/enquiry-dialog";

interface ClassDetailsProps {
  classItem: {
    title: string;
    category: string;
    description: string;
    ageGroups: string[];
    schedule: string;
    instructor: string;
    features: string[];
    benefits: string[];
  };
}

export function ClassDetails({ classItem }: ClassDetailsProps) {
  return (
    <ScrollReveal animation="slide" direction="right" delay={0.2}>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <CardTitle className="text-3xl">{classItem.title}</CardTitle>
            <Badge variant="secondary">{classItem.category}</Badge>
          </div>
          <p className="text-muted-foreground">{classItem.description}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Age Groups</h3>
            <div className="flex flex-wrap gap-2">
              {classItem.ageGroups.map((age) => (
                <Badge key={age} variant="outline">{age}</Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Schedule</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{classItem.schedule}</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Instructor</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{classItem.instructor}</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {classItem.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Benefits</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {classItem.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <EnquiryDialog
            classTitle={classItem.title}
            className="w-full mt-4"
          />
        </CardContent>
      </Card>
    </ScrollReveal>
  );
}