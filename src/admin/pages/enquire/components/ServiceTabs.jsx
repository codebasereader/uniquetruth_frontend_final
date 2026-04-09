export default function ServiceTabs({ tabs, activeId, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const active = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              active
                ? "border-[#5eead4]/70 bg-[#5eead4]/20 text-white"
                : "border-white/20 bg-white/10 text-white/90 hover:bg-white/15"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

