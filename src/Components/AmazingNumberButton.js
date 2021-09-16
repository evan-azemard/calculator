import React from 'react';


const AmazingNumberButton = ({content, onButtonClick }) => {
    return (
        <>
            <button className="btn_n" onClick={onButtonClick(content)}>{content}</button>
        </>
    );
};

export default AmazingNumberButton;