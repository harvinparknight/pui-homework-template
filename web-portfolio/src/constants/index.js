import { americaneagle, dotdotdot, ICO } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
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
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
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
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Technical Product Manager Intern",
        company_name: "American Eagle Outfitters",
        icon: americaneagle,
        iconBg: "#accbe1",
        date: "Jun 2023 - Aug 2023",
        points: [
            "Owned discovery and deployment of first-to-market RFID project in distribution, mapping processes, building product specs, and coding initial integration logic w/ engineers.",
            "Trained inventory planning ML algorithm with AbacusAI, adding features by building data sets in Tableau and testing predictions to reduce deadweight loss in peak season. New feature is projected to reduce 70% of unrealized profits",
            ],
    },
    {
        title: "Product Development Lead",
        company_name: "Dotdotdot",
        icon: dotdotdot,
        iconBg: "#b7e4c7",
        date: "Jun 2022 - Sep 2022",
        points: [
            "Given $25k off a cold email to recruit and direct team of 5 to reimagine metaverse social media startup from the ground up, developing user personas and designing a go-to-market strategy to connect avatar technology to Gen-Z use cases",
            "Planned agile project schedule, leading team through standups and sprint planning in prototyping and UX research",
            "Presented recommendations incorporated in Series A pitch deck, attracting $2M in VC and doubling valuation to $40M",
        ],
    },
    {
        title: "Consulting Analyst Intern",
        company_name: "ICO Partners",
        icon: ICO,
        iconBg: "#fbc3bc",
        date: "Dec 2021 - Jun 2022",
        points: [
            "Developed new revenue models and KPIs for ICO’s industry analysis for 3000 clients, modeling using existing metrics",
            "Tailored communication design of data analytics tool used by Riot, EA, and Activision by A/B testing and iterating UI",
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
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];