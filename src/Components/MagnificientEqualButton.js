import React from 'react';

const MagnificientEqualButton = ({content, onButtonClick }) => {
    return (
            <div className="but_enter">
                <button  type="operator" className="best_but" onClick={onButtonClick(content)}>{content}</button>
            </div>
    );
};

export default MagnificientEqualButton;


