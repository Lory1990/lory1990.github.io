import { Box } from '@mui/material'
import style from './ScrollIcon.module.css'
const ScrollIcon : React.FC = () =>{

    return <Box sx={theme =>({
        position: "relative",
        width: "25px",
        height: "45px",
        boxShadow: "inset 0 0 0 1px "+ theme.palette.primary.main,
        borderRadius: "25px",
        "&:before":{
            content: "''",
            position: "absolute",
            left: "50%",
            width: "6px",
            height: "6px",
            background: theme.palette.primary.main,
            marginLeft: "-3px",
            top: "8px",
            borderRadius: "4px",
            animationDuration: "1.5s",
            animationIterationCount: "infinite",
        }
        })} 
    className={style["icon-scroll"]}></Box>
}

export default ScrollIcon