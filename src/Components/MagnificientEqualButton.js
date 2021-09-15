import React from 'react';

const MagnificientEqualButton = ({content, onButtonClick, type }) => {
    return (
            <div className="but_enter">
                <button className={`best_but ${content ==="0" ? "zero" : ""} ${type || ""}`} onClick={onButtonClick(content)}>
                    {content}
                </button>
            </div>
    );
};

export default MagnificientEqualButton;


