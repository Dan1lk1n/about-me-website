"use client";

import { motion } from "framer-motion";
import { contacts } from "@/lib/content";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactLink from "@/components/ui/ContactLink";

export default function Contacts() {
  return (
    <motion.section
      className="py-[64px] px-[24px] lg:py-[80px] lg:px-[120px] flex flex-col items-center justify-center min-h-[469px] lg:min-h-[584px] text-center"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader eyebrow="// КОНТАКТЫ" title="Связаться" />
      <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[32px] mt-8 items-center">
        {contacts.map((contact) => (
          <ContactLink key={contact.label} {...contact} />
        ))}
      </div>
    </motion.section>
  );
}
