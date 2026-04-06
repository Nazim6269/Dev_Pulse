import { MapPin, Link2, Star } from "lucide-react";

const langColors: Record<string, string> = {
  TypeScript: "bg-blue-400",
  Python: "bg-yellow-400",
  Rust: "bg-orange-400",
  Go: "bg-cyan-400",
};

export default function ProfileCard() {
  return (
    <div className="h-full bg-[#111114] border border-white/[0.06] rounded-2xl p-5 flex flex-col gap-4">
      {/* Top section */}
      <div className="flex items-start gap-4">
        <div className="relative shrink-0">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-400 to-rose-500 flex items-center justify-center text-lg font-bold text-white shadow-xl shadow-orange-500/20">
            NU
          </div>
          <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#111114] shadow shadow-emerald-400/40" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[15px] font-semibold text-white leading-tight truncate">Nazim Uddin</p>
          <p className="text-[12px] text-white/40 mt-0.5">@nazimdev10022001@gmail.com</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-[11px] bg-violet-500/15 text-violet-400 border border-violet-500/20 px-2 py-0.5 rounded-full">
              Pro
            </span>
            <span className="text-[11px] text-white/30 flex items-center gap-1">
              <MapPin size={10} /> Dhaka, BD
            </span>
          </div>
        </div>
      </div>

      {/* Bio */}
      <p className="text-[12px] text-white/40 leading-relaxed">
        Frontend engineer building scalable products. Open source contributor & coffee-driven debugger.
      </p>

      {/* Link */}
      <div className="flex items-center gap-1.5 text-[12px] text-violet-400/70">
        <Link2 size={11} />
        <span>devpulse.app/nazim</span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Repos", value: "34" },
          { label: "Stars", value: "812" },
          { label: "Followers", value: "290" },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white/[0.04] rounded-xl p-2.5 text-center">
            <p className="text-[15px] font-semibold text-white">{value}</p>
            <p className="text-[10px] text-white/30 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Top languages */}
      <div>
        <p className="text-[10px] text-white/25 uppercase tracking-widest mb-2">Top languages</p>
        <div className="flex flex-wrap gap-1.5">
          {Object.entries(langColors).map(([lang, dot]) => (
            <div key={lang} className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.06] rounded-lg px-2.5 py-1">
              <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
              <span className="text-[11px] text-white/50">{lang}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}