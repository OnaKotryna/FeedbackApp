// import React from 'react'
// import {createRoot} from 'react-dom/client'
// import App from './App'

// const container = document.getElementById('root')
// const root = createRoot(container)
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>, document.getElementById('root')
// )
import { createRoot } from "react-dom/client";
import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
