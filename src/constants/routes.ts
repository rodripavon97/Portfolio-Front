import { ILink } from "../interfaces/ILink";

export const PATH_NAME = {
HOME: "Home",
ABOUTME: "About me",
SKILLS:"Skills",
PROJECTS:"Proyects",
CONTACT:"Contact"
};

const root = '/';

export const URL = {
    HOME: root,
    ABOUTME: root + PATH_NAME.ABOUTME,
    SKILLS: root + PATH_NAME.SKILLS,
    PROJECTS: root + PATH_NAME.PROJECTS,
    CONTACT: root + PATH_NAME.CONTACT
};

export const navbarLinks : ILink[] = [
    {name: PATH_NAME.HOME, url: URL.HOME},
    {name: PATH_NAME.ABOUTME, url: URL.ABOUTME},
    {name: PATH_NAME.SKILLS, url: URL.SKILLS},
    {name: PATH_NAME.PROJECTS, url: URL.PROJECTS},
    {name: PATH_NAME.CONTACT, url: URL.CONTACT}
];