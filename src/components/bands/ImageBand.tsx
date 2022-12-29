import Image from "next/image"
import PageWrapper from "../PageWrapper"

export interface IImageBandProps {
    image?: string | string[]
    imageAlt?: string
}

export const ImageBand: React.FC<IImageBandProps> = ({ image, imageAlt }) => {
    return (
        <PageWrapper sx={{ textAlign: "center" }}>
            <img src={image as string} alt={imageAlt} style={{ width: "100%" }} />
        </PageWrapper>
    )
}
