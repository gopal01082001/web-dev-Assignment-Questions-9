// Q.3 How to pass data from one component to another component
// ChatGP
// In React, there are several ways to pass data from one component to another component. The method you choose depends on the relationship between the components and the complexity of the data being passed. Here are some common approaches:
// Props (Properties): The most common way to pass data is through props. You can pass data as props from a parent component to its child component. The parent component defines the data and passes it to the child component as a prop. The child component can access and use the data received via props.
// Parent component:
// import React from 'react';
// import ChildComponent from './ChildComponent';
// function ParentComponent() {
//   const data = 'Hello from parent';
//   return <ChildComponent message={data} />;
// }
// Child component:
// import React from 'react';
// function ChildComponent(props) {
//   return <p>{props.message}</p>;
// }
// In this example, the message prop is passed from the parent component to the child component and displayed in a paragraph (<p>) element.
// Context API: The Context API allows you to create a context that can be accessed by multiple components, regardless of their nesting level. It's useful when you have data that needs to be shared by many components without passing it through every intermediate component.
// Provider component:
// import React, { createContext, useState } from 'react';
// import ChildComponent from './ChildComponent';
// const DataContext = createContext();
// function ParentComponent() {
//   const [data, setData] = useState('Hello from parent');
//   return (
//     <DataContext.Provider value={data}>
//       <ChildComponent />
//     </DataContext.Provider>
//   );
// }
// Child component
// import React, { useContext } from 'react';
// import DataContext from './DataContext';
// function ChildComponent() {
//   const data = useContext(DataContext);

//   return <p>{data}</p>;
// }
// Here, the DataContext.Provider wraps the child component, making the data available to it via the useContext hook.
// Redux or State Management Libraries: For complex state management or when data needs to be shared across multiple components that are not directly related, you can use state management libraries like Redux. Redux provides a global state container that can be accessed by any component in the application.
// This approach involves setting up a store, actions, and reducers to manage the data flow across components. It is particularly useful for larger-scale applications with complex data requirements.
// These are just a few examples of passing data between components in React. The method you choose depends on your specific use case, component relationship, and the complexity of the data being passed.





