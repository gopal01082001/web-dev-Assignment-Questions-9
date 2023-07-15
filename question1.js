// Q.1 What are hooks in react? how to identify hooks?
// ChatGPT
// In React, hooks are functions that allow you to use state and other React features in functional components. They were introduced in React version 16.8 as a way to write stateful logic without using class components.
// Hooks provide a way to reuse stateful logic and share it between components. They also enable you to write components that are simpler and easier to understand compared to class components.
// To identify hooks in React, you need to look for certain naming conventions:
// Hook functions always start with the prefix "use". For example, useState, useEffect, useContext, etc.
// Hooks can only be used at the top level of functional components or other custom hooks. They should not be used inside loops, conditions, or nested functions.
// Here are a few commonly used hooks in React:
// useState: This hook allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update the state.
// useEffect: This hook is used to perform side effects in functional components. It lets you handle lifecycle events, such as component mount, update, and unmount.
// useContext: This hook allows you to access the value of a context in a functional component.
// useRef: This hook provides a way to create a mutable reference that persists across renders. It can be used to access the DOM elements or store any mutable value.
// These are just a few examples of hooks in React. React provides several other hooks that serve different purposes, and you can even create your own custom hooks. Hooks are an essential part of modern React development and can greatly enhance the flexibility and reusability of your code.
