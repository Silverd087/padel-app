"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  [key: string]: any; // for any other Image props
}

export default function AnimatedImage({
  src,
  alt,
  width,
  height,
  className,
  ...props
}: AnimatedImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        {...props}
      />
    </motion.div>
  );
}
