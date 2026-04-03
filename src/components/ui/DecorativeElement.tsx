"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function DecorativeElement() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div
      ref={ref}
      className="absolute hidden xl:block pointer-events-none -z-10"
      style={{
        top: "-4vw",
        right: "-4.79vw",
        width: "58.61vw",
        height: "46.67vw",
      }}
    >
      <motion.div style={{ y }} className="w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src="/decorative.png"
            fill
            className="object-cover"
            alt=""
            aria-hidden="true"
          />
        </div>
      </motion.div>
    </div>
  );
}
