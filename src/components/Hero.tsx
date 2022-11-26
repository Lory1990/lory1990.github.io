import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import AOSBox from "./AOSBox";
import EventIcon from '@mui/icons-material/Event';
import PlaceIcon from '@mui/icons-material/Place';

interface ISingleDataProps {
  text?: string,
  icon?: JSX.Element
}

const SingleData: React.FC<ISingleDataProps> = ({ icon, text }) => {

  if (!text) return null;

  return (<Typography
    sx={{
      display: "flex",
      alignItems: "center",
      gap: "5px"
    }}
  >{icon} {text}</Typography>)
}
export interface IHeroProps {
  title?: string;
  subtitle?: string;
  date?: string;
  place?: string;
  backgroundImage?: string;
  hideTitleOnCover?: boolean;
  color?: string
}

const Hero: React.FC<IHeroProps> = ({
  date,
  place,
  backgroundImage,
  title,
  color = "white",
  subtitle,
  hideTitleOnCover,

}) => {

  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: "1em",
        width: "100%",
        background: "darkgrey",
        backgroundImage: 'url(' + backgroundImage + ')',
        backgroundSize: "cover",
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
        {!hideTitleOnCover &&
          <>
            <AOSBox dataAos="fade-down">
              <Typography variant="h1" sx={{ color, fontWeight: "bold", fontSize: { sm: "6rem", xs: "4em" } }}>{title}</Typography>
            </AOSBox>
            <AOSBox dataAos="fade-down" dataAosDelay="200">
              {subtitle && <Typography variant="subtitle1" sx={{ color, fontSize: "1.5em" }} >{subtitle}</Typography>}
            </AOSBox>
          </>
        }
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            sm: "row",
            xs: "column"
          },
          gap: "0.75em",
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
