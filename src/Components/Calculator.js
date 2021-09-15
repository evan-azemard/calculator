import React, {useState} from 'react';
import AmazingNumberButton from "./AmazingNumberButton";
import BeautifullScreen from "./BeautifullScreen";
import GreatOperationButton from "./GreatOperationButton";
import TheTitle from "./TheTitle";
import MagnificientEqualButton from "./MagnificientEqualButton";
import Plus from "./Plus";

const Calculator = () => {
    const [value, setValue] = useState("0");
    const [memory, setMemory] = useState("null");
    const [operator, setOperator] = useState("null");

    const PressButton = content => () => {

        const num = parseFloat(value);

        if (content === "Supp") {
            setValue("0");
            setMemory("null");
            setOperator("null");
            return;
        }

        if (content === "+" ) {
            setMemory(parseFloat(value));
            setValue("0");
            setOperator("+")
            return;
        }

        if (content === "*" ) {
            setMemory(parseFloat(value));
            setValue("0");
            setOperator("*");
            return;
        }

        if (content === "-" ) {
            setMemory(parseFloat(value));
            setValue("0");
            setOperator("-")
            return;
        }

        if (content === "/" ) {
            setMemory(parseFloat(value));
            setValue("0");
            setOperator("/");
            return;
        }

        if (content === "=" ) {
            if (!operator) return;

            if (operator === '+'){
                setValue((memory + parseFloat(value)).toString());
            }else  if (operator === "-"){
                setValue((memory - parseFloat(value).toString()));
            }else if (operator === '*'){
                setValue((memory * parseFloat(value)).toString());
            }else if (operator === "/"){
                setValue((memory / parseFloat(value).toString()))
            }
            setMemory(parseFloat(value));
            setValue("null");
            setOperator("null")
            return;
        }




        setValue((parseFloat(num) + content).toString())
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