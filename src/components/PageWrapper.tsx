import { Box } from "@mui/material"


export const PageWrapper : React.FC<React.HTMLAttributes<HTMLDivElement>> = ({children}) =>{


    return <Box sx={{
        marginTop:"1em",
        marginLeft:{
            sm: "auto",
            xs: "10px",
        },
        marginRight:{
            sm: "auto",
            xs: "10px",
        },
        maxWidth: {
            sm: "1200px",
            xs: "none",
        },
    }}>{children}</Box>
}

export default PageWrapper