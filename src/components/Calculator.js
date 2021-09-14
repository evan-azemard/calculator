import React from 'react';
import AmazingNumberButton from "./AmazingNumberButton";
import BeautifullScreen from "./BeautifullScreen";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";

const Calculator = () => {
    return (
        <div>
            <div>
                <BeautifullScreen />
                <AmazingNumberButton />
                <GreatOperationButton />
                <MagnificientEqualButton />
            </div>
        </div>
    );
};

export default Calculator;