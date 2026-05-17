import { useState, useEffect } from "react";

const themes = [
  { key: "A", name: "暖橙" },
  { key: "B", name: "翠绿" },
  { key: "C", name: "靛青" },
];

export default function ThemeSwitcher() {
  const [active, setActive] = useState(() => localStorage.getItem("theme") || "A");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", active);
    localStorage.setItem("theme", active);
  }, [active]);

  return (
    <div className="fixed top-20 right-4 z-50">
      <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-border/50 px-2 py-1.5 flex gap-1">
        {themes.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${active === t.key ? "bg-slate-900 text-white shadow-sm" : "text-slate-500 hover:text-slate-800"}`}
          >
            {t.name}
          </button>
        ))}
      </div>
    </div>
  );
}

