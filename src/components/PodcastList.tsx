import { Box } from "@mui/system"
import Image from "next/image"

const PodcastList: React.FC = () => {
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
      <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy82YjZkNmZmOC9wb2RjYXN0L3Jzcw==" target="_blank" rel="noreferrer">
        <Image src="/img/podcast-badges/google.png" width={330} height={80} alt="Listen on google podcast" style={{ height: 40, width: "auto" }} />
      </a>
      <a href="https://open.spotify.com/show/0kfHlz3PUtYdQMsUQvWSWv" target="_blank" rel="noreferrer">
        <Image src="/img/podcast-badges/spotify.webp" width={330} height={80} alt="Listen on spotify podcast" style={{ height: 40, width: "auto" }} />
      </a>
      <a href="https://podcasts.apple.com/us/podcast/il-frontendista-imbruttito/id1588309592" target="_blank" rel="noreferrer">
        <Image src="/img/podcast-badges/apple.svg" width={330} height={80} alt="Listen on apple podcast" style={{ height: 40, width: "auto" }} />
      </a>
    </Box>
  )
}

export default PodcastList
