import { Box } from "@mui/system"
import Link from "next/link"
import { IProject } from "../assets/projects-list"
import LanguageIcon from '@mui/icons-material/Language';
import { useTheme } from "@mui/material";
import { ReactNode } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

export interface ISingleLinkProps {
    icon: ReactNode
    href?: string
}

const SingleLink: React.FC<ISingleLinkProps> = ({ icon, href }) => {
    if (!href) return null
    const theme = useTheme()

    return (
        <Box
            sx={{
                transition: "all 500ms",
                "&:hover": {
                    translate: "0 -10px",
                    color: theme.palette.primary.main
                },
                color: theme.palette.grey[600]
            }}
        >
            <Link href={href} passHref={true} target={"_blank"} >
                {icon}
            </Link>
        </Box>
    )
}

export const SocialLinks: React.FC<IProject> = ({ link }) => {
    if (!link) return null
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                overflow: "auto",
                justifyContent: "center",
                gap: "2rem",
                padding: "20px 0"
            }}
        >
            <SingleLink icon={<LanguageIcon fontSize="large" />} href={link.web} />
            <SingleLink icon={<FacebookIcon fontSize="large" />} href={link.facebook} />
            <SingleLink icon={<InstagramIcon fontSize="large" />} href={link.instagram} />
            <SingleLink icon={<LinkedInIcon fontSize="large" />} href={link.linkedin} />
            <SingleLink icon={<TwitterIcon fontSize="large" />} href={link.twitter} />
            <SingleLink icon={<YouTubeIcon fontSize="large" />} href={link.youtube} />
        </Box>
    )
}

export default SocialLinks
