import { render } from "preact";
import "./style.css";

export function App() {
  return (
    <div className="bg-blue-200">
      Hello
    </div>

  );
}

render(<App />, document.getElementById("app"));
