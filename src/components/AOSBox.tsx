import React from "react";
import IAOSProps from "../types/IAOSProps";

export interface AosBoxProps extends React.HTMLAttributes<HTMLDivElement>, IAOSProps {}

export const AOSBox: React.FC<AosBoxProps> = ({
    style,
    children,
    className,
    dataAosDuration,
    dataAos,
    dataAosOffset,
    dataAosAnchorPlacement,
    dataAosOnce,
    dataAosDelay,
    dataAosEasing,
    dataAosMirror,
    onlyDesktop,
    ...rest
}) => {
    let animate = true

    return (
        <div
            style={style}
            data-aos={animate ? dataAos : undefined}
            data-aos-offset={animate ? dataAosOffset : undefined}
            data-aos-delay={animate ? dataAosDelay : undefined}
            data-aos-duration={animate ? dataAosDuration : undefined}
            data-aos-easing={animate ? dataAosEasing : undefined}
            data-aos-mirror={animate ? dataAosMirror : undefined}
            data-aos-once={animate ? dataAosOnce : undefined}
            data-aos-anchor-placement={animate ? dataAosAnchorPlacement : undefined}
            className={className}
            {...rest}
        >
            {children}
        </div>
    )
}

export default AOSBox
