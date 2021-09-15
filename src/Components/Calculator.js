import React from 'react';
import AmazingNumberButton from "./AmazingNumberButton";
import BeautifullScreen from "./BeautifullScreen";
import GreatOperationButton from "./GreatOperationButton";
import TheTitle from "./TheTitle";
import MagnificientEqualButton from "./MagnificientEqualButton";

const Calculator = () => {
    return (
        <div>
            <main>
                <div className="main">
                    <BeautifullScreen />
                    <TheTitle />
                    <div className="button">
                        <div className="but_cont">
                            <AmazingNumberButton label="9"/>
                            <AmazingNumberButton label="8"/>
                            <AmazingNumberButton label="7"/>
                            <AmazingNumberButton label="6"/>
                            <AmazingNumberButton label="5"/>
                            <AmazingNumberButton label="4"/>
                            <AmazingNumberButton label="3"/>
                            <AmazingNumberButton label="2"/>
                            <AmazingNumberButton label="1"/>
                            <AmazingNumberButton label="0"/>
                            <MagnificientEqualButton />
                            <button className="btn plus">+</button>
                        </div>
                        <div className="mag_but">
                            <GreatOperationButton label="Supp"/>
                            <GreatOperationButton label=","/>
                            <GreatOperationButton label="-"/>
                            <GreatOperationButton label="*"/>
                            <GreatOperationButton label="/"/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Calculator;