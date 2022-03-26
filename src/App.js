import "./App.css";
import reactLogo from "./assets/react.svg";
import { categories } from "./helper/data.js";

function App() {
  return (
    <div>
      <div className="react-logo-container">
        <img className="react-logo" src={reactLogo} alt="react-logo" />
      </div>

      <div className="main">
        <h1 className="title">Languages</h1>
      </div>
    </div>
  );
}

export default App;
