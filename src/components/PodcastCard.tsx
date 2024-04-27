import { Box, Card } from "@mui/material"
import Image from "next/image"
import { IPodcast } from "../assets/podcast-list"
import { PlayArrow as PlayArrowIcon } from "@mui/icons-material"
import { useContext, useState } from "react"
import { PodcastContext } from "../context/PodcastProvider"
import { DateTime } from "luxon"
import Button from "../components/PodcastPlayer/Button"
export interface IPodcastCardProps extends IPodcast {
  index: number
}

const PodcastCard: React.FC<IPodcastCardProps> = ({ title, date, image, link, index, description, ...other }) => {
  const podcastPlayer = useContext(PodcastContext)

  const [open, setOpen] = useState<boolean>(false)

  const playSelected = (event: any) => {
    event.preventDefault()
    event.stopPropagation()
    podcastPlayer.play(index)
  }

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "1em"
      }}
      onClick={toggleOpen}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "center"
        }}
      >
        {image && (
          <Box
            sx={{
              flex: "none",
              marginRight: {
                xs: "0",
                sm: "15px"
              }
            }}
          >
            <Image src={image} height={75} width={75} alt={`Cover image for ${title}`} style={{ borderRadius: "5px" }} />
          </Box>
        )}
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: "1.2em",
              marginBottom: "10px"
            }}
          >
            {title}
          </Box>
          <Box
            sx={{
              color: "#AAA",
              fontSize: "0.9em"
            }}
          >
            {DateTime.fromHTTP(date).toFormat("dd MMM yyyy")}
          </Box>
        </Box>
        <Box
          sx={{
            flex: "none",
            display: "flex"
          }}
        >
          <Button onClick={playSelected} sx={{ borderRadius: "500px", height: "40px", width: "40px" }}>
            <PlayArrowIcon />
          </Button>
        </Box>
      </Box>
      {open && <Box dangerouslySetInnerHTML={{ __html: description.replace("\n--- \n\nSend in a voice message: https://anchor.fm/lory1990/message", "") }}></Box>}
    </Card>
  )
}

export default PodcastCard
