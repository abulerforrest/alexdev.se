import * as React from "react";

import { svgIcons } from "../../themes/svg-paths";
import { IconTypes } from "../ActionIcons";

interface SVGIconInputProps {
    width: string | number,
    fill: string
}

const getPath = (iconType: IconTypes, props: SVGIconInputProps) => {

    const type = Object.getOwnPropertyNames(svgIcons)[iconType];

    return <path {...props} d={svgIcons[type].d} />;
}

interface SVGIconProps {
    iconType: IconTypes
    style?: React.CSSProperties
    fill?: string
    height?: number | string
    width?: number | string
    className?: string
    viewBox?: string
    preserveAspectRatio?: string
    onClick?: () => void
}

const SVGIcon = ({
    // default
    style = {},
    width = 30,
    fill = "#000",
    className = "",
    height = "100%",
    iconType = null!,
    viewBox = "0 0 24 24",
    preserveAspectRatio = "none",
    onClick = () => {}
}: SVGIconProps) =>
    <div onClick={onClick}>
        <svg
            width={width}
            style={style}
            height={height}
            viewBox = {viewBox}
            className={className}
            preserveAspectRatio={preserveAspectRatio}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            
        >
            {getPath(iconType, { width, fill })}
        </svg>
    </div>;

export default SVGIcon;