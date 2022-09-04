import { Button, Card, Link, Slide, Typography, useTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { Box } from "@mui/system";
import hexRgb from "hex-rgb";
import useHover from "../hooks/useHover";
import AOSBox from "./AOSBox";
import EventIcon from '@mui/icons-material/Event';
import PlaceIcon from '@mui/icons-material/Place';
import { url } from "inspector";

interface ISingleDataProps{
  text?:string,
  icon?: JSX.Element
}

const SingleData : React.FC<ISingleDataProps> = ({icon, text}) => {
  
  if(!text) return null;

  return (<Typography
     sx={{
      display: "flex",
      alignItems: "center",
      gap: "5px"
     }}
  >{icon} {text}</Typography>)
}
export interface IHeroProps {
  title: string;
  subtitle?: string;
  date?: string;
  place?: string;
  backgroundImage?: string;
}

const Hero: React.FC<IHeroProps> = ({
  date,
  place,
  backgroundImage,
  title,
  subtitle,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: "1em",
        width: "100%",
        background: "red",
        backgroundImage: 'url('+backgroundImage+')',
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          flex: "1",
        }}
      >
        <AOSBox dataAos="fade-down">
          <Typography variant="h1" sx={{ color: "white", fontWeight: "bold"}}>{title}</Typography>
        </AOSBox>
        <AOSBox dataAos="fade-down" dataAosDelay="200">
          {subtitle && <Typography variant="subtitle1" sx={{ color: "white", fontSize: "1.5em"}} >{subtitle}</Typography>}
        </AOSBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flex: "none",
        }}
      >
        <SingleData
          text={date}
          icon={<EventIcon />}
        />
        <SingleData
          text={place}
          icon={<PlaceIcon />} 
        />
        
      </Box>
    </Box>
  );
};

export default Hero;
