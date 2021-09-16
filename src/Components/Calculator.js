import React, {memo, useState} from 'react';
import AmazingNumberButton from "./AmazingNumberButton";
import BeautifullScreen from "./BeautifullScreen";
import GreatOperationButton from "./GreatOperationButton";
import TheTitle from "./TheTitle";
import MagnificientEqualButton from "./MagnificientEqualButton";
import Plus from "./Plus";
import ItSOverNineThousand from "./ItSOverNineThousand";
import Save from "./Save";

const Calculator = () => {

    const [memory, setMemory] = useState("");

    const PressButton = content => () =>
    {
        ItSOverNineThousand(content,setMemory,memory);
    };


    return (
        <div>
            <main>
                <div className="main">
                    <BeautifullScreen  props={memory}/>
                    <TheTitle text="Calculator9000"/>
                    <Save text="Save" onButtonClick={PressButton}/>
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