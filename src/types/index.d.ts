type Mode = "light" | "dark";

interface IProject {
    name: string;
    desc: string;
    image: string;
    links:{
        github?: string;
        live: string;
    };
    technologies: string[]
    category: string
}