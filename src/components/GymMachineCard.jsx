"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function GymMachineCard({ imageSrc, title, muscles }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });

  const lineDuration = 0.6;

  return (
    <div
      ref={ref}
      className="relative w-full max-w-md mx-auto my-10 md:my-20 flex justify-center items-center"
    >
      <Image
        src={imageSrc}
        alt={title}
        width={600}
        height={400}
        className="rounded-md shadow-lg w-full object-cover grayscale-80"
      />

      <AnimatePresence>
        {isInView && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.5,
                delay: lineDuration,
                ease: "easeOut",
              }}
              className="absolute bottom-0 md:top-20  bg-stone-200/80  p-4 rounded-sm shadow-md w-full z-10 "
            >
              <p className="text-md text-stone-800 font-medium">{muscles}</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
