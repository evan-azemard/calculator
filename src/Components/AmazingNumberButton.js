import React from 'react';
import MagnificientEqualButton from "./MagnificientEqualButton";


const AmazingNumberButton = () => {
    return (
        <div>
            <div className="but_cont">
                <button className="btn_n">7</button>
                <button className="btn_n">8</button>
                <button className="btn_n">9</button>
                <button className="btn_n">4</button>
                <button className="btn_n">5</button>
                <button className="btn_n">6</button>
                <button className="btn_n">1</button>
                <button className="btn_n">2</button>
                <button className="bnt plus">+</button>
                <button className="btn_n">3</button>
                <button className="btn_n">0</button>
                <MagnificientEqualButton />
            </div>
        </div>
    );
};

export default AmazingNumberButton;