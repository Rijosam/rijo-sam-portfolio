export type Content = {
  title: string;
  type: "Talk" | "Podcast" | "Blog" | "Workshop";
  url: string; // Internal URL
};

export const Content: Content[] = [
  {
    title: "My Awesome Talk at AstroConf",
    type: "Talk",
    url: "/talks/astroconf-awesome-talk",
  },
  {
    title: "The Future of Web Dev (Podcast)",
    type: "Podcast",
    url: "/podcasts/future-of-webdev",
  },
  {
    title: "Building a Blog with Astro",
    type: "Blog",
    url: "/blogs/building-astro-blog",
  },
  {
    title: "Astro for Beginners",
    type: "Workshop",
    url: "/workshops/astro-beginners",
  },
  {
    title: "My Second Awesome Talk at AstroConf",
    type: "Talk",
    url: "/talks/astroconf-second-talk",
  },
  {
    title: "The Past of Web Dev (Podcast)",
    type: "Podcast",
    url: "/podcasts/past-of-webdev",
  },
  {
    title: "Advanced Astro",
    type: "Workshop",
    url: "/workshops/advanced-astro",
  },
];
