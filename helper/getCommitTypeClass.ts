export function getCommitTypeClass(type: string) {
  switch (type) {
    case "feat":
      return "text-violet-400 bg-violet-400/10";
    case "fix":
      return "text-rose-400 bg-rose-400/10";
    case "chore":
      return "text-white/40 bg-white/[0.06]";
    case "refactor":
      return "text-blue-400 bg-blue-400/10";
    case "docs":
      return "text-amber-400 bg-amber-400/10";
    case "test":
      return "text-emerald-400 bg-emerald-400/10";
    default:
      return "text-white/40 bg-white/[0.06]";
  }
}
