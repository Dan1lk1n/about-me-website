"use client";

import { motion } from "framer-motion";
import { about, tools } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import ToolCard from "@/components/ui/ToolCard";

export default function About() {
  return (
    <motion.section
      className="py-[48px] px-[24px] lg:p-[64px] flex flex-col lg:flex-row items-start lg:items-center gap-[40px] lg:gap-[80px]"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Левая колонка: текст */}
      <div className="flex-1 flex flex-col gap-[24px]">
        <span className="font-primary text-[14px] font-medium text-primary tracking-[2px] uppercase">
          {about.eyebrow}
        </span>
        <h2 className="font-primary text-[32px] lg:text-[48px] font-bold text-foreground leading-[1.1]">
          {about.title}
        </h2>
        <div className="flex flex-col gap-[16px]">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="font-secondary text-[18px] text-muted-foreground leading-[1.7]">
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* Правая колонка: инструменты */}
      <div className="flex-1 flex flex-col gap-[12px]">
        <span className="font-primary text-[14px] font-medium text-primary tracking-[2px] uppercase">
          {about.toolsEyebrow}
        </span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[12px]">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="h-full"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ToolCard {...tool} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
