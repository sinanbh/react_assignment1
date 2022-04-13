import "./App.css";
import "./components/style.css";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/classComponent";
import React, {useState} from "react"
import Heading from "./components/heading"

function App() {

  const [showFunc, setShowFunc] = useState(false);
  const [showClass, setShowClass] = useState(false);

  const handleFunctional = () => {
      setShowFunc(!showFunc);
  }

  const handleClass = () => {
    setShowClass(!showClass);
  }

  return (
    <div className="App">
      <Heading handleFunctional={handleFunctional} handleClass={handleClass} />
      <div className="box-wrap">
        {showFunc ? <FunctionalComponent /> : null}
        {showClass ? <ClassComponent /> : null}
      </div>
    </div>
  );
}

export default App;
