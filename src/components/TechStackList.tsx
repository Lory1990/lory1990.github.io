import { Theme } from "@mui/material"
import { Box, SxProps } from "@mui/system"
import { ITechStack } from "../assets/tech-stack"
import CircleImageAndText from "./CircleImageAndText"
import ExperienceText from "./typography/ExperienceText"
import { Fade } from "react-awesome-reveal"

export interface ITechStackListProps {
    techStack: ITechStack[]
    columns?: number
    sx?: SxProps<Theme>
    initialDelay?: number
}

const TechStackList: React.FC<ITechStackListProps> = ({ initialDelay = 0, techStack, columns = 3, sx }) => {
    return (
        <Box
            sx={{
                display: {
                    xs: "flex",
                    md: "grid"
                },
                flexDirection: "column",
                gridTemplateColumns: new Array(columns).fill("1fr").join(" "),
                gap: "1em",
                gridRowGap: "1em",
                gridColumnGap: "1em",
                marginBottom: "2em",
                marginTop: "1em",
                ...sx
            }}
        >
            {techStack.map((single, index) => {
                return (
                    <Fade key={index} delay={initialDelay + index * 200}>
                        <CircleImageAndText description={<ExperienceText years={single.experience} />} {...single} />
                    </Fade>
                )
            })}
        </Box>
    )
}

export default TechStackList
