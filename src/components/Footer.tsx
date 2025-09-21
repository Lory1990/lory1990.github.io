import { Box, IconButton, Link, useMediaQuery, Typography, useTheme } from "@mui/material"
import { GitHub as GitHubIcon, Twitter as TwitterIcon, FacebookOutlined as FacebookOutlinedIcon, LinkedIn as LinkedInIcon } from "@mui/icons-material"
import { ISocialIconProps, ISocialLinks } from "../types/ISocialProps"
import { Theme } from "@mui/system"
interface IFooterProps extends ISocialLinks {
  text1?: string
  text2?: string
  text3?: string
}

const SocialCircle: React.FC<ISocialIconProps> = ({ link, icon }) => {
  if (!link) return null

  return (
    <Box sx={{ alignItems: "center" }}>
      <IconButton
        component={Link}
        sx={theme => ({
          color: theme.palette.grey[400],
          border: `1.5px ${theme.palette.grey[400]} solid`,
          borderRadius: "20",
          transition: "all 400ms linear",
          margin: "10px",
          padding: "15px",
          "&:hover": {
            color: "white",
            backgroundColor: theme.palette.primary.main,
            border: `1.5px ${theme.palette.primary.main} solid`
          }
        })}
        href={link}
        target="_blank"
      >
        {icon}
      </IconButton>
    </Box>
  )
}

export default function Footer({ githubLink, twitterLink, facebookLink, linkedinLink, text1, text2, text3 }: IFooterProps) {
  const theme = useTheme()
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"))

  return (
    <Box
      id="footer"
      sx={theme => ({
        width: "100%",
        justifyContent: "flex-end",
        display: "flex",
        flexDirection: matches ? "row" : "column-reverse",

        backgroundColor: theme.palette.grey[900],
        paddingTop: "20px",
        paddingBottom: "20px"
      })}
    >
      <Box sx={{ width: matches ? "33%" : "100%", display: "flex", justifyContent: "center" }}>
        {githubLink && <SocialCircle icon={<GitHubIcon />} link={githubLink} />}
        {facebookLink && <SocialCircle icon={<FacebookOutlinedIcon />} link={facebookLink} />}
        {twitterLink && <SocialCircle icon={<TwitterIcon />} link={twitterLink} />}
        {linkedinLink && <SocialCircle icon={<LinkedInIcon />} link={linkedinLink} />}
      </Box>
      <Box sx={{ width: matches ? "33%" : "100%", display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "fit-content", textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="body1" color="white" sx={{ fontWeight: "bold" }}>
            {text1}
          </Typography>
          <Typography variant="body1" color={theme.palette.grey[400]}>
            {text2}
          </Typography>
          <Typography variant="body1" color={theme.palette.grey[400]}>
            {text3}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
