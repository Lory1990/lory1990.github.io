import { Box } from '@mui/material';


const CardsBand : React.FC<React.HTMLAttributes<HTMLDivElement>> = ({  children }) => {

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                justifyContent: "center",
                margin: "40px 0px"
            }}>
            {children}
        </Box>
    )
}

export default CardsBand