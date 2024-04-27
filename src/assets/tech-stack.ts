export interface Technology {
  name: string
  color: string
}

export interface ITechStack {
  title?: string
  technologies?: Technology[]
  description?: string
  image?: string
  highlight?: boolean
  experience?: number
  category?: "FE" | "BE" | "CLOUD"
}

const techStack: ITechStack[] = [
  {
    highlight: true,
    title: "React",
    image: "icon-react",
    experience: 4,

    category: "FE"
  },
  {
    title: "React Native",
    image: "icon-iphone",
    experience: 1,
    category: "FE"
  },
  {
    highlight: true,
    title: "Java",
    image: "icon-java",
    experience: 7,

    category: "BE",
    technologies: [
      {
        name: "Spring Boot",
        color: "#67AA3C"
      },
      {
        name: "Quarkus",
        color: "#4795EA"
      }
    ]
  },
  {
    title: "Kubernetes",
    image: "icon-kubernetes",

    experience: 2,
    category: "CLOUD",
    technologies: [
      {
        name: "Mia Platform",
        color: "#29B7E0"
      },
      {
        name: "Docker",
        color: "#0DB7ED"
      }
    ]
  },
  {
    title: "CSS",
    image: "icon-sass",

    experience: 4,
    category: "FE",
    technologies: [
      {
        name: "SASS",
        color: "#C26191"
      },
      {
        name: "Styled Components",
        color: "#BD69A1"
      }
    ]
  },
  {
    highlight: true,
    title: "NodeJS",
    image: "icon-nodejs",

    experience: 5,
    category: "BE",
    technologies: [
      {
        name: "Express",
        color: "#010101"
      },
      {
        name: "Typescript",
        color: "#3178C6"
      }
    ]
  },
  {
    highlight: true,
    title: "SQL + NoSQL",
    image: "icon-database",
    experience: 8,
    category: "BE",

    technologies: [
      {
        name: "MongoDB",
        color: "#4FAA41"
      },
      {
        name: "MSSQL",
        color: "#B71C1C"
      },
      {
        name: "MySQL",
        color: "#F29111"
      }
    ]
  },
  {
    highlight: true,
    title: "AWS",
    image: "icon-aws",
    experience: 1,
    category: "CLOUD"
  },
  {
    highlight: true,
    title: "Azure",
    image: "icon-azure",
    experience: 4,
    category: "CLOUD"
  }
]

export default techStack
