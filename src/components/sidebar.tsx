"use client";

import React, { useCallback } from "react";
import { Dock } from "@/components/magicui/dock";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import BlurFade from "./magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function Sidebar() {
  const scrollToSection = useCallback((targetElement: HTMLElement) => {
    const duration = 500; // duration of animation in ms
    const start = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top + start;
    const startTime =
      "now" in window.performance ? performance.now() : new Date().getTime();

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Ease-in-out cubic function for smooth animation
      const easeInOutCubic =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, start + (targetPosition - start) * easeInOutCubic);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, []);

  const handleClick = useCallback(
    (e: { preventDefault: () => void }, href: string) => {
      e.preventDefault();
      const targetId = href.replace(/^#/, "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        scrollToSection(targetElement);
      }
    },
    [scrollToSection]
  );

  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-20 z-30 h-[320px] w-[200px] hidden lg:block">
      <BlurFade delay={BLUR_FADE_DELAY * 10}>
        <Dock className="z-50 h-full w-full flex flex-col items-start justify-start p-4 overflow-y-auto border-none rounded-lg">
          {DATA.sidebar.map((item) => (
            <button
              key={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-full justify-start text-left"
              )}
            >
              <item.icon className="size-4 mr-2" />
              {item.label}
            </button>
          ))}
        </Dock>
      </BlurFade>
    </div>
  );
}
