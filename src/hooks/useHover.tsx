import { useEffect, useRef, useState } from "react"

export enum HoverType {
    MOUSEOVER,
    MOUSEOUT
}
export default function useHover() {
    const [isHovered, setIsHovered] = useState(false)
    const [hoverType, setHoverType] = useState<HoverType>()
    const hoverRef = useRef(null)
    const handleMouseOver = () => {
        setIsHovered(true)
        setHoverType(HoverType.MOUSEOVER)
    }
    const handleMouseOut = () => {
        setIsHovered(false)
        setHoverType(HoverType.MOUSEOUT)
    }
    useEffect(
        () => {
            const node = hoverRef.current
            if (node) {
                node.addEventListener("mouseover", handleMouseOver)
                node.addEventListener("mouseout", handleMouseOut)
                return () => {
                    node.removeEventListener("mouseover", handleMouseOver)
                    node.removeEventListener("mouseout", handleMouseOut)
                }
            }
        },
        [hoverRef.current] // Recall only if ref changes
    )
    return { hoverRef, isHovered, hoverType }
}
