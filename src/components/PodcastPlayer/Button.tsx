import { Button, ButtonProps } from "@mui/material"

const PodcastButton: React.FC<ButtonProps> = ({ sx, ...props }) => {
    return (
        <Button
            {...props}
            sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "100%",
                height: "35px",
                width: "35px",
                margin: "0 !important",
                minWidth: "0px",
                minHeight: "0px",
                "&:hover": {
                    backgroundColor: "#666"
                },
                ...sx
            }}
        />
    )
}

export default PodcastButton
