import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import AnimatedShinyText from "./magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import Marquee from "./magicui/marquee";
import { Card } from "./ui/card";
import HeroImageDialog from "./image-dialog";

interface Props {
  title: string;
  description: string;
  win?: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
  tags?: readonly string[];
  screenshots?: readonly string[];
}

export function EventCard({
  title,
  description,
  win,
  dates,
  location,
  image,
  links,
  tags,
  screenshots,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={title} className="object-cover" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <div className="flex flex-row items-center gap-2">
          <h2 className="font-semibold leading-none">{title}</h2>

          {win && (
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-sm text-neutral transition-all ease-in hover:cursor-default hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 pl-2 pr-3"
              )}
            >
              <AnimatedShinyText className="transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                🏆{win}
              </AnimatedShinyText>
            </div>
          )}
        </div>
        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </span>
        )}
      </div>
      {screenshots && (
        <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border-none bg-transparent shadow-none">
          <Marquee pauseOnHover className="[--duration:20s]">
            {screenshots.map((screenshot) => (
              <HeroImageDialog
              className="w-[300px] h-[180px] flex-shrink-0"
              animationStyle="from-center"
              imageSrc={screenshot}
              thumbnailSrc={screenshot}
              thumbnailAlt={title}
              key={screenshot}
            />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      )}
      {tags && tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {tags?.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
