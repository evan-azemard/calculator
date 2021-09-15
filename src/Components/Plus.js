import React from 'react';

const Plus = ({content, onButtonClick, type }) => {
    return (
            <button type="operator" className={`btn plus ${content ==="0" ? "zero" : ""} ${type || ""}`} onClick={onButtonClick(content)}>
                {content}
            </button>
    );
};

export default Plus;


