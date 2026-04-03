"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section>
      {/* === Мобайл === */}
      <div className="lg:hidden flex flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/photo.png"
            width={390}
            height={400}
            className="w-full h-[400px] object-cover"
            alt="Данил"
            priority
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-[24px] py-[40px] px-[24px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <span className="font-primary text-[14px] font-medium text-primary tracking-[2px] uppercase">
            {hero.eyebrow}
          </span>
          <h1 className="font-primary text-[48px] font-bold text-foreground leading-[1.1]">
            {hero.name}
          </h1>
          <h2 className="font-primary text-[28px] font-light text-muted-foreground leading-[1.1]">
            {hero.role}
          </h2>
          <p className="font-secondary text-[16px] text-muted-foreground leading-[1.7]">
            {hero.subtitle}
          </p>
          <div className="flex flex-col gap-[12px]">
            <a
              href={hero.telegramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-primary text-primary-foreground rounded-[999px] px-8 py-4 font-primary font-bold text-[16px] hover:opacity-90 transition-opacity"
            >
              Написать в Telegram
            </a>
            <a
              href={hero.githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center font-primary text-[16px] text-foreground hover:text-primary transition-colors py-4"
            >
              GitHub сайта →
            </a>
          </div>
        </motion.div>
      </div>

      {/* === Десктоп === */}
      <div className="hidden lg:flex flex-row items-center py-[80px] px-[120px] gap-[80px]">
        <motion.div
          className="flex-1 flex flex-col gap-8"
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-primary text-[14px] font-medium text-primary tracking-[2px] uppercase">
            {hero.eyebrow}
          </span>
          <h1 className="font-primary text-[72px] font-bold text-foreground leading-[1.1]">
            {hero.name}
          </h1>
          <h2 className="font-primary text-[48px] font-light text-muted-foreground leading-[1.1]">
            {hero.role}
          </h2>
          <p className="font-secondary text-[18px] text-muted-foreground leading-[1.7]">
            {hero.subtitle}
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href={hero.telegramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground rounded-[999px] px-8 py-4 font-primary font-bold text-[16px] hover:opacity-90 transition-opacity"
            >
              Написать в Telegram
            </a>
            <a
              href={hero.githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-primary text-[16px] text-foreground hover:text-primary transition-colors flex items-center"
            >
              GitHub сайта →
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <Image
            src="/photo.png"
            width={480}
            height={560}
            className="rounded-[16px] object-cover w-[480px] h-[560px]"
            alt="Данил"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
