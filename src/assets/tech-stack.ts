export interface Technology {
    name: string
    color: string
}

export interface ITechStack {
    title?: string
    technologies?: Technology[]
    description?: string
    image?: string
    emphasize?: boolean
    experience?: number
    category?: "FE" | "BE" | "CLOUD"
}

const techStack: ITechStack[] = [
    {
        title: "React",
        image: "icon-react",
        experience: 3,
        emphasize: true,
        category: "FE"
    },
    {
        title: "React Native",
        image: "icon-iphone",
        experience: 1,
        category: "FE"
    },
    {
        title: "Java",
        image: "icon-java",
        experience: 5,
        emphasize: true,
        category: "BE",
        technologies: [
            {
                name: "Spring Boot",
                color: "#61dafb"
            },
            {
                name: "Quarkus",
                color: "#61dafb"
            }
        ]
    },
    {
        title: "Kubernetes",
        image: "icon-kubernetes",
        experience: 1,
        category: "CLOUD"
    },
    {
        title: "CSS",
        image: "icon-sass",
        experience: 3,
        category: "FE",
        technologies: [
            {
                name: "CSS",
                color: "#61dafb"
            },
            {
                name: "SASS",
                color: "#61dafb"
            },
            {
                name: "Styled Components",
                color: "#61dafb"
            }
        ]
    },
    {
        title: "NodeJS",
        image: "icon-nodejs",
        experience: 5,
        category: "BE",
        technologies: [
            {
                name: "Express",
                color: "#61dafb"
            },
            {
                name: "Typescript",
                color: "#61dafb"
            }
        ]
    },
    {
        title: "SQL + NoSQL",
        image: "icon-database",
        experience: 7,
        category: "BE",
        emphasize: true,
        technologies: [
            {
                name: "MongoDB",
                color: "#61dafb"
            },
            {
                name: "MSSQL",
                color: "#c69"
            },
            {
                name: "MySQL",
                color: "#c69"
            }
        ]
    },
    {
        title: "AWS",
        image: "icon-aws",
        experience: 1,
        category: "CLOUD"
    },
    ,
    {
        title: "Azure",
        image: "icon-azure",
        experience: 3,
        category: "CLOUD"
    }
]

export default techStack
