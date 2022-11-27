import { Box, Button, Card, CardActions, CardContent, CardHeader, LinearProgress, SxProps } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { IPodcast } from "../../assets/podcast-list"
import { PodcastContext } from "../../context/PodcastProvider"
import FastRewindIcon from "@mui/icons-material/FastRewind"
import FastForwardIcon from "@mui/icons-material/FastForward"
import PauseIcon from "@mui/icons-material/Pause"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import CloseIcon from "@mui/icons-material/Close"
import PodcastButton from "./Button"
import Image from "next/image"

export interface IPodcastPlayerProps {
    list: IPodcast[]
}

const PodcastPlayer: React.FC<IPodcastPlayerProps> = ({ list }) => {
    const { play, playingSong, open, setOpen, state, stop, pause } = useContext(PodcastContext)

    const [trackPercentage, setTrackPercentage] = useState<number>(0)

    const playingSongData = list?.[playingSong]

    useEffect(() => {
        const audioElement = document.getElementById("audioPlayer") as HTMLAudioElement

        audioElement.ontimeupdate = event => {
            const timestamp = (event as any).timeStamp

            if (playingSongData.audioLength) {
                setTrackPercentage((timestamp / playingSongData.audioLength) * 100)
            } else {
                setTrackPercentage(0)
            }
        }
    }, [])

    // useEffect(() => {
    //   setPlaySong(play)
    // }, [play])

    const setPlaySong = play => {
        const audioElement = document.getElementById("audioPlayer") as HTMLAudioElement
        if (play) {
            audioElement.play()
        } else {
            audioElement.pause()
        }
    }

    const onRewind = () => {
        let newSong = playingSong - 1
        if (newSong < 0) newSong = list?.length - 1
        play(newSong)
        if (play) {
        }
    }

    const onPlay = () => {
        play?.(playingSong)
    }

    const onForward = () => {
        let newSong = playingSong + 1
        if (newSong >= list?.length) newSong = 0
        setTrackPercentage(0)
        play?.(newSong)
    }

    const closePlayer = () => {
        setOpen(false)
        stop?.()
    }

    const onPlaying = (event: any) => {
        console.log(event)
    }

    return (
        <Card
            id="podcast-player"
            sx={{
                borderBottomLeftRadius: "0",
                borderBottomRightRadius: "0",
                position: "fixed",
                transition: "all 1s ease 0s",
                bottom: open
                    ? "0px"
                    : {
                          xs: "-50px",
                          sm: "-300px"
                      },
                right: {
                    xs: "0",
                    sm: "15px"
                },
                height: {
                    xs: "50px",
                    sm: "300px"
                },

                width: {
                    xs: "100%",
                    sm: "500px"
                },
                flexDirection: {
                    xs: "row",
                    sm: "column"
                },
                display: "flex",
                backgroundColor: "white"
            }}
        >
            <Box
                sx={{
                    padding: "10px",
                    display: "flex",
                    flex: "none",
                    flexDirection: "row-reverse"
                }}
            >
                <PodcastButton
                    onClick={closePlayer}
                    sx={{
                        height: "35px",
                        width: "35px"
                    }}
                >
                    <CloseIcon />
                </PodcastButton>
            </Box>
            <CardContent
                sx={{
                    flex: 1,
                    display: "flex",
                    gap: "10px",
                    flexDirection: "row",
                    alignItems: "center"
                }}
            >
                <Box>{playingSongData?.image && <Image src={playingSongData?.image} alt={`Cover for ${playingSongData?.title}`} height={100} width={100} />}</Box>
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        gap: "20px",
                        flexDirection: "column"
                    }}
                >
                    {playingSongData?.title}
                    <LinearProgress value={trackPercentage} variant="determinate" />
                    <audio id="audioPlayer" src={list?.[playingSong]?.audioUrl} onPlay={onPlaying} />
                </Box>
            </CardContent>
            <CardActions
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1em",
                    justifyContent: "center"
                }}
            >
                <PodcastButton
                    onClick={onRewind}
                    sx={{
                        height: "40px",
                        width: "40px"
                    }}
                >
                    <FastRewindIcon />
                </PodcastButton>
                <PodcastButton
                    onClick={onPlay}
                    sx={{
                        height: "75px",
                        width: "75px",
                        fontSize: "50px"
                    }}
                >
                    {play ? <PauseIcon /> : <PlayArrowIcon />}
                </PodcastButton>

                <PodcastButton
                    onClick={onForward}
                    sx={{
                        height: "40px",
                        width: "40px"
                    }}
                >
                    <FastForwardIcon />
                </PodcastButton>
            </CardActions>
        </Card>
    )
}

export default PodcastPlayer
