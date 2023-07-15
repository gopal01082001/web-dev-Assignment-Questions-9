// Q. 10 Build Calculator Web app using React ?
// Certainly! Here's an example of a calculator web app using React:
// import React, { useState } from 'react';
// function Calculator() {
//   const [displayValue, setDisplayValue] = useState('0');
//   const [prevValue, setPrevValue] = useState(null);
//   const [operator, setOperator] = useState(null);

//   const handleNumberClick = (num) => {
//     if (displayValue === '0' || operator !== null) {
//       setDisplayValue(num.toString());
//       setOperator(null);
//     } else {
//       setDisplayValue(displayValue + num.toString());
//     }
//   };

//   const handleOperatorClick = (op) => {
//     if (operator === null) {
//       setPrevValue(parseFloat(displayValue));
//       setDisplayValue('0');
//       setOperator(op);
//     }
//   };
//   const handleEqualClick = () => {
//     if (operator !== null) {
//       const currentValue = parseFloat(displayValue);
//       let result;  
//       switch (operator) {
//         case '+':
//           result = prevValue + currentValue;
//           break;
//         case '-':
//           result = prevValue - currentValue;
//           break;
//         case '*':
//           result = prevValue * currentValue;
//           break;
//         case '/':
//           result = prevValue / currentValue;
//           break;
//         default:
//           return;
//       }
      
//       setDisplayValue(result.toString());
//       setPrevValue(result);
//       setOperator(null);
//     }
//   };
//   const handleClearClick = () => {
//     setDisplayValue('0');
//     setPrevValue(null);
//     setOperator(null);
//   };
//   return (
//     <div className="calculator">
//       <div className="display">{displayValue}</div>
//       <div className="buttons">
//         <button onClick={() => handleNumberClick(7)}>7</button>
//         <button onClick={() => handleNumberClick(8)}>8</button>
//         <button onClick={() => handleNumberClick(9)}>9</button>
//         <button onClick={() => handleOperatorClick('/')}>/</button>
//         <button onClick={() => handleNumberClick(4)}>4</button>
//         <button onClick={() => handleNumberClick(5)}>5</button>
//         <button onClick={() => handleNumberClick(6)}>6</button>
//         <button onClick={() => handleOperatorClick('*')}>*</button>
//         <button onClick={() => handleNumberClick(1)}>1</button>
//         <button onClick={() => handleNumberClick(2)}>2</button>
//         <button onClick={() => handleNumberClick(3)}>3</button>
//         <button onClick={() => handleOperatorClick('-')}>-</button>
//         <button onClick={() => handleNumberClick(0)}>0</button>
//         <button onClick={handleClearClick}>C</button>
//         <button onClick={handleEqualClick}>=</button>
//         <button onClick={() => handleOperatorClick('+')}>+</button>
//       </div>
//     </div>
//   );
// }
// export default Calculator;
// In this example, we create a Calculator component that maintains the state of the display value, previous value, and the operator. The calculator supports basic arithmetic operations such as addition, subtraction, multiplication, and division.
// The component contains event handlers for number buttons (handleNumberClick), operator buttons (handleOperatorClick), the equal button (handleEqualClick), and the clear button (handleClearClick).
// You can customize the styles and layout of the calculator by adding appropriate CSS classes to the HTML elements.
// Please note that this is a basic example of a calculator app. You can extend it further by adding more features like decimal support, parentheses, and additional mathematical operations based on your requirements.




