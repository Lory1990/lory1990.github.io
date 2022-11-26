import { Box, Button, Card, CardContent, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image'

interface CTABandProps {
    secondaryText?: string
    primaryText?: string
    buttonText?: string
    onClick?: () => void
}

export default function CTABand({ secondaryText, primaryText, buttonText, onClick }: CTABandProps) {
    const theme = useTheme()
    return (
        <Box sx={{ alignContent: "center", display: "flex", justifyContent: "center" }}>
            <Card sx={{
                width: "70%",
                display: "flex",
                justifyContent: "center",
                backgroundColor: theme.palette.primary.main
            }}>
                <Box sx={{
                    height: "100%",
                    width: "100%",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Box sx={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-around",
                        position: "absolute"
                    }}>
                        <Image src="/CTA-Circles.svg" alt="" width="175" height="175" />
                        <Image style={{ transform: "scale(-1,1)" }} src="/CTA-Circles.svg" alt="me" width="175" height="175" />
                    </Box>
                    <CardContent sx={{
                        padding: "3rem 0rem 3rem 0rem",
                        marginBottom: "1rem",
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}>

                        <Typography variant="h4" color="white" align="center" sx={{ fontWeight: "Bold" }}>
                            {primaryText}
                        </Typography>

                        <Typography variant="body1" color="white" align="center" sx={{ fontWeight: "Bold" }}>
                            {secondaryText}
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                            <Button variant="contained" color='inherit' disableElevation onClick={onClick}>{buttonText}</Button>

                        </Box>
                    </CardContent>
                </Box>

            </Card>
        </Box>
    )
}