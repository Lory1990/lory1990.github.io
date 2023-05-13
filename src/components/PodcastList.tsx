import { Box } from "@mui/system"
import Image from "next/image"

export interface IPodcastList{
  apple?: string
  google?: string
  spotify?: string
}

const PodcastList: React.FC<IPodcastList> = ({apple, google, spotify}) => {
  return (
    <Box
      sx={{
        marginTop: "1em",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        flexDirection: {
          md: "row",
          xs: "column"
        },
        gap: "0.5em"
      }}
    >
      {google && <a href={google} target="_blank" rel="noreferrer">
        <Image src="/img/podcast-badges/google.png" width={330} height={80} alt="Listen on google podcast" style={{ height: 40, width: "auto" }} />
      </a>}
      {spotify && <a href={spotify} target="_blank" rel="noreferrer">
        <Image src="/img/podcast-badges/spotify.webp" width={330} height={80} alt="Listen on spotify podcast" style={{ height: 40, width: "auto" }} />
      </a>}
      {apple && <a href={apple} target="_blank" rel="noreferrer">
        <Image src="/img/podcast-badges/apple.svg" width={330} height={80} alt="Listen on apple podcast" style={{ height: 40, width: "auto" }} />
      </a>}
    </Box>
  )
}

export default PodcastList
