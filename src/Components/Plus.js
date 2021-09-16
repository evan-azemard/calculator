import React from 'react';

const Plus = ({content, onButtonClick }) => {
    return (
            <button type="operator" className="btn plus" onClick={onButtonClick(content)}>{content}</button>
    );
};

export default Plus;


