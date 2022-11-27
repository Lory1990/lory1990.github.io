export interface ITechStack {
  title?: string;
  description?: string;
  image?: string;
  emphasize?: boolean;
  experience?: number;
  category?: "FE" | "BE" | "CLOUD";
}

const techStack: ITechStack[] = [
  {
    title: "React",
    image: "icon-react",
    experience: 3,
    emphasize: true,
    category: "FE",
    
  },
  {
    title: "React Native",
    image: "icon-iphone",
    experience: 1,
    category: "FE",
  },
  {
    title: "Java",
    image: "icon-java",
    experience: 5,
    emphasize: true,
    category: "BE",
  },
  {
    title: "Quarkus",
    image: "icon-java",
    experience: 1,
    category: "BE",
  },
  {
    title: "Spring Boot",
    image: "icon-java",
    experience: 4,
    category: "BE",
  },
  {
    title: "Kubernetes",
    image: "icon-kubernetes",
    experience: 1,
    category: "CLOUD"
  },
  {
    title: "SCSS",
    image: "icon-sass",
    experience: 3,
    category: "FE"
  },
  {
    title: "NodeJS + Express",
    image: "icon-nodejs",
    experience: 5,
    category: "BE"
  },
  {
    title: "SQL + NoSQL",
    image: "icon-database",
    experience: 7,
    category: "BE"
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
];


export default techStack;