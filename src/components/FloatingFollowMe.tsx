import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Button, IconButton, Link, Typography } from '@mui/material';
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


    return (
        <Box
            sx={{
                width: "fit-content",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "absolute",
                bottom: 20,
                right: 0
            }}>
            <Typography
                variant="body1"
                sx={{
                    transform: "rotate(90deg)",
                    marginBottom: "45px"
                }}
            >
                Follow Me
            </Typography>
            <Box
                sx={{
                    borderLeft: "0.2px solid black",
                    height: "50px",
                    width: "0.2px",
                    marginBottom: "15px"
                }}>
            </Box>
            {githubLink && createSocialIcon(githubLink, <GitHubIcon />)}
            {facebookLink && createSocialIcon(facebookLink, <FacebookOutlinedIcon />)}
            {twitterLink && createSocialIcon(twitterLink, <TwitterIcon />)}
            {linkedinLink && createSocialIcon(linkedinLink, <LinkedInIcon />)}

        </Box >
    )
}