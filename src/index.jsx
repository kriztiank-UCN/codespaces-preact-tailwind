import { render } from "preact";
import "./style.css";

export function App() {
  return (
    <div className="flex items-center justify-between bg-slate-500 p-4">
      <div className="font-bold">Logo</div>
      <div className="flex gap-2">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("app"));
