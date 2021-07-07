// import "./App.css";
// import Accordine from "./components/Accordine";

// const App = () => {
//   return (
//     <>
//       <Accordine />
//     </>
//   );
// };
// export default App;

// // Forms
// import "./App.css";
// import Event from "./components/Event";

// const App = () => {
//   return (
//     <>
//       <Event />
//     </>
//   );
// };
// export default App;

// //LoginForms
// import "./App.css";
// import Form from "./components/Form";

// const App = () => {
//   return (
//     <>
//       <Form />
//     </>
//   );
// };
// export default App;

// //ToDoList
// import "./App.css";
// import TodosList from "./components/TodosList";

// const App = () => {
//   return (
//     <>
//       <TodosList />
//     </>
//   );
// };
// export default App;

// //Increment Decrement
// import "./App.css";
// import IncDec from "./components/IncDec";

// const App = () => {
//   return (
//     <>
//       <IncDec />
//     </>
//   );
// };
// export default App;

// //Covid Tracker React App
// import "./App.css";
// import Covid from "./CovidTracker/Covid";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// const App = () => {
//   return (
//     <>
//       <Covid />
//     </>
//   );
// };
// export default App;

// React Router System
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import About from "./ReactRouter/About";
import Contact from "./ReactRouter/Contact";
import Service from "./ReactRouter/Service";
import Menu from "./ReactRouter/Menu";
import Error from "./ReactRouter/Error";

const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/contact" component={Contact} />
        <Route path="/service" component={Service} />
        <Route component={Error} />
      </Switch>
    </>
  );
};
export default App;
