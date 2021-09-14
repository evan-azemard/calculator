import React from 'react';
import AmazingNumberButton from "./AmazingNumberButton";
import BeautifullScreen from "./BeautifullScreen";
import GreatOperationButton from "./GreatOperationButton";
import TheTitle from "./TheTitle";

const Calculator = () => {
    return (
        <div>
            <main>
                <div className="main">
                    <BeautifullScreen />
                    <TheTitle />
                    <div className="button">
                        <AmazingNumberButton label="1"/>
                        <GreatOperationButton />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Calculator;