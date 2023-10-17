import React from 'react';
import './App.css'; 
import Validate from "./components/Validate/Validate";
 import Dropdown from "./components/Dropdown/Dropdown";
 import Checkbox from "./components/Checkbox/Checkbox";
 import Multiple from "./components/Multiple/Multiple";
import Uncontrolled from "./components/Uncontrolled/Uncontrolled";
import Controlled from "./components/Controlled/Controlled";
import ReactHookForm from "./components/ReactHookForm/ReactHookForm";
import Footer from './components/Footer/Footer';
import Frames from './components/Frames/Frames';






const App = () => {
  return (
    <div>
      <form>
      <Controlled />
       <Dropdown />
       <Checkbox />
       <Multiple />
       <Validate />
      <Uncontrolled />
       <ReactHookForm />    
    
       <Frames/>
       </form>
       <Footer/>
    </div>
  );
};

export default App;
