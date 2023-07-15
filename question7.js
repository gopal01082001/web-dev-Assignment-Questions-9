// Q.7 How do you handle conditional rendering in React?
// In React, conditional rendering refers to the process of conditionally rendering components or elements based on certain conditions or state values. There are several ways to handle conditional rendering in React, depending on the complexity and requirements of your application. Here are some common approaches:
// if-else statements: You can use regular JavaScript if-else statements inside your component's render() method to conditionally render different components or elements based on a condition.
// import React from 'react';
// function MyComponent({ isLoggedIn }) {
//   if (isLoggedIn) {
//     return <p>Welcome, user!</p>;
//   } else {
//     return <p>Please log in.</p>;
//   }
// }
// In this example, the isLoggedIn prop is used to conditionally render different messages.
// Ternary operator: The ternary operator (condition ? expression1 : expression2) provides a concise way to conditionally render components or elements inline.
// import React from 'react';
// function MyComponent({ isLoggedIn }) {
//   return isLoggedIn ? <p>Welcome, user!</p> : <p>Please log in.</p>;
// }
// Here, the ternary operator is used to render different messages based on the value of isLoggedIn.
// Logical && operator: You can use the logical AND (&&) operator to conditionally render a component or element when a certain condition is true
// import React from 'react';
// function MyComponent({ isLoggedIn }) {
//   return isLoggedIn && <p>Welcome, user!</p>;
// }
// In this example, the <p> element is only rendered if isLoggedIn is true.
// Rendering null or empty fragment: You can explicitly return null or an empty fragment (<> </>) to indicate that nothing should be rendered based on a condition.
// import React from 'react';
// function MyComponent({ isLoggedIn }) {
//   return isLoggedIn ? <p>Welcome, user!</p> : null;
// }
// Here, if isLoggedIn is false, nothing will be rendered.
// These are just a few examples of handling conditional rendering in React. The approach you choose depends on the complexity and requirements of your application. You can also combine these techniques and use them within loops, switch statements, or in conjunction with state values to handle more complex conditional rendering scenarios.




