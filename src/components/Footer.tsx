import { Box, IconButton, Link, Typography, useTheme } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ISocialIconProps, ISocialLinks } from "../types/ISocialProps";
import useHover from "../hooks/useHover";

interface IFooterProps extends ISocialLinks {
    text1?: string
    text2?: string
    text3?: string
}


const SocialCircle: React.FC<ISocialIconProps> = ({ link, icon }) => {
    if (!link) return null;

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
                        border: `1.5px ${theme.palette.primary.main} solid`,
                    }
                })}
                href={link} >
                {icon}
            </IconButton>
        </Box >)
}


export default function Footer({ githubLink, twitterLink, facebookLink, linkedinLink, text1, text2, text3 }: IFooterProps) {
    const theme = useTheme()
    return (
        <Box
            id="footer"
            sx={theme => ({
                width: "100%",
                justifyContent: "flex-end",
                display: "flex",
                backgroundColor: theme.palette.grey[900],
                paddingTop: "20px",
                paddingBottom: "20px"
            })}>
            <Box sx={{ width: "33%", display: "flex", justifyContent: "center" }}>
                <SocialCircle icon={<GitHubIcon />} link={githubLink} />
                <SocialCircle icon={<FacebookOutlinedIcon />} link={facebookLink} />
                <SocialCircle icon={<TwitterIcon />} link={twitterLink} />
                <SocialCircle icon={<LinkedInIcon />} link={linkedinLink} />
            </Box>
            <Box sx={{ width: "33%", display: "flex", justifyContent: "center" }}>
                <Box sx={{ width: "fit-content" }}>
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