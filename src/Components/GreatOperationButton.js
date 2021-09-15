import React from 'react';

const GreatOperationButton = ({content, onButtonClick, type}) => {
    return (
        <>
            <button  className={`btn ${content ==="0" ? "zero" : ""} ${type || ""}`} onClick={onButtonClick(content)}>
                {content}

            </button>
        </>
    );
};


export default GreatOperationButton;