import { render } from "preact";
import "./style.css";
import { useState } from "preact/hooks";

export function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Navbar (flex) */}
      <div className="flex items-center justify-between bg-slate-500 p-4">
        <div className="font-bold">Logo</div>

        {/* Desktop Nav */}
        {/* Hide on small above sm: show */}
        <div className="hidden sm:flex gap-2">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>

        {/* Show on small above sm: hide */}
        <button
          className="text-4xl cursor-pointer sm:hidden"
          onClick={() => setOpen(!open)}
        >
          ≡
        </button>
      </div>

      {/* Mobile Nav */}
      {/* Show on small above sm: hide */}
      {open && (
        <div className="flex flex-col items-center p-4 gap-2 bg-slate-500 sm:hidden">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      )}

      {/* Content (grid) */}
      {/* Responsive Design */}
      {/* boxes sm=1 md=2 lg=3 */}
      {/* text sm=2xl anything bigger=text-sm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-6 gap-6 text-center font-semibold text-2xl sm:text-sm">
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
