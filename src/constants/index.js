import { airblack, jhaiho } from "../assets/images";
import {
    aws,
    cPlusPlus,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    go,
    html,
    jQuery,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    vercel,
    vuejs
} from "../assets/icons";

export const skills = [
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: cPlusPlus,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: go,
        name: "Go",
        type: "Backend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: jQuery,
        name: "jQuery",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: vercel,
        name: "Vercel",
        type: "Hosting",
    },
    {
        imageUrl: vuejs,
        name: "Vue",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Backend Developer Intern",
        company_name: "Airblack",
        icon: airblack,
        iconBg: "#fff",
        date: "June 2022 - July 2022",
        points: [
            "Developed new APIs according to business needs using Node.js, Express and MongoDB.",
            "Solved 20+ bugs weekly raised by end-users related to the backend and automated the recurring bugs, reducing similar bugs count by 20%.",
            "Wrote Python scripts to insert new data in the database and to modify the database to fix the issues raised by end users.",
        ],
    },
    {
        title: "Software Developer Intern",
        company_name: "Jhaiho",
        icon: jhaiho,
        iconBg: "#000",
        date: "Nov 2021 - Apr 2022",
        points: [
            "Worked with a team of 30+ members to serve the customers who need tattoos.",
            "Developed and Widgetized multiple modular UI using ReactJS, NextJS, and Typescript.",
            "Worked on improving the page speed by optimizing the images, lazy loading, and reducing the bundle size.",
            "Experience with Website development, SEO, performance analysis and optimizations.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/smochan',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/smochan',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'University Broadcaster',
        description: 'Developed a web application specific for university to share information in real-time among staff and students using websockets with admin panel for moderation',
        link: 'https://github.com/smochan/univer-broadcast-server',
        github: true,
        // https://github.com/smochan/video-chat
        // https://space.slyfin.com/
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Video Chat',
        description: 'Created a video calling application with rooms using Vanilla JS, Node, Express, WebRTC, and Socket.io with room creator having acces to add and remove participants.',
        link: 'https://github.com/smochan/video-chat',
        github: true,
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Space Articles',
        description: 'Website to see the latest articles from Space using NextJS and fetching the articles data from external API.',
        link: 'https://space.slyfin.com/',
        github: false,
    },
];