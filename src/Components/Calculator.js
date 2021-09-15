import React, {useState} from 'react';
import AmazingNumberButton from "./AmazingNumberButton";
import BeautifullScreen from "./BeautifullScreen";
import GreatOperationButton from "./GreatOperationButton";
import TheTitle from "./TheTitle";
import MagnificientEqualButton from "./MagnificientEqualButton";

const Calculator = () => {
    const [value, setValue] = useState("bonjour");

    const PressButton = content => () => {
        setValue((parseFloat(value) + content).toString())
    };
    return (
        <div>
            <main>
                <div className="main">
                    <BeautifullScreen  props={value}/>
                    <TheTitle text="Calculator9000"/>
                    <div className="button">
                        <div className="but_cont">
                            <AmazingNumberButton onButtonClick={PressButton} content="7"/>
                            <AmazingNumberButton onButtonClick={PressButton} content="8"/>
                            <AmazingNumberButton onButtonClick={PressButton} content="9"/>
                            <AmazingNumberButton onButtonClick={PressButton} content="4"/>
                            <AmazingNumberButton onButtonClick={PressButton} content="5"/>
                            <AmazingNumberButton onButtonClick={PressButton} content="6"/>
                            <AmazingNumberButton onButtonClick={PressButton} content="1"/>
                            <AmazingNumberButton onButtonClick={PressButton} content="2"/>
                            <AmazingNumberButton onButtonClick={PressButton} content="3"/>
                            <AmazingNumberButton onButtonClick={PressButton} content="0"/>
                            <MagnificientEqualButton onButtonClick={PressButton} content="="/>
                            <button onButtonClick={PressButton} className="btn plus">+</button>
                        </div>
                        <div className="mag_but">
                            <GreatOperationButton onButtonClick={PressButton} content="Supp"/>
                            <GreatOperationButton onButtonClick={PressButton} content=","/>
                            <GreatOperationButton onButtonClick={PressButton} content="-"/>
                            <GreatOperationButton onButtonClick={PressButton} content="*"/>
                            <GreatOperationButton onButtonClick={PressButton} content="/"/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Calculator;