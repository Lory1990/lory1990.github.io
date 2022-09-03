import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, IconButton, Link, Typography, useTheme } from '@mui/material';
import useHover from '../hooks/useHover';

interface FloatingFollowMeProps {
    twitterLink?: string
    facebookLink?: string
    githubLink?: string
    linkedinLink?: string
}


const createSocialIcon = (link: string, icon: JSX.Element): JSX.Element => {
    const { hoverRef, isHovered } = useHover()
    return (<IconButton
        ref={hoverRef}
        color={isHovered ? "primary" : "default"}
        component={Link}
        href={link} >
        {icon}
    </IconButton >)
}
export default function FloatingFollowMe({ twitterLink, linkedinLink, facebookLink, githubLink }: FloatingFollowMeProps) {
    const theme = useTheme()

    return (
        <Box
            sx={{
                position: "fixed",
                width: "fit-content",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bottom: "20px",
                right: "0px"
            }}>
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
                }}>
            </Box>
            {githubLink && createSocialIcon(githubLink, <GitHubIcon />)}
            {facebookLink && createSocialIcon(facebookLink, <FacebookOutlinedIcon />)}
            {twitterLink && createSocialIcon(twitterLink, <TwitterIcon />)}
            {linkedinLink && createSocialIcon(linkedinLink, <LinkedInIcon />)}
        </Box>
    )
}