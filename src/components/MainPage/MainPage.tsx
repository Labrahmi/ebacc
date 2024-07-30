"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    className="w-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: 0.5 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

const ContentSection: React.FC<{ title: string, subtitle: string, imageSrc: string, accordionItems: { trigger: string, content: string }[] }> = ({ title, subtitle, imageSrc, accordionItems }) => (
  <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8 w-full overflow-hidden mb-8">
    <div className="h-full w-full">
      <h1 className="font-semibold text-3xl text-gray-900">{title}</h1>
      <h2 className="text-lg font-light text-gray-700 mb-6">{subtitle}</h2>
      <Accordion type="single" collapsible>
        {accordionItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg font-medium">{item.trigger}</AccordionTrigger>
            <AccordionContent className="font-light text-zinc-700">{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    <Image
      className="rounded-2xl md:h-[20rem] w-full object-cover"
      src={imageSrc}
      width={500}
      height={500}
      alt={title}
    />
  </div>
);

const MainPage: React.FC = () => {
  const sections = [
    {
      title: "Prepare for GCSE with eBacc",
      subtitle: "Educational excellence beyond traditional courses",
      imageSrc: "/student_at_home.jpg",
      accordionItems: [
        {
          trigger: "Enhancing GCSE student success",
          content: "At eBacc, our mission is to enhance students' academic learning by complementing their initial school curriculum. We prepare students to excel in GCSE (General Certificate of Secondary Education) exams through a rigorous and well-structured program."
        },
        {
          trigger: "Learning Objectives",
          content: "We aim to provide thorough training in key subjects such as Mathematics, Sciences, English, and more, while strengthening French skills for comprehensive GCSE (General Certificate of Secondary Education) preparation."
        },
        {
          trigger: "Why Choose eBacc?",
          content: "With eBacc, students benefit from quality education supplemented by live sessions with our qualified instructors, ensuring thorough and personalized preparation for GCSE exams."
        }
      ]
    },
    {
      title: "Another Section Title",
      subtitle: "Another section subtitle",
      imageSrc: "/another_image.jpg",
      accordionItems: [
        {
          trigger: "Another Trigger 1",
          content: "Another content 1"
        },
        {
          trigger: "Another Trigger 2",
          content: "Another content 2"
        }
      ]
    },
    // Add more sections as needed
  ];

  return (
    <PageWrapper>
      <div className="container mx-auto p-8">
        {sections.map((section, index) => (
          <ContentSection
            key={index}
            title={section.title}
            subtitle={section.subtitle}
            imageSrc={section.imageSrc}
            accordionItems={section.accordionItems}
          />
        ))}
      </div>
    </PageWrapper>
  );
};

export default MainPage;
