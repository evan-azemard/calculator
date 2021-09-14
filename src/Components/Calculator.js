import React from 'react';
import AmazingNumberButton from "./AmazingNumberButton";
import BeautifullScreen from "./BeautifullScreen";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";

const Calculator = () => {
    return (
        <div>
            <main>
                <div className="main">
                    <BeautifullScreen />
                    <div className="button">
                        <AmazingNumberButton />
                        <GreatOperationButton />
                    </div>
                    <MagnificientEqualButton />
                </div>
            </main>
        </div>
    );
};

export default Calculator;