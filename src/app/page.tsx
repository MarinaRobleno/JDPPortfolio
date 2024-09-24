import AtroposContainer from "@/components/atropos-container";
import { CareerCard } from "@/components/career-card";
import { EventCard } from "@/components/event-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import PulsatingButton from "@/components/magicui/pulsating-button";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="home">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}! 🎮`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <AtroposContainer>
                <Avatar className="size-28 border rounded-full">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </AtroposContainer>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About me</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-openSans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
          <div className="mt-10 flex flex-row flex-wrap items-end gap-2 justify-center">
            <Link
              href="assets/CV-Javier-Domingo-Pacheco.pdf"
              download
              target="_blank"
            >
              {/* one single line, black background, white in dark mode, reduce font size */}
              <PulsatingButton
                duration="4s"
                pulseColor="#B4F585"
                className="text-sm px-4 py-2 bg-black dark:bg-white dark:text-black flex items-center gap-2"
              >
                📑 Download my CV
              </PulsatingButton>
            </Link>
          </div>
        </BlurFade>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="languages">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Languages</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1 cursor-default">
            {DATA.languages.map((language, id) => (
              <BlurFade
                key={language.name}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <Badge key={language.name} className="flex gap-2 h-8">
                  {language.name}
                  <Badge
                    key={language.level}
                    variant="secondary"
                    className={`py-0 text-[11px] h-3 ${language.color} font-bold`}
                  >
                    {language.level}
                  </Badge>
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1 cursor-default">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During the last years, I&apos;ve worked on a variety of
                  projects. Here are a few of my favorites.
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="relative">
            <HeroVideoDialog
              className="block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/watch?v=HGrpqS58nT0&ab_channel=KaonashiNya"
              thumbnailSrc="/render.png"
              thumbnailAlt="Render"
            />
          </div>

          {/* <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div> */}
        </div>
      </section>
      <section id="events">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Events
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Game Jams
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve participated in several Game Jams, where I developed
                  games from scratch in a short period of time with a team of
                  talented developers and designers. Here are some of the events
                  I&apos;ve attended.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.events.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <EventCard
                    title={project.title}
                    description={project.description}
                    win={project.win}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                    tags={project.tags}
                    screenshots={project.screenshots}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="careers">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Ideal Career
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Environment Artist or QA Tester
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I see two potential career areas that greatly interest me and
                  where I would love the opportunity to learn and develop my
                  skills: Environment Artist and QA Tester. Both positions are
                  excellent entry points into the video game industry.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                {DATA.careers.map((career, id) => (
                  <BlurFade
                    key={career.title}
                    delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                  >
                    <CareerCard
                      key={career.title}
                      title={career.title}
                      description={career.description}
                      icon={career.icon}
                    />
                  </BlurFade>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nevertheless, I am open to any opportunity that allows me to
                  grow and strengthen my skills in the video game industry.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Let&apos;s get in touch!
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                You can reach me at{" "}
                <Link
                  href={DATA.contact.social.Email.url}
                  className="text-blue-500 hover:underline"
                >
                  javierdomingo99@gmail.com
                </Link>{" "}
                or connect with me on{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </Link>{" "}
                or{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  {DATA.contact.social.X.name}
                </Link>
                .
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
