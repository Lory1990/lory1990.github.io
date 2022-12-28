import { Box } from "@mui/system"
import Image from "next/image"
import Link from "next/link"
import { IProject } from "../assets/projects-list"

export const SocialLinks: React.FC<IProject> = ({ link }) => {
    return (
        <Box>
            {link.facebook && (
                <Link href={link.facebook} passHref={true} target={"_blank"}>
                    aa
                    {/* <Image src="facebook"></Image> */}
                </Link>
            )}
            {link.instagram && (
                <Link href={link.instagram} passHref={true} target={"_blank"}>
                    aa
                    {/* <Image src="facebook"></Image> */}
                </Link>
            )}
        </Box>
    )
}

export default SocialLinks
