import React from "react";
import './CustomArrow.less';

export const CustomArrow = (props) => {
    const {className, style, onClick} = props;
    const arrowClassNames = `${props.customArrowClassList} ${className}`
    return (
        <div
            className={arrowClassNames}
            style={{...style}}
            onClick={onClick}
        />
    );
}