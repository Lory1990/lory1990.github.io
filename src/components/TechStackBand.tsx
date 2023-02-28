import { Box } from "@mui/system"
import Image from "next/image"
import TechStackList from "./TechStackList"
import { ITechStack } from "../assets/tech-stack"

interface ITechStackBandPros {
  techStack: ITechStack[]
  title: string
  inverted: boolean
  image?: string
  initialDelay?: number
}

const TechStackBand: React.FC<ITechStackBandPros> = ({ inverted, techStack, title, image, initialDelay = 0 }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: {
          xs: "0em",
          md: "5em"
        },
        flexDirection: {
          xs: "column",
          sm: "column",
          md: inverted ? "row-reverse" : "row"
        }
      }}
    >
      <Box
        sx={{
          flex: 0.5,
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center"
        }}
      >
        <Box
          sx={{
            marginBottom: "0.5em",
            textAlign: "center",
            fontSize: "1.5em",
            fontWeight: "bold"
          }}
        >
          {title}
        </Box>
        {image && <Image src={image} height={200} width={300} alt={`Image for ${title}`} />}
      </Box>
      <TechStackList sx={{ flex: 1.5 }} columns={2} techStack={techStack} />
    </Box>
  )
}

export default TechStackBand
