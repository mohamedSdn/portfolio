const generateHTMLContent = (project: {
    title: string;
    description: string;
    link: string;
}) => {
    return `
        <div class="main-file-content">
            <h2>${project.title}:</h2>
            <p>
                ${project.description}
            </p>
            <a href="${project.link}" target="_blank">Read more</a>
        <div>
    `;
};

const fileContents = [
    {
        filename: "aboutme.txt",
        description: `
            A motivated software engineer, graduate from the higher national school of computer science, mostly experienced in web development seeking to
            develop my skills and learn more about the art of computer programming`,
        get content() {
            return generateHTMLContent({
                title: `Mohamed Soudani`,
                description: this.description,
                link: `/aboutme`
            });
        }
    },
    {
        filename: "readme.txt",
        content: `
            <div class="main-file-content">
                <h2>Portfolio</h2>
                <p>
                    This is a simple command line style web application that I wanted to implement as a way to learn NextJs
                </p>
            <div>
        `
    },
    {
        filename: "Naftal.txt",
        slug: "naftal",
        projectName: "Naftal App",
        description: `A web application to help manage interventions in case of equipment failures at petroleum products storage centers, It has a forum where workerscan ask and
            answer questions plus the ability to upvote and downvote, It communicates a Rest api that exposes 2 endpoints: one to get failure predictions and another
            to provide questions similar to the one a user is currently viewing`,
        toolsUsed: [
            "Laravel@6.2",
            "JQuery",
            "Django",
            "Django Rest Framework",
            "MySQL"
        ],
        get content() {
            return generateHTMLContent({
                title: `Project ${this.projectName}`,
                description: this.description,
                link: `/projects/${this.slug}`
            });
        }
    },
    {
        filename: "BabaShop.txt",
        slug: "babashop",
        projectName: "BabaShop",
        description:
            "An e-commerce web application that offers registration & ads services to store owners to publish their products",
        toolsUsed: ["Angular@8.2.14", "Laravel@5.8.0", "MySQL"],
        get content() {
            return generateHTMLContent({
                title: `Project ${this.projectName}`,
                description: this.description,
                link: `/projects/${this.slug}`
            });
        }
    },
    {
        filename: "BMLab.txt",
        slug: "bmlab",
        projectName: "BM Lab",
        description:
            "A web application to help with the management of medical laboratories: tracking patients, blood samples, planning resampling and handling payments.",
        toolsUsed: ["React@18.2.0", ".NET Core@6.0.0"],
        get content() {
            return generateHTMLContent({
                title: `Project ${this.projectName}`,
                description: this.description,
                link: `/projects/${this.slug}`
            });
        }
    },
    {
        filename: "Elc.txt",
        slug: "elc",
        projectName: "Elc",
        description:
            "A pwa for a cultural club to help manage events, activities, sessions and scheduling.",
        toolsUsed: ["Angular@13.1.0", "Express@4.17.3", "Mongo@5.0.9"],
        get content() {
            return generateHTMLContent({
                title: `Project ${this.projectName}`,
                description: this.description,
                link: `/projects/${this.slug}`
            });
        }
    },
    {
        filename: "Plsp.txt",
        slug: "plsp",
        projectName: "Plsp",
        description:
            "A web application to help students attend classes by scanning a QR code, manages lateness & absences, provides stats, daily & monthly emails when lateness or absence thresholds are reached and detects false scans (cheat attempts).",
        toolsUsed: ["Angular@14.0.0", "Express@4.18.0", "Mongo@5.0.9"],
        get content() {
            return generateHTMLContent({
                title: `Project ${this.projectName}`,
                description: this.description,
                link: `/projects/${this.slug}`
            });
        }
    },
    {
        filename: "Dentily.txt",
        slug: "dentily",
        projectName: "Dentily",
        description:
            "A web application where dental clinics can sign up, manage their patients, their treatments, payments. It offers an interactive dental chart to help better visualize their patients cases and better track their progress.",
        toolsUsed: ["Angular@14.0.0", "Express@4.18.2", "Mongo@5.0.9"],
        get content() {
            return generateHTMLContent({
                title: `Project ${this.projectName}`,
                description: this.description,
                link: `/projects/${this.slug}`
            });
        }
    },
    {
        filename: "eMotion.txt",
        slug: "emotion",
        projectName: "eMotion",
        description:
            "A web application to help physically impaired people enjoy virtual reality experiences, it connects to a vr headset and a special chair to stream experiences",
        toolsUsed: ["NextJs@13.4.12"],
        get content() {
            return generateHTMLContent({
                title: `Project ${this.projectName}`,
                description: this.description,
                link: `/projects/${this.slug}`
            });
        }
    }
];

export default fileContents;
