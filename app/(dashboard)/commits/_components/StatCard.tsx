import { Card, CardContent } from "@/components/ui/card";

export function StatCard({
    icon,
    iconWrapClass,
    iconClass,
    value,
    label,
    sublabel,
    badge,
    valueClass,
}: {
    icon: React.ReactNode;
    iconWrapClass: string;
    iconClass: string;
    value: string;
    label: string;
    sublabel: string;
    badge: string;
    valueClass: string;
}) {
    return (
        <Card className="rounded-2xl border-white/[0.06] bg-[#111114] shadow-none transition-colors hover:border-white/10">
            <CardContent className="p-5">
                <div className="mb-4 flex items-start justify-between">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${iconWrapClass}`}>
                        <div className={iconClass}>{icon}</div>
                    </div>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-400">
                        {badge}
                    </span>
                </div>

                <p className={`text-3xl font-semibold tracking-tight ${valueClass}`}>{value}</p>
                <p className="mt-1 text-[12px] text-white/45">{label}</p>
                <p className="mt-0.5 text-[10px] text-white/25">{sublabel}</p>
            </CardContent>
        </Card>
    );
}