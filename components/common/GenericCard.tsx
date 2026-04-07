import { Card, CardContent } from '../ui/card'

interface GenericCardProps {
    icon: React.ReactNode;
    iconWrapClass: string;
    iconClass: string;
    value: string;
    label: string;
    labelClass?: string;
    sublabel: string;
    sublabelClass?: string;
    badge: string;
    valueClass: string;
}

const GenericCard = ({ icon,
    iconWrapClass,
    iconClass,
    value,
    label,
    labelClass,
    sublabel,
    sublabelClass,
    badge,
    valueClass, }: GenericCardProps) => {
    return (
        <Card className="rounded-2xl border-white/6 bg-[#111114] shadow-none transition-colors hover:border-white/10">
            <CardContent className="p-5">
                <div className="mb-4 flex items-start justify-between">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${iconWrapClass || ""}`}>
                        <div className={iconClass || ""}>{icon}</div>
                    </div>
                    <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-400">
                        {badge || ""}
                    </span>
                </div>
                <p className={`text-3xl font-semibold tracking-tight ${valueClass || ""}`}>{value || 0}</p>
                <p className={`mt-1 text-[12px] text-white/45 ${labelClass || ""}`}>{label || ""}</p>
                <p className={`mt-0.5 text-[10px] text-white/25 ${sublabelClass || ""}`}>{sublabel || ""}</p>
            </CardContent>
        </Card>
    )
}

export default GenericCard