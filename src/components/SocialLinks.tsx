import { Box } from "@mui/system"
import Image from "next/image"
import Link from "next/link"
import { IProject } from "../assets/projects-list"

export interface ISingleLinkProps{
    image: string;
    href?: string;
    alt: string;
}

const SingleLink : React.FC<ISingleLinkProps> = ({image, href, alt}) =>{

    if(!href) return null;

    return <Box sx={{
        transition: "all 500ms",
        "&:hover":{
            translate: "0 -10px"
        }
    }}><Link href={href} passHref={true} target={"_blank"}>
                <Image src={image} width={48} height={48} alt={alt}></Image>
            </Link>
            </Box>
}


export const SocialLinks : React.FC<IProject> = ({link})=>{

    return <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            overflow: 'auto',
            justifyContent: 'center',
            gap: "2rem",
            padding: "20px 0"
        }}
    >
        <SingleLink alt="Website" image="/img/social/web.png" href={link.web} />
        <SingleLink alt="Facebook" image="/img/social/facebook.png" href={link.facebook} />
        <SingleLink alt="Instagram" image="/img/social/instagram.png" href={link.instagram} />
        <SingleLink alt="Linkedin" image="/img/social/linkedin.png" href={link.linkedin} />
        <SingleLink alt="Twitter" image="/img/social/twitter.png" href={link.twitter} />
        <SingleLink alt="YouTube" image="/img/social/youtube.png" href={link.youtube} />
    </Box>
}

export default SocialLinks
