import { useState, useEffect } from "react";

const themes = [
  { key: "A", label: "A", name: "暖橙", color: "#E8590C", light: "#FB923C" },
  { key: "B", label: "B", name: "翠绿", color: "#059669", light: "#34D399" },
  { key: "C", label: "C", name: "靛青", color: "#0D9488", light: "#2DD4BF" },
];

export default function ThemeSwitcher() {
  const [active, setActive] = useState(() => localStorage.getItem("theme") || "A");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", active);
    localStorage.setItem("theme", active);
  }, [active]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <div className="bg-white rounded-2xl shadow-xl border border-border/50 p-2 flex gap-1.5">
        {themes.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className="group flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all"
            title={t.name}
          >
            <div className="flex gap-0.5">
              <div className="w-4 h-4 rounded-full border-2 "
                style={{ backgroundColor: t.color, borderColor: active === t.key ? "#1E293B" : "transparent" }} />
              <div className="w-4 h-4 rounded-full border-2 "
                style={{ backgroundColor: t.light, borderColor: active === t.key ? "#1E293B" : "transparent" }} />
            </div>
            <span className={active === t.key ? "text-slate-900" : "text-slate-400"}>{t.name}</span>
          </button>
        ))}
      </div>
      <span className="text-xs text-slate-400 mr-1">配色预览（决定后删除）</span>
    </div>
  );
}
