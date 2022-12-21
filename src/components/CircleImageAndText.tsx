import { Box, Chip, useTheme } from "@mui/material"
import hexToHsl from "hex-to-hsl"
import React from "react"
import { Technology } from "../assets/tech-stack"


export interface ICircleImageAndTextProps {
    title?: string
    technologies?: Technology[]
    image?: string
    description?: string | React.ReactNode
    deltaSaturation?: number
}

const CircleImageAndText: React.FC<ICircleImageAndTextProps> = ({ title, image, description, technologies = [], deltaSaturation = 5 }) => {
    const theme = useTheme()
    const hslColor = hexToHsl(theme.palette.primary.main)

    const darkerColor = `hsl(${hslColor[0]}, ${hslColor[1]}%, ${Math.max(0, hslColor[2] - deltaSaturation)}%)`
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                gap: "1.5em"
            }}
        >
            {image && (
                <Box
                    sx={{
                        textDecoration: "none",
                        color: "#fff",
                        backgroundColor: theme.palette.primary.main,
                        height: "100px",
                        width: "100px",
                        textAlign: "center",
                        fontSize: "50px",
                        lineHeight: "100px",
                        overflow: "hidden",
                        borderRadius: "50%",
                        textShadow: `${darkerColor} 1px 1px, ${darkerColor} 2px 2px, ${darkerColor} 3px 3px, ${darkerColor} 4px 4px, ${darkerColor} 5px 5px, ${darkerColor} 6px 6px, ${darkerColor} 7px 7px, ${darkerColor} 8px 8px, ${darkerColor} 9px 9px, ${darkerColor} 10px 10px, ${darkerColor} 11px 11px, ${darkerColor} 12px 12px, ${darkerColor} 13px 13px, ${darkerColor} 14px 14px, ${darkerColor} 15px 15px, ${darkerColor} 16px 16px, ${darkerColor} 17px 17px, ${darkerColor} 18px 18px, ${darkerColor} 19px 19px, ${darkerColor} 20px 20px, ${darkerColor} 21px 21px, ${darkerColor} 22px 22px, ${darkerColor} 23px 23px, ${darkerColor} 24px 24px, ${darkerColor} 25px 25px, ${darkerColor} 26px 26px, ${darkerColor} 27px 27px, ${darkerColor} 28px 28px, ${darkerColor} 29px 29px, ${darkerColor} 30px 30px, ${darkerColor} 31px 31px, ${darkerColor} 32px 32px, ${darkerColor} 33px 33px, ${darkerColor} 34px 34px, ${darkerColor} 35px 35px, ${darkerColor} 36px 36px, ${darkerColor} 37px 37px, ${darkerColor} 38px 38px, ${darkerColor} 39px 39px, ${darkerColor} 40px 40px, ${darkerColor} 41px 41px, ${darkerColor} 42px 42px, ${darkerColor} 43px 43px, ${darkerColor} 44px 44px, ${darkerColor} 45px 45px, ${darkerColor} 46px 46px, ${darkerColor} 47px 47px, ${darkerColor} 48px 48px, ${darkerColor} 49px 49px, ${darkerColor} 50px 50px, ${darkerColor} 51px 51px, ${darkerColor} 52px 52px, ${darkerColor} 53px 53px, ${darkerColor} 54px 54px, ${darkerColor} 55px 55px, ${darkerColor} 56px 56px, ${darkerColor} 57px 57px, ${darkerColor} 58px 58px, ${darkerColor} 59px 59px, ${darkerColor} 60px 60px, ${darkerColor} 61px 61px, ${darkerColor} 62px 62px, ${darkerColor} 63px 63px, ${darkerColor} 64px 64px, ${darkerColor} 65px 65px, ${darkerColor} 66px 66px, ${darkerColor} 67px 67px, ${darkerColor} 68px 68px, ${darkerColor} 69px 69px, ${darkerColor} 70px 70px, ${darkerColor} 71px 71px, ${darkerColor} 72px 72px, ${darkerColor} 73px 73px, ${darkerColor} 74px 74px, ${darkerColor} 75px 75px, ${darkerColor} 76px 76px, ${darkerColor} 77px 77px, ${darkerColor} 78px 78px, ${darkerColor} 79px 79px, ${darkerColor} 80px 80px, ${darkerColor} 81px 81px, ${darkerColor} 82px 82px, ${darkerColor} 83px 83px, ${darkerColor} 84px 84px, ${darkerColor} 85px 85px, ${darkerColor} 86px 86px, ${darkerColor} 87px 87px, ${darkerColor} 88px 88px, ${darkerColor} 89px 89px, ${darkerColor} 90px 90px, ${darkerColor} 91px 91px, ${darkerColor} 92px 92px, ${darkerColor} 93px 93px, ${darkerColor} 94px 94px, ${darkerColor} 95px 95px, ${darkerColor} 96px 96px, ${darkerColor} 97px 97px, ${darkerColor} 98px 98px, ${darkerColor} 99px 99px, ${darkerColor} 100px 100px`
                    }}
                >
                    <i className={image}></i>
                </Box>
            )}
            <Box className="media-body">
                {title && (
                    <Box sx={{ fontWeight: "300", fontSize: "1.5em" }} className="media-heading">
                        {title}
                    </Box>
                )}
                {technologies.map((technology, index) => <Chip size="small" label={technology.name} sx={{ backgroundColor: technology.color, color: "#fff", margin: "0.2em", fontWeight: "bold", ...index == 0 && { marginLeft: "0em" } }} />)}
                {description && <Box sx={{ marginTop: "0.5em", fontWeight: "200" }}>{description}</Box>}
            </Box>
        </Box>
    )
}

export default CircleImageAndText
