import "./App.css";
import reactLogo from "./assets/react.svg";
import { categories } from "./helper/data.js";
import Card from "./components/card/Card.jsx";

function App() {
  return (
    <div>
      <div className="react-logo-container">
        <img className="react-logo" src={reactLogo} alt="react-logo" />
      </div>

      <div className="main">
        <h1 className="title">Languages</h1>
        {categories.map((card) => {
          const { name, img, options } = card;
          return <Card cardName={name} cardImg={img} cardOptions={options} />;
        })}
      </div>
    </div>
  );
}

export default App;
