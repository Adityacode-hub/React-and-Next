"use client";

import { useTheme } from "./ThemeProvider";
import { Check, Palette } from "lucide-react";

export default function ThemeSettings() {
  const { accent, setAccent, themes } = useTheme();

  return (
    <div className="space-y-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center gap-2 text-white">
        <Palette size={18} />
        <h3 className="font-semibold">Appearance</h3>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {Object.entries(themes).map(([name, color]) => (
          <button
            key={name}
            onClick={() => setAccent(color)}
            title={name}
            className="group flex flex-col items-center gap-2"
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full ring-offset-2 ring-offset-[#151229]"
              style={{
                backgroundColor: color,
                outline:
                  accent === color
                    ? `2px solid ${color}`
                    : "none",
              }}
            >
              {accent === color && (
                <Check size={17} className="text-white" />
              )}
            </span>

            <span className="text-[11px] text-gray-400">
              {name}
            </span>
          </button>
        ))}
      </div>

      <div className="border-t border-white/10 pt-3">
        <label className="mb-2 block text-xs text-gray-400">
          Custom accent colour
        </label>

        <input
          type="color"
          value={accent}
          onChange={(e) => setAccent(e.target.value)}
          className="h-10 w-full cursor-pointer rounded-lg bg-transparent"
        />
      </div>
    </div>
  );
}