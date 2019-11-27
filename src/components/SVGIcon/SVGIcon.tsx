import * as React from "react";

import { svgIcons } from "../../themes/svg-paths";
import { ActionIconTypes } from "../ActionIcons";

const getViewBox = (iconType: ActionIconTypes) => {
    switch (iconType) {
        case 0:
            return svgIcons.print.viewBox;
        case 1:
            return svgIcons.download.viewBox;
        default:
            return "0 0 24 24";
    }
};

const getPath = (iconType: ActionIconTypes, props: any) => {
    switch(iconType) {
        case 0:
            return <path {...props} d={svgIcons.print.d} />;
        case 1:
            return <path {...props} d={svgIcons.download.d} />;

        default:
            return <path />;
    }
}

interface SVGIconProps {
    iconType: ActionIconTypes
    style?: any
    fill?: string
    height?: number | string
    width?: number | string
    className?: any
    viewBox?: string
}

const SVGIcon = ({
    style = {},
    width = 30,
    fill = "#000",
    className = "",
    height = "100%",
    iconType = null!,
    viewBox = "0 0 24 24"
}: SVGIconProps) =>
    <svg
        width={width}
        style={style}
        height={height}
        viewBox = {viewBox || getViewBox(iconType)}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        {getPath(iconType, { fill })}
    </svg>;

export default SVGIcon;