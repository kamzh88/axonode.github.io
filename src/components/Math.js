import React from "react";

const Math = (props) => {
    let value;
    let {num1, num2, operator} = props;
    switch (operator) {
        case "+":
            value = num1 + num2;
            break;
        case "-":
            value = num1 - num2;
            break;
        case "*":
            value = num1 * num2;
        case "/":
            value = num1 / num2;
            break;
        default: value = NaN;
    }

    return <span>{value}</span>
};

export default Math;