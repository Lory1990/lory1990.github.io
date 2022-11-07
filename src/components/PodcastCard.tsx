import { Box, SxProps } from "@mui/material";
import { IPodcast } from "../assets/podcast-list";

export interface IPodcastCardProps extends IPodcast {
  
}

const PodcastCard: React.FC<IPodcastCardProps> = ({ title, date,image, slug, link }) => {

  return <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        justifyContent: "center",
        margin: "40px 0px",
      }}
    >
      <iframe src={link.replace("episodes/", "embed/episodes/")} style={{border: "0"}}  width="100%" scrolling="no"></iframe>
    </Box>;
    
};

export default PodcastCard;
