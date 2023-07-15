// Q.2 Explain useState Hook & what can you achieve with it?
// The useState hook is a built-in hook in React that allows functional components to manage state. It provides a way to add stateful behavior to functional components without using class components.
// With the useState hook, you can achieve the following:
// State management: useState allows you to declare state variables in functional components. It returns an array with two elements: the current state value and a function to update that state value. By calling the update function, you can change the state value, triggering a re-render of the component.
// For example, you can declare a state variable for a counter and update it as follows:
// import React, { useState } from 'react';
// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }
// Multiple state variables: You can use useState multiple times in a single component to manage multiple independent state variables. This allows you to keep related pieces of state separate and organized.
// import React, { useState } from 'react';
// function Form() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // ...

//   return (
//     <form>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       {/* ... */}
//     </form>
//   );
// }
// Functional updates: The update function returned by useState can also accept a function instead of a new value. This is useful when the new state depends on the previous state.
// import React, { useState } from 'react';
// function Counter() {
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount((prevCount) => prevCount + 1);
//   };
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }
// Using the functional form of the update function ensures that you're working with the latest state value, especially when dealing with asynchronous updates.
// The useState hook simplifies state management in functional components and provides a straightforward way to add state to your React applications. It helps you handle component state in a more declarative and concise manner.




