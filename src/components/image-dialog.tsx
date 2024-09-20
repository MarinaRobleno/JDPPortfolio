"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";

interface HeroImageProps {
  animationStyle?: AnimationStyle;
  imageSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
};

export default function HeroImageDialog({
  animationStyle = "from-center",
  imageSrc,
  thumbnailSrc,
  thumbnailAlt = "Image thumbnail",
  className,
}: HeroImageProps) {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const selectedAnimation = animationVariants[animationStyle];
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setModalRoot(document.body);
  }, []);

  return (
    <>
      <div
        className={cn("cursor-pointer group", className)}
        onClick={() => setIsImageOpen(true)}
      >
        <img
          src={thumbnailSrc}
          alt={thumbnailAlt}
          className="w-full h-full object-cover transition-all duration-200 group-hover:brightness-[0.8] ease-out rounded-md shadow-none border"
        />
      </div>
      {modalRoot &&
        createPortal(
          <AnimatePresence>
            {isImageOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
                onClick={() => setIsImageOpen(false)}
              >
                <motion.div
                  {...selectedAnimation}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  className="relative w-full max-w-4xl mx-4 md:mx-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.button
                    className="absolute -top-16 right-0 text-white text-xl bg-neutral-900/50 ring-1 backdrop-blur-md rounded-full p-2 dark:bg-neutral-100/50 dark:text-black"
                    onClick={() => setIsImageOpen(false)}
                  >
                    <XIcon className="size-5" />
                  </motion.button>
                  <div className="border-2 border-white rounded-2xl overflow-hidden isolate z-[1] relative">
                    <img
                      src={imageSrc}
                      alt="Full size image"
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          modalRoot
        )}
    </>
  );
}
