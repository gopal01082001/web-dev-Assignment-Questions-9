// 💡 **Q.8**  Create a Simple Todo Web App with following features Using React :
// - An input button where users can type their tasks.
// - On clicking the submit button, the entered task should be displayed in the UI code
// Certainly! Here's an example of a simple Todo web app using React that includes the requested features:
// import React, { useState } from 'react';
// function TodoApp() {
//   const [tasks, setTasks] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (inputValue.trim() !== '') {
//       setTasks([...tasks, inputValue]);
//       setInputValue('');
//     }
//   };
//   return (
//     <div>
//       <h1>Todo App</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={inputValue} onChange={handleInputChange} />
//         <button type="submit">Add Task</button>
//       </form>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default TodoApp;
// In this example, we use the useState hook to manage the state of the tasks and the input value. The handleInputChange function updates the input value as the user types. The handleSubmit function is called when the form is submitted, adding the entered task to the tasks state array. The entered task is displayed in the UI using the map function to render a list of <li> elements.
// Please note that this is a basic example to demonstrate the functionality you requested. You can extend it further by adding features like task completion, task deletion, or using more advanced state management techniques like Redux.
// Remember to import and render the TodoApp component in your main application file.




