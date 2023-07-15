// 💡 **Q. 9** Expand the existing todo web app with two additional functionalities:
// 1. On clicking the "Update Status" button:
//     - Update the status of the task.
// 2. On clicking the "Remove Todo" button:
//     - Remove the selected todo from the UI.
//     - Ensure that the deleted todo is no longer visible in the todo list. show the code
// Certainly! Here's an expanded version of the Todo web app with the two additional functionalities:
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
//       setTasks([...tasks, { text: inputValue, completed: false }]);
//       setInputValue('');
//     }
//   };
//   const handleUpdateStatus = (index) => {
//     setTasks((prevTasks) => {
//       const updatedTasks = [...prevTasks];
//       updatedTasks[index].completed = !updatedTasks[index].completed;
//       return updatedTasks;
//     });
//   };
//   const handleRemoveTodo = (index) => {
//     setTasks((prevTasks) => {
//       const updatedTasks = [...prevTasks];
//       updatedTasks.splice(index, 1);
//       return updatedTasks;
//     });
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
//           <li key={index}>
//             <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
//               {task.text}
//             </span>
//             <button onClick={() => handleUpdateStatus(index)}>Update Status</button>
//             <button onClick={() => handleRemoveTodo(index)}>Remove Todo</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default TodoApp;
// In this expanded version, we introduced two new functions: handleUpdateStatus and handleRemoveTodo.
// handleUpdateStatus toggles the completion status of a task. When the "Update Status" button is clicked, it updates the completed property of the corresponding task object in the tasks state array.
// handleRemoveTodo removes the selected todo from the UI. When the "Remove Todo" button is clicked, it removes the corresponding task object from the tasks state array using the splice method.
// Additionally, we added a conditional styling to strike-through the completed tasks using inline CSS.
// Please note that this is an enhanced example to showcase the additional functionalities. You can further enhance the Todo web app by adding validation, persistence using local storage, or styling improvements based on your requirements.




