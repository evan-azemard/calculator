import React from "react";

const TheTitle = (props) => {
    return (
        <div>
            <div className="TheTitle">
                <h1>{props.text}</h1>
            </div>
        </div>
    );
}
export default TheTitle;