import { Box, Card, CardContent, Chip, Typography, useMediaQuery, useTheme } from "@mui/material"
import { DateTime } from "luxon"
import { IProject } from "../assets/projects-list"
import Title from "./typography/Title"

import { Category as CategoryIcon, Groups as GroupsIcon, DateRange as DateRangeIcon, Code as CodeIcon, Work as WorkIcon } from "@mui/icons-material"
const ProjectDescription: React.FC<IProject> = ({ description, title, category, stack, date, role, team }) => {
  const theme = useTheme()

  const mediaQuery = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row"
        },
        gap: "2rem"
      }}
    >
      <Box sx={{ lineHeight: "200%", textAlign: { xs: "center", sm: "left" } }}>
        <Title sx={{ fontSize: "3em", marginBottom: "0.75em" }}>{title}</Title>
        <span dangerouslySetInnerHTML={{ __html: description }} />
      </Box>
      <Box
        sx={{
          minWidth: {
            xs: "100%",
            sm: "30vw"
          }
        }}
      >
        <Card
          sx={{
            padding: "1.5em 0em 0em 1.5em",
            display: "flex",
            flexDirection: "column",
            backgroundSize: mediaQuery ? "25%" : "17.5%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",
            backgroundImage: "url(/img/dotsRectangle.svg)"
          }}
        >
          <CardContent>
            {category && (
              <div style={{ marginBottom: "0.5em" }}>
                <Box sx={{ display: "flex", alignItems: "center", marginBottom: "0.3em" }}>
                  <CategoryIcon fontSize="small" sx={{ marginRight: "0.2em", color: "#323450" }} />
                  <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "1.4em" }}>
                    Category
                  </Typography>
                </Box>
                {category.map((c, index) => (
                  <Chip key={c} sx={{ fontWeight: "bold", marginRight: "0.5em", marginLeft: index != 0 ? "0.5em" : "0em" }} label={c} />
                ))}
              </div>
            )}
            {role && (
              <div style={{ marginBottom: "1em" }}>
                <Box sx={{ display: "flex", alignItems: "center", marginBottom: "0.3em" }}>
                  <WorkIcon fontSize="small" sx={{ marginRight: "0.2em", color: "#323450" }} />
                  <Typography sx={{ fontWeight: "bold", fontSize: "1.4em" }}>Role</Typography>
                </Box>
                {role}
              </div>
            )}
            {team && (
              <div style={{ marginBottom: "1em" }}>
                <Box sx={{ display: "flex", alignItems: "center", marginBottom: "0.3em" }}>
                  <GroupsIcon fontSize="small" sx={{ marginRight: "0.2em", color: "#323450" }} />
                  <Typography sx={{ fontWeight: "bold", fontSize: "1.4em" }}>Team</Typography>
                </Box>
                {team}
              </div>
            )}
            <div style={{ marginBottom: "1em" }}>
              <Box sx={{ display: "flex", alignItems: "center", marginBottom: "0.3em" }}>
                <DateRangeIcon fontSize="small" sx={{ marginRight: "0.2em", color: "#323450" }} />
                <Typography sx={{ fontWeight: "bold", fontSize: "1.4em" }}>Date</Typography>
              </Box>
              {DateTime.fromISO(date).toFormat("yyyy")}
            </div>
            {stack && (
              <div style={{ marginBottom: "0.5em" }}>
                <Box sx={{ display: "flex", alignItems: "center", marginBottom: "0.3em" }}>
                  <CodeIcon fontSize="small" sx={{ marginRight: "0.2em", color: "#323450" }} />
                  <Typography sx={{ fontWeight: "bold", fontSize: "1.4em" }}>Tech Stack</Typography>
                </Box>
                {stack.map((c, index) => (
                  <Chip key={c} sx={{ fontWeight: "bold", marginRight: "0.5em", marginLeft: index != 0 ? "0.5em" : "0em" }} label={c} />
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}

export default ProjectDescription
