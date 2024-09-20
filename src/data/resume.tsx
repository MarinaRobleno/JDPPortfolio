import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Javier Domingo Pacheco",
  initials: "JDP",
  url: "https://www.linkedin.com/in/javier-domingo-pacheco-3171b7208/",
  location: "Madrid, Spain",
  locationLink: "https://www.google.com/maps/place/madrid",
  description:
    "Expert Technical Artist. Video Game Creation and Narration. 3D Animation for Video Games and Interactive Environments.",
  summary:
    "Since I was a child, I have been fascinated by the stories and adventures that the world of video games has offered me. So much so that, at a certain point, I decided to take a step forward and become a part of what excited me so much, in order to convey and share feelings and emotions with other gaming enthusiasts like myself. \n On a personal level, I consider myself a perfectionist, perseverant, and creative person. I am also very accustomed to working in teams, taking on responsibilities, and facing new challenges.",
  avatarUrl: "/me.png",
  skills: [
    "Substance",
    "Maya",
    "Zbrush",
    "Unity",
    "Unreal Engine",
    "Photoshop",
    "After Effects",
    "Premiere",
    "3D Design",
    "3D Animation",
    "3D Modeling",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  sidebar: [
    { name: "home", label: "Home", href: "#home", icon: Icons.home },
    { name: "about", label: "About", href: "#about", icon: Icons.user },
    {
      name: "education",
      label: "Education",
      href: "#education",
      icon: Icons.education,
    },
    { name: "skills", label: "Skills", href: "#skills", icon: Icons.skills },
    {
      name: "projects",
      label: "My Projects",
      href: "#projects",
      icon: Icons.projects,
    },
    { name: "events", label: "Events", href: "#events", icon: Icons.events },
    {
      name: "careers",
      label: "Ideal Career",
      href: "#careers",
      icon: Icons.career,
    },
    {
      name: "contact",
      label: "Contact",
      href: "#contact",
      icon: Icons.email,
    },
  ],
  contact: {
    email: "javierdomingo99@gmail.com",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/javier-domingo-pacheco-3171b7208/",
        icon: Icons.linkedin,
        blank: true,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/MrBerguen",
        icon: Icons.x,
        blank: true,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:javierdomingo99@gmail.com",
        icon: Icons.email,
        blank: true,
        navbar: true,
      },
      CV: {
        name: "Download CV",
        url: "assets/CV-Javier-Domingo-Pacheco.pdf",
        icon: Icons.file,
        blank: true,
        navbar: true,
      },
    },
  },

  work: [
    // {
    //   company: "Atomic Finance",
    //   href: "https://atomic.finance",
    //   badges: [],
    //   location: "Remote",
    //   title: "Bitcoin Protocol Engineer",
    //   logoUrl: "/atomic.png",
    //   start: "May 2021",
    //   end: "Oct 2022",
    //   description:
    //     "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    // },
    // {
    //   company: "Shopify",
    //   badges: [],
    //   href: "https://shopify.com",
    //   location: "Remote",
    //   title: "Software Engineer",
    //   logoUrl: "/shopify.svg",
    //   start: "January 2021",
    //   end: "April 2021",
    //   description:
    //     "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    // },
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, Spain",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, Spain",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "Madrid, Spain",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Universidad Francisco de Vitoria",
      href: "https://www.ufv.es/",
      degree: "Creation and Narration of Video Games. Expert Technical Artist",
      logoUrl: "/ufv.jpeg",
      start: "2020",
      end: "2024",
    },
    {
      school: "Universidad Francisco de Vitoria",
      href: "https://www.ufv.es/",
      degree: "3D Animation for Video Games and Interactive Environments",
      logoUrl: "/ufv.jpeg",
      start: "2018",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
  events: [
    {
      title: "Game Jam 2022 - One More Day",
      dates: "2022",
      location: "Universidad Francisco de Vitoria, Madrid, Spain",
      description:
        "When your job place seems to be the same everyday, your mind decides to join it's own adventure fighting against pain and anxiety. But you have to make it to the end.",
      image:
        "https://ggj.s3.amazonaws.com/styles/game_sidebar__wide/featured_image/2022/01/329194/webp.net-resizeimage3.png?itok=JN5wb5xi&timestamp=1643581701",
      win: "Best Narrative",
      links: [
        {
          title: "One More Day",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://v3.globalgamejam.org/2022/games/one-more-day-7",
        },
      ],
      tags: [
        "MS Windows",
        "Unreal Engine",
        "3D",
        "Adventure",
        "Casual",
        "Platformer",
        "Third-Person",
      ],
      screenshots: [
        "https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2022/01/329194/highresscreenshot00001.png?itok=QSR7XpdE&timestamp=1643574580",
        "https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2022/01/329194/highresscreenshot00005.png?itok=e53MluTB&timestamp=1643574580",
        "https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2022/01/329194/highresscreenshot00007.png?itok=8f7uwvvA&timestamp=1643574580",
      ],
    },
    {
      title: "Game Jam 2021 - Solitude",
      dates: "2021",
      location: "Universidad Francisco de Vitoria, Madrid, Spain",
      description:
        "In Solitude™ we play as an astronaut, who founds a strange signal from very far away, embracing a misterious journey in outer space.",
      image:
        "https://ggj.s3.amazonaws.com/styles/game_sidebar__wide/featured_image/2021/01/336712/logo2.png?itok=LK-dCKMH&timestamp=1612060089",
      win: "Best Art",
      links: [
        {
          title: "Solitude",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://v3.globalgamejam.org/2021/games/solitude-9",
        },
      ],
      tags: [
        "MS Windows",
        "Unreal Engine",
        "3D",
        "Adventure",
        "Casual",
        "First-Person",
      ],
      screenshots: [
        "https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2021/01/330280/captura_1.jpg?itok=7oikRu3P&timestamp=1612057432",
        "https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2021/01/330280/captura_2_0.jpg?itok=IBru0R2s&timestamp=1612057432",
        "https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2021/01/330280/captura_3_0.jpg?itok=gALlRBZb&timestamp=1612057432",
        "https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2021/01/330280/captura_4_0.jpg?itok=5-kKP3tE&timestamp=1612057432",
      ],
    },
  ],
  careers: [
    {
      title: "Environment Artist",
      active: true,
      description:
        "As an Environment Artist, I could immerse myself in the creative process, contributing to the design and atmosphere of game worlds, which is crucial for player immersion.",
      icon: "🏞️",
    },
    {
      title: "QA Tester",
      active: true,
      description:
        "On the other hand, working as a QA Tester would provide me with a deep understanding of game mechanics and quality assurance processes, ensuring a polished and enjoyable experience for players.",
      icon: "🔍",
    },
  ],
} as const;
