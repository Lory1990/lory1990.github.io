import IArticleData from "../../types/IArticleData"
import Title from "../typography/Title"

export interface ITitleBandProps extends Omit<React.HTMLProps<HTMLDivElement>, "type">, IArticleData{}
const TitleBand: React.FC<ITitleBandProps> = ({children}) => {
    return <Title>{children}</Title>
}

export default TitleBand
