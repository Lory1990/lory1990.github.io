import Title from "../typography/Title"

export interface ITitleBandProps extends React.HTMLProps<HTMLDivElement> {}
const TitleBand: React.FC<ITitleBandProps> = ({ children }) => {
    return <Title>{children}</Title>
}

export default TitleBand
