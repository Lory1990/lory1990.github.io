import { Box } from "@mui/material"
import IArticleData, { IArticleDataType } from "../types/IArticleData"
import CarouselBand from "./bands/CarouselBand"
import CountersBand from "./bands/CountersBand"
import CtaBand from "./bands/CtaBand"
import { ImageBand } from "./bands/ImageBand"
import TextBand from "./bands/TextBand"
import TextImageBand from "./bands/TextImageBand"
import TitleBand from "./bands/TitleBand"
import VideoTextBand from "./bands/VideoTextBand"

export interface IArticleProps {
    data?: IArticleData[]
}

const Article: React.FC<IArticleProps> = ({ data }) => {
    if (!data) return null
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            {data.map((item: IArticleData, index: number) => {
                switch (item.type) {
                    case IArticleDataType.CAROUSEL:
                        return <CarouselBand {...item} key={index} />
                        break
                    case IArticleDataType.COUNTERS:
                        return <CountersBand {...item} key={index} />
                        break
                    case IArticleDataType.IMAGE:
                        return <ImageBand {...item} key={index} />
                        break
                    case IArticleDataType.CTA:
                        return <CtaBand {...item} key={index} />
                        break
                    case IArticleDataType.IMAGE_TEXT:
                        return <TextImageBand {...item} key={index} />
                        break
                    case IArticleDataType.TEXT_IMAGE:
                        return <TextImageBand {...item} key={index} inverted={true} />
                        break
                    case IArticleDataType.TEXT:
                        return <TextBand {...item} key={index} />
                        break
                    case IArticleDataType.TITLE:
                        return <TitleBand {...item} key={index} />
                        break
                    case IArticleDataType.TEXT_VIDEO:
                        return <VideoTextBand {...item} key={index} />
                        break
                    case IArticleDataType.VIDEO_TEXT:
                        return <VideoTextBand {...item} key={index} inverted={true} />
                        break
                    default:
                        return null
                        break
                }
            })}
        </Box>
    )
}

export default Article
