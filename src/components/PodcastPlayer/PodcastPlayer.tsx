import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  SxProps,
} from "@mui/material";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { useContext, useState } from "react";
import { IPodcast } from "../../assets/podcast-list";
import { fetchPodcastData } from "../../client/PodcastClient";
import { PodcastContext } from "../../context/PodcastProvider";
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export interface IPodcastPlayerProps {
  list: IPodcast[];
}

const PodcastPlayer: React.FC<IPodcastPlayerProps> = ({ list }) => {
  const { play, playingSong, open, setOpen, setPlay } =
    useContext(PodcastContext);

  const closePlayer = () => {
    setOpen(false);
    setPlay(false);
  };

  return (
    <Card
      id="podcast-player"
      sx={{
        position: "fixed",
        transition: "all 1s ease 0s",
        bottom: open
          ? "0px"
          : {
              xs: "-50px",
              sm: "-300px",
            },
        right: {
          xs: "0",
          sm: "15px",
        },
        height: {
          xs: "50px",
          sm: "300px",
        },

        width: {
          xs: "100%",
          sm: "500px",
        },
        flexDirection: {
          xs: "row",
          sm: "column",
        },
        display: "flex",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          flex: "none",
        }}
      >
        aasdasd
        <Button onClick={closePlayer}>X</Button>
      </Box>
      <CardContent>
        <audio src={list?.[playingSong]?.audioUrl} />
      </CardContent>
      <CardActions>
        <Button>
            <FastRewindIcon />
        </Button>
        <Button>
            { play ? <PauseIcon /> : <PlayArrowIcon />}
        </Button>

        <Button>
            <FastForwardIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default PodcastPlayer;
