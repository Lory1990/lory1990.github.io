import IArticleData from "../types/IArticleData"

export interface IArticleProps{
    data: IArticleData[],
}

const Article : React.FC<IArticleProps> = ({ data }) =>{
    return <div>

    </div>
}

export default Article