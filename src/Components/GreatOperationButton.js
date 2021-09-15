import React from 'react';
import Plus from "./Plus";

const GreatOperationButton = ({content, onButtonClick, type}) => {
    return (
        <>
            <button type="operator" className={`btn ${content ==="0" ? "zero" : ""} ${type || ""}`} onClick={onButtonClick(content)}>
                {content}

            </button>
        </>
    );
};


export default GreatOperationButton;

