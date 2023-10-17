import React from 'react';
import Validate from "./components/Validate/Validate";
 import Dropdown from "./components/Dropdown/Dropdown";
 import Checkbox from "./components/Checkbox/Checkbox";
 import Multiple from "./components/Multiple/Multiple";
import Uncontrolled from "./components/Uncontrolled/Uncontrolled";
import Controlled from "./components/Controlled/Controlled";
import ReactHookForm from "./components/ReactHookForm/ReactHookForm";
// import Index from "./components/Index/Index"



const App = () => {
  return (
    <div>
      <Controlled />
       <Dropdown />
       <Checkbox />
       <Multiple />
       <Validate />
      <Uncontrolled />
       <ReactHookForm />    
       {/* <Index/> */}
    </div>
  );
};

export default App;
