import React from 'react';
import Plus from "./Plus";

const GreatOperationButton = ({content, onButtonClick}) => {
    return (
        <>
            <button type="operator" className="btn" onClick={onButtonClick(content)}>{content}</button>
        </>
    );
};


export default GreatOperationButton;

