import React from 'react';


const AmazingNumberButton = ({content, onButtonClick, type }) => {
    return (
        <>
            <button className={`btn_n ${content ==="0" ? "zero" : ""} ${type || ""}`} onClick={onButtonClick(content)}
            >
                {content}
            </button>        </>
    );
};

export default AmazingNumberButton;