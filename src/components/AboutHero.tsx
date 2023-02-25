import { IconButton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import GitHubIcon from "@mui/icons-material/GitHub"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { ISocialIconProps, ISocialLinks } from "../types/ISocialProps"
import Image from "next/image"
import Link from "next/link"
import ScrollIcon from "./ScrollIcon/ScrollIcon"

const UpperIcon: React.FC<ISocialIconProps> = ({ link, icon }) => {
  return (
    <Box sx={{ alignItems: "center" }}>
      <IconButton
        component={Link}
        sx={theme => ({
          borderRadius: "10px",
          transition: "all 200ms linear",
          background: "black",
          color: "white",
          "&:hover": {
            color: "white",
            backgroundColor: theme.palette.primary.main,
            scale: "110%"
          }
        })}
        href={link}
        target={"_blank"}
      >
        {icon}
      </IconButton>
    </Box>
  )
}

const AboutHero: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: {
          xs: "0",
          sm: "0 3em 0 3em"
        }
      }}
    >
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flex: 1,
          flexDirection: {
            xs: "column",
            sm: "row"
          }
        }}
      >
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            textAlign: {
              xs: "center",
              sm: "left"
            },
            justifyContent: "center"
          }}
        >
          <Typography fontWeight="bolder" variant="h1" sx={theme => ({ fontSize: { xs: "4em", sm: "5.5em" }, color: theme.palette.primary.main })}>
            <Box sx={{ display: { xs: "none", sm: "inline" } }}>Hi,</Box> I am Lorenzo
          </Typography>
          <Typography fontWeight="bold" sx={{ fontSize: { xs: "2em", sm: "2em" } }}>
            IT Manager
          </Typography>
          <Box sx={theme => ({ margin: "1em 0 1em 0", fontSize: "1.5em", fontStyle: "italic", color: theme.palette.primary.main })}>IT Governance is my kingdom</Box>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              gap: "0.5em",
              justifyContent: {
                xs: "center",
                sm: "left"
              }
            }}
          >
            <UpperIcon icon={<GitHubIcon />} link={"https://github.com/lory1990"} />
            <UpperIcon icon={<LinkedInIcon />} link={"linkedin.com/in/lorenzodefrancesco/"} />
            <UpperIcon icon={<FacebookOutlinedIcon />} link={"https://www.facebook.com/lory1990/"} />
            <UpperIcon
              icon={<Image src="/img/podcast-badges/google-little.svg" width={40} height={40} alt="Listen on google podcast" style={{ height: 25, width: "auto" }} />}
              link={"https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy82YjZkNmZmOC9wb2RjYXN0L3Jzcw=="}
            />
            <UpperIcon
              icon={<Image src="/img/podcast-badges/spotify-little.svg" width={800} height={800} alt="Listen on spotify" style={{ height: 25, width: "auto" }} />}
              link={"https://open.spotify.com/show/0kfHlz3PUtYdQMsUQvWSWv"}
            />
            <UpperIcon
              icon={<Image src="/img/podcast-badges/apple-little.svg" width={40} height={40} alt="Listen on apple podcast" style={{ height: 25, width: "auto" }} />}
              link={"https://podcasts.apple.com/us/podcast/it-governance-for-cto/id1588309592"}
            />{" "}
          </Box>
        </Box>
        <Box sx={{  maxWidth: {xs: "100vw", sm:"45vw"}, textAlign: "center" }}>
          <Image src="/img/about-hero.webp" width={40} height={40} alt="Lorenzo De Francesco" style={{ height: "auto", width: "auto", maxWidth: "90%" }} />
        </Box>
      </Box>
      <Box sx={{marginBottom: {xs: "1em", sm: "1em"}, justifyContent:"center", display: "flex"}}>
        <ScrollIcon />
      </Box>
    </Box>
  )
}

export default AboutHero
