export interface SocialLink {
  name: string;
  icon: string;
  darkIcon?: string;
  href: string;
  detail?: string;
}

export const socials: SocialLink[] = [
  {
    name: "GitHub",
    icon: "/social/github.svg",
    darkIcon: "/social/github-dark.svg",
    href: "https://github.com/Rabyegh",
    detail: "Rabyegh",
  },
  {
    name: "LinkedIn",
    icon: "/social/linkedin.svg",
    darkIcon: "/social/linkedin-dark.svg",
    href: "https://www.linkedin.com/in/mohamed-rabie-ghediri-51ab41329/",
    detail: "Mohamed Rabie Ghediri",
  },
  {
    name: "Email",
    icon: "/social/gmail.svg",
    href: "mailto:rabye.ghd@gmail.com",
    detail: "rabye.ghd@gmail.com",
  },
];
