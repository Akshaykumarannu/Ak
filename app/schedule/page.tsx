"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const schedule = {
  monday: [
    { time: "3:00 PM", class: "Hip Hop Beginners", age: "7-9", instructor: "Mike Lee" },
    { time: "4:30 PM", class: "K-Pop Level 1", age: "10-12", instructor: "Jenny Kim" },
    { time: "6:00 PM", class: "Contemporary", age: "12-15", instructor: "Sarah Chen" },
  ],
  tuesday: [
    { time: "3:30 PM", class: "Ballet Foundations", age: "7-9", instructor: "Lisa Wang" },
    { time: "5:00 PM", class: "Hip Hop Advanced", age: "13-16", instructor: "Mike Lee" },
    { time: "6:30 PM", class: "K-Pop Level 2", age: "12-15", instructor: "Jenny Kim" },
  ],
  // Add more days...
};

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState("monday");

  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Class Schedule</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Find the perfect class for your child's dance journey
        </p>
      </motion.div>

      <Tabs defaultValue="monday" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="monday">Mon</TabsTrigger>
          <TabsTrigger value="tuesday">Tue</TabsTrigger>
          <TabsTrigger value="wednesday">Wed</TabsTrigger>
          <TabsTrigger value="thursday">Thu</TabsTrigger>
          <TabsTrigger value="friday">Fri</TabsTrigger>
        </TabsList>
        {Object.entries(schedule).map(([day, classes]) => (
          <TabsContent key={day} value={day}>
            <div className="space-y-4">
              {classes.map((classItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="flex items-center justify-between p-6">
                      <div>
                        <p className="font-semibold text-xl">{classItem.class}</p>
                        <p className="text-muted-foreground">Age: {classItem.age}</p>
                        <p className="text-muted-foreground">Instructor: {classItem.instructor}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-medium">{classItem.time}</p>
                        <Button size="sm" className="mt-2">Book Class</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}