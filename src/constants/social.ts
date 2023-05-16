import { ISocialMedia } from "./../interfaces/ISocialMedia";
export const icons = {
  LINKEDIN: "icomoon-free:linkedin2",
  GITHUB: "octicon:mark-github-16",
};

export const links = {
  LINKEDINLINK: "https://www.linkedin.com/in/rodrigopavongomez/",
  GITHUBLINK: "https://github.com/rodripavon97",
};

export const media: ISocialMedia[] = [
  { icon: icons.GITHUB, link: links.GITHUBLINK },
  { icon: icons.LINKEDIN, link: links.LINKEDINLINK },
];
