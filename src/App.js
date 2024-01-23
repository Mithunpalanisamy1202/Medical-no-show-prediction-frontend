import Login from "./components/Login";
import Home from "./components/Home";
import Form from "./components/Form";
import Chart from "./components/Chart";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ModelExplainability from "./components/ModelExplainability";
function App() {
 
  return (

    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/chart" element={<Chart/>}/>
        <Route path="/model" element={<ModelExplainability/>}/>

      </Routes>
    </Router>

    </>
  );
}

export default App;
