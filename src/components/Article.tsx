import { Box } from "@mui/material"
import IArticleData, { IArticleDataType } from "../types/IArticleData"
import CarouselBand from "./bands/CarouselBand"
import CoutnersBand from "./bands/CoutnersBand"
import CtaBand from "./bands/CtaBand"
import TextBand from "./bands/TextBand"
import TextImageBand from "./bands/TextImageBand"
import TitleBand from "./bands/TitleBand"

export interface IArticleProps{
    data?: IArticleData[],
}

const Article : React.FC<IArticleProps> = ({ data }) =>{
    if(!data) return null
    return <Box sx={{display: "flex", flexDirection: "column"}}>
        {data.map((item : IArticleData, index : number) => {
            switch(item.type){
                case IArticleDataType.CAROUSEL:
                    return <CarouselBand {...item} key={index} />
                    break;
                case IArticleDataType.COUNTERS:
                    return <CoutnersBand {...item}  key={index} />
                    break;     
                case IArticleDataType.CTA:
                    return <CtaBand {...item}  key={index} />
                    break;     
                case IArticleDataType.IMAGE_TEXT:
                    return <TextImageBand {...item}  key={index} />
                    break;     
                case IArticleDataType.TEXT_IMAGE:
                    return <TextImageBand {...item}  key={index} inverted={true}/>
                    break;     
                case IArticleDataType.TEXT:
                    return <TextBand {...item}  key={index} />
                    break;     
                case IArticleDataType.TITLE:
                    return <TitleBand {...item}   key={index}/>
                    break;     
                default:
                    return <></>
                    break;
            }
        })}
    </Box>
}

export default Article