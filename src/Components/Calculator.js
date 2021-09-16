import React, {memo, useState} from 'react';
import AmazingNumberButton from "./AmazingNumberButton";
import BeautifullScreen from "./BeautifullScreen";
import GreatOperationButton from "./GreatOperationButton";
import TheTitle from "./TheTitle";
import MagnificientEqualButton from "./MagnificientEqualButton";
import Plus from "./Plus";

const Calculator = () => {
    const [value, setValue] = useState("0");
    const [memory, setMemory] = useState("null5");

    const PressButton = content => () => {

        const num = parseFloat(value);

        if (content === "Supp") {
            setMemory("");
            return;
        }

        if (content === "+" ) {
            setMemory(memory + "+")
            return;
        }

        if (content === "*" ) {
            setMemory(memory + "*");
            return;
        }

        if (content === "-" ) {
            setMemory(memory + "-")
            return;
        }

        if (content === "/" ) {
            setMemory(memory + "/");
            return;
        }

        if (typeof val === "number"){
            setMemory(memory + content);
            return;
        }
        if (content === "1" || content === "2" || content === "3" || content === "4" || content === "5" || content === "6" || content === "7" || content === "8" || content === "9" || content === "0" ) {
            setMemory(memory + content);
            return;
        }

        if (content === "=" ) {
            const val = eval(memory);
            if (val > 9000){

                setMemory("It’s Over 9000 !!!")
            }
            else if (val < 9000) {
                setMemory(eval(memory))
            }
            return;
        }



        setValue((parseFloat(num) + content))

    };
    return (
        <div>
            <main>
                <div className="main">
                    <BeautifullScreen  props={memory}/>
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
                            <Plus onButtonClick={PressButton} content="+" />
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