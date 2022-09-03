import { Button, Card, Link, Slide, Typography, useTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { Box } from "@mui/system";
import hexRgb from "hex-rgb";
import useHover from "../hooks/useHover";
import AOSBox from "./AOSBox";

export interface IHeroProps {
  image: string;
  title: string;
  subtitle?: string;
  date?: string;
  place?: string;
}

const Hero: React.FC<IHeroProps> = ({
  date,
  place,
  image,
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
          <h1>{title}</h1>
        </AOSBox>
        <AOSBox dataAos="fade-down" dataAosDelay="200">
          {subtitle && <Box>{subtitle}</Box>}
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
        
          {date && <Box>Date image {date}</Box>}
          {place && <Box>Date image {place}</Box>}
        
      </Box>
    </Box>
  );
};

export default Hero;
