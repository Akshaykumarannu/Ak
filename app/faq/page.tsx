"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What age groups do you teach?",
    answer: "We offer classes for children aged 5-16, with different programs tailored to specific age groups and skill levels."
  },
  {
    question: "How long are the classes?",
    answer: "Most classes are 60 minutes long, with some advanced classes extending to 90 minutes."
  },
  {
    question: "What should my child wear to class?",
    answer: "Comfortable, stretchy clothing that allows for movement. Specific dress codes vary by dance style."
  },
  {
    question: "Do you offer trial classes?",
    answer: "Yes! We offer a free trial class for new students to experience our teaching style and facilities."
  },
  // Add more FAQs...
];

export default function FAQ() {
  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Find answers to common questions about our dance programs
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
}