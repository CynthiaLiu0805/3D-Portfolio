export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

// TODO: fill in my own things
export const myProjects = [
    {
        title: 'BCEP - Bridge Chloride Exposure Predictor ',
        desc: 'Bridge Chloride Exposure Predictor (BCEP) is a scientific software tool that forecasts corrosion risks on highway bridges by modeling chloride exposure from deicing salts like sodium chloride. BCEP helps stakeholders, such as government agencies, assess exposure levels and plan maintenance budgets accordingly, allocating more resources to areas with higher predicted chloride exposure.',
        subdesc:
            'Built as a web application using Vue.js, HTML, and CSS, BCEP delivers visualizations of chloride exposure predictions through an intuitive user interface. Python was used to construct the backend database and generate prediction trends based on climate and traffic datasets. The project incorporates Continuous Integration via GitHub Actions for streamlined testing, while stakeholder feedback is managed through GitHub Issues. A tailored requirement validation process ensures ongoing alignment with user needs and supports long-term maintainability.',
        href: 'https://bcep.onrender.com/',
        texture: '/textures/project/waterra.mp4',
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'LiveDoc - Real-Time Google Docs Clone',
        desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
        subdesc:
            'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
        href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
        texture: '/textures/project/project2.mp4',
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'Waterra - Real-time Water Quality Platform',
        desc: 'Waterra is a web-based platform developed under the Ohneganos program to monitor water quality. It features a functional map that allows users to explore real-time environmental data, such as pH, turbidity, etc., which are collected from water quality sensors. Designed with accessibility in mind, the platform automatically generates intuitive line graphs to help both professionals and community members interpret trends.',
        subdesc:
            'The platform was built using React and TypeScript, with a custom UI component library designed to present sensor data on a color-coded Leaflet map for geographic and temporal analysis. Backend APIs were developed in Go to query sensor data stored in InfluxDB, a time-series database linked to remote monitoring hardware.',
        href: 'https://github.com/CynthiaLiu0805/Waterra/tree/master',
        texture: '/textures/project/waterra.mp4',
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'Love, Cat & Robot - A Narrative-Driven Pixel Adventure Game',
        desc: 'Love, Cat & Robot is an RPG game that combines emotional storytelling with retro aesthetics. Players step into Tyra\'s life, navigating her daily routine and uncovering the hidden truths of a mysterious world. Through interaction with two central NPCs—Tyra’s pet cat and Derek, an AI assistant, players are allowed to shape the direction of the story, unlocking different endings based on their decisions. As the plot evolves, the game transforms from a peaceful routine into a haunting experience filled with metafictional twists and darker undertones, keeping players immersed and eager to discover the true endings. ',
        subdesc:
            'Developed in Unity, Tyra features pixel art backgrounds to evoke a nostalgic yet atmospheric setting. The gameplay blends exploration, branching dialogues, and mini bullet-hell combat. Players use WASD keys for movement and the mouse for interactions, seamlessly shifting between contestant-based dialogue choices and avatar-based combat sequences. This hybrid interaction model ensures a varied and engaging experience, balancing narrative depth with gameplay challenge. ',
        href: 'https://github.com/CynthiaLiu0805/Waterra/tree/master',
        texture: '/textures/project/lovecatrobot.mp4',
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'UniCost - Online Banking Platform',
        desc: 'UniCost aims to peak students\' interest in their financial futures, to give them perspective on the price of school, to break the general trend, and to help them make smart financial decisions.',
        subdesc:
            'Built with Node.js and Express on the backend and EJS for frontend templating, UniCost features both guest and registered user modes. MongoDB Atlas serves as the primary database, with bcrypt integrated for secure authentication. Users can input data such as tuition, program length, expected income, and financial aid to receive personalized projections and visualizations generated using Plotly. ',
        href: 'https://github.com/CynthiaLiu0805/UniCost',
        texture: '/textures/project/unicost.mp4',
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'Imaginify - AI Photo Manipulation App',
        desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based models.',
        subdesc:
            'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
        href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
        texture: '/textures/project/project5.mp4',
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Ontario Financing Authority',
        pos: 'Software Engineer Co-op',
        duration: '2021 - 2022',
        title: "At the Ontario Financing Authority, I used VB.NET and C# to fix software bugs and build new features for financial analysis tools. I wrote complex SQL queries and automated Crystal Reports to ensure stakeholders had timely, accurate insights. Alongside development, I helped coordinate a quarterly networking event for over 100 employees, supporting internal engagement.",
        icon: '/assets/ofa.png',
        animation: 'victory',
    },
];