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

interface ISocialIconProps{
    link?:string,
    icon?: JSX.Element
}

const SocialIcon : React.FC<ISocialIconProps> = ({link, icon}) => {
    const { hoverRef, isHovered } = useHover()

    if(!link) return null;

    return (<IconButton
        ref={hoverRef}
        color={isHovered ? "primary" : "default"}
        component={Link}
        href={link} >
        {icon}
    </IconButton >)
}
const FloatingFollowMe : React.FC<FloatingFollowMeProps> = ({ twitterLink, linkedinLink, facebookLink, githubLink }) => {


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
            <SocialIcon icon={<GitHubIcon />} link={githubLink}/>
            <SocialIcon icon={<FacebookOutlinedIcon />} link={facebookLink}/>
            <SocialIcon icon={<TwitterIcon />} link={twitterLink}/>
            <SocialIcon icon={<LinkedInIcon />} link={linkedinLink}/>
        </Box>
    )
}

export default FloatingFollowMe