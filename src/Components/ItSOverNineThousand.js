import React from 'react';

function ItSOverNineThousand (content,setMemory,memory,setValue,value){

    const num = parseFloat(value);

        if (content === "Supp")
        {
            setMemory("");
            return;
        }
        if (content === "+" )
        {
            setMemory(memory + "+")
            return;
        }
        if (content === "*" )
        {
            setMemory(memory + "*");
            return;
        }
        if (content === "-" )
        {
            setMemory(memory + "-")
            return;
        }
        if (content === "/" )
        {
            setMemory(memory + "/");
            return;
        }
        if (content === "1" || content === "2" || content === "3" || content === "4" || content === "5" || content === "6" || content === "7" || content === "8" || content === "9" || content === "0" ) {
            setMemory(memory + content);
            return;
        }

        if (content === "=" )
        {
            const val = eval(memory);

            if (val > 9000)
            {
                setMemory("It’s Over 9000 !!!")
            }
            if (val < 9000)
            {
                setMemory(eval(memory))
            }
            return;
        }

    setValue((parseFloat(num) + content))

}

export default ItSOverNineThousand;