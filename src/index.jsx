import { render } from "preact";
import "./style.css";

export function App() {
  return (
    <div>
      {/* Nav (flex) */}
      <div className="flex items-center justify-between bg-slate-500 p-4">
        <div className="font-bold">Logo</div>
        <div className="flex gap-2">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
      {/* Content (grid) */}
      {/* Responsive Design */}
      {/* boxes sm=1 md=2 lg=3 */}
      {/* text sm=2xl anything bigger=text-sm */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 p-6 gap-6 text-center font-semibold text-2xl sm:text-sm">
        <div className="bg-slate-400 p-4 rounded hover:bg-slate-600 hover:scale-105 cursor-pointer transition-all">
          Feature
        </div>
        <div className="bg-slate-400 p-4 rounded hover:bg-slate-600 hover:scale-105 cursor-pointer">
          Feature
        </div>
        <div className="bg-slate-400 p-4 rounded">Feature</div>
        <div className="bg-slate-400 p-4 rounded">Feature</div>
        <div className="bg-slate-400 p-4 rounded">Feature</div>
        <div className="bg-slate-400 p-4 rounded">Feature</div>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("app"));
