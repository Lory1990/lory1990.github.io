import GitHubIcon from "@mui/icons-material/GitHub"
import TwitterIcon from "@mui/icons-material/Twitter"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { Box, IconButton, Link, Typography, useTheme } from "@mui/material"
import useHover from "../hooks/useHover"
import { ISocialIconProps, ISocialLinks } from "../types/ISocialProps"

const SocialIcon: React.FC<ISocialIconProps> = ({ link, icon }) => {
  const { hoverRef, isHovered } = useHover()

  if (!link) return null

  return (
    <IconButton ref={hoverRef} color={isHovered ? "primary" : "default"} component={Link} href={link}>
      {icon}
    </IconButton>
  )
}
const FloatingFollowMe: React.FC<ISocialLinks> = ({ twitterLink, linkedinLink, facebookLink, githubLink }) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        position: {
          sx: "none",
          sm: "fixed"
        },
        width: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bottom: "120px",
        right: "0px",
        zIndex: "10"
      }}
    >
      <Typography
        variant="body1"
        sx={{
          transform: "rotate(90deg)",
          marginBottom: "45px"
        }}
        color={theme.palette.grey[600]}
      >
        Follow Me
      </Typography>
      <Box
        sx={{
          borderLeft: `0.2px solid ${theme.palette.grey[600]}`,
          height: "50px",
          width: "0.2px",
          marginBottom: "15px"
        }}
      ></Box>
      <SocialIcon icon={<GitHubIcon />} link={githubLink} />
      <SocialIcon icon={<FacebookOutlinedIcon />} link={facebookLink} />
      <SocialIcon icon={<TwitterIcon />} link={twitterLink} />
      <SocialIcon icon={<LinkedInIcon />} link={linkedinLink} />
    </Box>
  )
}

export default FloatingFollowMe
