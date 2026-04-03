"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section className="py-[48px] px-[24px] lg:py-[80px] lg:px-[120px]">
      <SectionHeader
        eyebrow="// ПРОЕКТЫ"
        title="Проекты"
        subtitle="Всё это реализовано с помощью LLM — почти никакого рукоприкладства"
      />

      <div className="flex flex-col gap-[16px] mt-[20px] lg:mt-[24px]">
        {/* Mobile: все карточки в одну колонку */}
        <div className="flex lg:hidden flex-col gap-[16px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="w-full"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* Desktop: два ряда по 2 карточки */}
        <div className="hidden lg:flex flex-col gap-[16px]">
          <div className="flex gap-[16px]">
            {projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.name}
                className="flex-1"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
          <div className="flex gap-[16px]">
            {projects.slice(2, 4).map((project, index) => (
              <motion.div
                key={project.name}
                className="flex-1"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
