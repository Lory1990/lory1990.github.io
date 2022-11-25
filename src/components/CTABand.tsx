import { Box, Button, Card, CardContent, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';

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
            <Card sx={{ width: "70%", backgroundColor: theme.palette.primary.main }}>
                <CardContent sx={{ padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography variant="h3" color="white" align="center" sx={{ fontWeight: "Bold" }}>
                        {primaryText}
                    </Typography>

                    <Typography variant="body1" color="white" align="center" sx={{ fontWeight: "Bold" }}>
                        {secondaryText}
                    </Typography>

                    <Button variant="outlined" onClick={onClick}>{buttonText}</Button>
                </CardContent>
            </Card>
        </Box>
    )
}