import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

interface CTABandProps {
    secondaryText?: string
    primaryText?: string
    buttonText?: string
    onClick?: () => void
}

export default function CTABand({ secondaryText, primaryText, buttonText, onClick }: CTABandProps) {

    return (
        <div className="cta-band">
            <Typography variant="h3">
                {secondaryText}
            </Typography>
            <Typography variant="h3">
                {primaryText}
            </Typography>
            <Button variant="outlined" onClick={onClick}>{buttonText}</Button>

        </div>
    )
}