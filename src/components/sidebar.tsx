import React from "react";
import { Dock } from "@/components/magicui/dock";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import BlurFade from "./magicui/blur-fade";
import { Icon, User } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Sidebar() {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-20 z-30 h-[320px] w-[200px] hidden lg:block">
      <BlurFade delay={BLUR_FADE_DELAY * 10}>
        <Dock className="z-50 h-full w-full flex flex-col items-start justify-start p-4 overflow-y-auto border-none rounded-lg">
          {DATA.sidebar.map((item) => (
            <Link
              key={item.href} // Add a key for each item to avoid React warnings
              href={item.href}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-full justify-start text-left"
              )}
            >
              <item.icon className="size-4 mr-2" />
              {item.label}
            </Link>
          ))}
        </Dock>
      </BlurFade>
    </div>
  );
}
