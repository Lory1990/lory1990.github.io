import { Box, Button } from "@mui/material"
import { useState } from "react"

export interface IListWithShowMore {
    list: unknown[]
    sliceList: number
    animationComponent?: any
    animationComponentProps?: any
    singleElementComponent: any
    singleElementComponentProps?: any
}

const ListWithShowMore: React.FC<IListWithShowMore> = ({ list, animationComponent, animationComponentProps, singleElementComponent, sliceList }) => {
    const [showOther, setShowOther] = useState<boolean>()

    const AnimationComponent = animationComponent
    const SingleElementComponent = singleElementComponent

    const payload = (
        <>
            {list?.slice?.(0, sliceList)?.map?.((data: any, index: number) => (
                <SingleElementComponent key={data.slug} {...data} index={index} />
            ))}
            {!showOther && (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Button onClick={() => setShowOther(true)} color="primary" variant="contained">
                        Show more
                    </Button>
                </Box>
            )}
        </>
    )

    const payloadMore = (
        <>
            {list?.slice?.(sliceList)?.map?.((data: any, index: number) => (
                <SingleElementComponent key={data.slug} {...data} index={index} />
            ))}
        </>
    )
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                marginBottom: "15px"
            }}
        >
            {AnimationComponent ? <AnimationComponent {...animationComponentProps}>{payload}</AnimationComponent> : <>{payload}</>}
            {showOther && <>{AnimationComponent ? <AnimationComponent {...animationComponentProps}>{payloadMore}</AnimationComponent> : <>{payloadMore}</>}</>}
        </Box>
    )
}
export default ListWithShowMore
