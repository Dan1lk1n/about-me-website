"use client";

import { motion } from "framer-motion";
import { stack } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import StackCategory from "@/components/ui/StackCategory";
import DecorativeElement from "@/components/ui/DecorativeElement";

export default function Stack() {
  return (
    <motion.section
      className="relative py-[48px] px-[24px] lg:py-[80px] lg:px-[120px]"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <DecorativeElement />
      <SectionHeader
        eyebrow="// СТЕК"
        title="С LLM стек не ограничен"
        subtitle="Однако вот с чем уже успел поработать:"
      />

      <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[48px] mt-[20px] lg:mt-[24px]">
        {/* Mobile: все категории в одну колонку */}
        <div className="flex lg:hidden flex-col gap-[20px]">
          {[...stack.left, ...stack.right].map((cat) => (
            <StackCategory key={cat.label} {...cat} />
          ))}
        </div>

        {/* Desktop: две колонки */}
        <div className="hidden lg:flex flex-col gap-[24px] w-[425px]">
          {stack.left.map((cat) => (
            <StackCategory key={cat.label} {...cat} />
          ))}
        </div>
        <div className="hidden lg:flex flex-1 flex-col gap-[24px]">
          {stack.right.map((cat) => (
            <StackCategory key={cat.label} {...cat} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
