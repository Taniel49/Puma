import React from "react";
import './CustomArrow.less';

export const CustomArrow = ({className, style, onClick, customArrowClassList}) => {
    const arrowClassNames = `${customArrowClassList} ${className}`
    return (
        <div
            className={arrowClassNames}
            style={{...style}}
            onClick={onClick}
        />
    );
}