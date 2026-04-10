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
