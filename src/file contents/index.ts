const generateHTMLContent = (project: {
    projectName: string;
    description: string;
    slug: string;
}) => {
    return `
        <div class="main-file-content">
            <h2>Project ${project.projectName}:</h2>
            <p>
                ${project.description}
            </p>
            <a href="/projects/${project.slug}" target="_blank">Read more</a>
        <div>
    `;
};

const fileContents = [
    {
        filename: "aboutme.txt",
        content: `
            <div class="main-file-content">
                <h2>Mohamed Soudani</h2>
                <p>
                    A motivated software engineer, graduate from the higher national school of computer science, mostly experienced in web development seeking to
                    develop my skills and learn more about the art of computer programming
                </p>
            <div>
        `
    },
    {
        filename: "readme.txt",
        content: `
            <div class="main-file-content">
                <h2>Portfolio</h2>
                <p>
                    This is a simple web application that I wanted to implement as a way to learn NextJs
                </p>
            <div>
        `
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
                projectName: this.projectName,
                description: this.description,
                slug: this.slug
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
                projectName: this.projectName,
                description: this.description,
                slug: this.slug
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
                projectName: this.projectName,
                description: this.description,
                slug: this.slug
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
                projectName: this.projectName,
                description: this.description,
                slug: this.slug
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
                projectName: this.projectName,
                description: this.description,
                slug: this.slug
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
                projectName: this.projectName,
                description: this.description,
                slug: this.slug
            });
        }
    }
];

export default fileContents;
