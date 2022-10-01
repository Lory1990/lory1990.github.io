import { Box, SxProps } from "@mui/material";

export interface ICardsBandProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number;
}

const CardsBand: React.FC<ICardsBandProps> = ({ children, columns }) => {
  let theme: SxProps;

  if (columns) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs:`1fr`, 
              md:`repeat(${columns}, 1fr)`, 
            },
            columnGap: "40px",
            rowGap: "40px",
            margin: "40px 0px",
            
          }}
        >
          {children}
        </Box>
      </Box>
    );
  } else {
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        justifyContent: "center",
        margin: "40px 0px",
      }}
    >
      {children}
    </Box>;
  }
};

export default CardsBand;
