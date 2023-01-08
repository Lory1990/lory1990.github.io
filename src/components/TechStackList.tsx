import { Theme } from "@mui/material"
import { Box, SxProps } from "@mui/system"
import { ITechStack } from "../assets/tech-stack"
import CircleImageAndText from "./CircleImageAndText"
import ExperienceText from "./CircleImageAndText/ExperienceText"

export interface ITechStackListProps {
    techStack: ITechStack[]
    columns?: number
    sx?: SxProps<Theme>
}

const TechStackList: React.FC<ITechStackListProps> = ({ techStack, columns = 3, sx }) => {
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
            {techStack.map((single, index) => (
                <CircleImageAndText key={`tech-stack-${index}`} description={single.experience && <ExperienceText years={single.experience} />} {...single} />
            ))}
        </Box>
    )
}

export default TechStackList
