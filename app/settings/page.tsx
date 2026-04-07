import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
  
    Trash2,
    ChevronRight,
    Check,
    AlertTriangle,
    ExternalLink,
    Key,

    Globe,
} from "lucide-react";
import { settingsSections } from "@/data/setting";



function SettingsCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`bg-[#111114] border border-white/[0.06] rounded-2xl p-6 ${className}`}>
            {children}
        </div>
    );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return <h3 className="text-[13px] font-medium text-white/90 mb-1">{children}</h3>;
}

function SectionDesc({ children }: { children: React.ReactNode }) {
    return <p className="text-[12px] text-white/35 mb-5">{children}</p>;
}

function FieldRow({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) {
    return (
        <div className="flex items-start justify-between gap-6 py-4 border-b border-white/[0.05] last:border-0">
            <div className="flex-1 min-w-0">
                <p className="text-[12px] text-white/70">{label}</p>
                {desc && <p className="text-[11px] text-white/30 mt-0.5">{desc}</p>}
            </div>
            <div className="shrink-0">{children}</div>
        </div>
    );
}

export default function SettingsPage() {
    return (
        <div className="flex h-screen bg-[#0c0c0e] text-white overflow-hidden font-sans">
            <div className="flex-1 flex overflow-hidden">
                {/* Settings sidebar nav */}
                <aside className="w-52 bg-[#0e0e11] border-r border-white/[0.06] flex flex-col py-6 px-3 shrink-0">
                    <p className="text-[10px] text-white/25 uppercase tracking-widest px-3 mb-3">Settings</p>
                    <nav className="flex flex-col gap-0.5">
                        {settingsSections.map(({ id, label, icon: Icon }, i) => (
                            <button
                                key={id}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-150 group ${i === 0
                                    ? "bg-violet-500/15 text-violet-400"
                                    : "text-white/40 hover:text-white/70 hover:bg-white/[0.05]"
                                    }`}
                            >
                                <Icon size={15} />
                                <span className="text-[12px]">{label}</span>
                                {i === 0 && <ChevronRight size={12} className="ml-auto opacity-50" />}
                            </button>
                        ))}
                    </nav>

                    <div className="mt-auto px-3">
                        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-rose-400/60 hover:text-rose-400 hover:bg-rose-400/[0.06] transition-all text-left">
                            <Trash2 size={15} />
                            <span className="text-[12px]">Delete account</span>
                        </button>
                    </div>
                </aside>

                {/* Main content */}
                <main className="flex-1 overflow-y-auto p-7">
                    <div className="flex flex-col gap-5">

                        {/* Header */}
                        <div className="mb-1">
                            <h1 className="text-[20px] font-semibold text-white tracking-tight">Profile settings</h1>
                            <p className="text-[12px] text-white/35 mt-1">Manage your account details and public presence</p>
                        </div>

                        {/* ── Avatar & Name ── */}
                        <SettingsCard>
                            <SectionTitle>Personal information</SectionTitle>
                            <SectionDesc>This is how you appear across DevPulse and your public profile.</SectionDesc>

                            {/* Avatar row */}
                            <div className="flex items-center gap-5 mb-6 pb-6 border-b border-white/[0.05]">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-400 to-rose-500 flex items-center justify-center text-xl font-semibold text-white">
                                        RA
                                    </div>
                                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#111114]" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Button variant="outline" size="sm" className="h-8 text-[11px] bg-white/[0.05] border-white/[0.10] text-white/70 hover:bg-white/[0.10] hover:text-white hover:border-white/20">
                                        Change avatar
                                    </Button>
                                    <p className="text-[10px] text-white/25">JPG, PNG or WebP · max 2MB</p>
                                </div>
                            </div>

                            {/* Fields */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="flex flex-col gap-2">
                                    <Label className="text-[11px] text-white/50">First name</Label>
                                    <Input defaultValue="Rafiq" className="bg-white/[0.04] border-white/[0.08] text-white/80 text-[13px] h-9 focus:border-violet-500/50 focus:ring-violet-500/20" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="text-[11px] text-white/50">Last name</Label>
                                    <Input defaultValue="Ahsan" className="bg-white/[0.04] border-white/[0.08] text-white/80 text-[13px] h-9 focus:border-violet-500/50 focus:ring-violet-500/20" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 mb-4">
                                <Label className="text-[11px] text-white/50">Email address</Label>
                                <div className="relative">
                                    <Input defaultValue="rafiq@devpulse.app" className="bg-white/[0.04] border-white/[0.08] text-white/80 text-[13px] h-9 pr-24 focus:border-violet-500/50" />
                                    <Badge className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-400/15 text-emerald-400 border-emerald-400/20 text-[10px] h-5">
                                        <Check size={9} className="mr-1" /> Verified
                                    </Badge>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 mb-4">
                                <Label className="text-[11px] text-white/50">Bio</Label>
                                <textarea
                                    rows={3}
                                    defaultValue="Frontend engineer building scalable products. Open source contributor & coffee-driven debugger."
                                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2.5 text-white/80 text-[13px] resize-none focus:outline-none focus:border-violet-500/50 placeholder:text-white/20"
                                />
                                <p className="text-[10px] text-white/25 text-right">118 / 160</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <Label className="text-[11px] text-white/50">Location</Label>
                                    <Input defaultValue="Dhaka, BD" className="bg-white/[0.04] border-white/[0.08] text-white/80 text-[13px] h-9 focus:border-violet-500/50" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label className="text-[11px] text-white/50">Website</Label>
                                    <Input defaultValue="devpulse.app/rafiq" className="bg-white/[0.04] border-white/[0.08] text-white/80 text-[13px] h-9 focus:border-violet-500/50" />
                                </div>
                            </div>

                            <div className="flex justify-end mt-5 pt-5 border-t border-white/[0.05]">
                                <Button className="bg-violet-500 hover:bg-violet-400 text-white text-[12px] h-8 px-5">
                                    Save changes
                                </Button>
                            </div>
                        </SettingsCard>

                        {/* ── GitHub connection ── */}
                        <SettingsCard>
                            <SectionTitle>GitHub connection</SectionTitle>
                            <SectionDesc>Your synced GitHub account and OAuth permissions.</SectionDesc>

                            <div className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl mb-5">
                                <div className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center">
                                    <Globe size={20} className="text-white/60" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[13px] font-medium text-white/85">rafiq-ahsan</p>
                                    <p className="text-[11px] text-white/35">Connected · github.com/rafiq-ahsan</p>
                                </div>
                                <Badge className="bg-emerald-400/15 text-emerald-400 border-emerald-400/20 text-[10px]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 inline-block" />
                                    Active
                                </Badge>
                                <Button variant="ghost" size="sm" className="text-[11px] text-white/40 hover:text-white/70 h-8">
                                    <ExternalLink size={12} className="mr-1" /> View
                                </Button>
                            </div>

                            <FieldRow label="Repository access" desc="Which repos DevPulse can read">
                                <Select defaultValue="all">
                                    <SelectTrigger className="w-36 h-8 text-[12px] bg-white/[0.04] border-white/[0.08] text-white/70">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#1a1a1e] border-white/[0.08] text-white/80">
                                        <SelectItem value="all" className="text-[12px]">All repos</SelectItem>
                                        <SelectItem value="selected" className="text-[12px]">Selected repos</SelectItem>
                                        <SelectItem value="public" className="text-[12px]">Public only</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FieldRow>

                            <FieldRow label="Auto-sync interval" desc="How often to pull new data">
                                <Select defaultValue="5m">
                                    <SelectTrigger className="w-36 h-8 text-[12px] bg-white/[0.04] border-white/[0.08] text-white/70">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#1a1a1e] border-white/[0.08] text-white/80">
                                        <SelectItem value="1m" className="text-[12px]">Every 1 min</SelectItem>
                                        <SelectItem value="5m" className="text-[12px]">Every 5 min</SelectItem>
                                        <SelectItem value="15m" className="text-[12px]">Every 15 min</SelectItem>
                                        <SelectItem value="1h" className="text-[12px]">Every hour</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FieldRow>

                            <FieldRow label="Include private repos" desc="Requires private repo scope">
                                <Switch defaultChecked className="data-[state=checked]:bg-violet-500" />
                            </FieldRow>

                            <div className="mt-4 flex justify-between items-center">
                                <Button variant="ghost" size="sm" className="text-rose-400/60 hover:text-rose-400 hover:bg-rose-400/[0.08] text-[11px] h-8">
                                    Disconnect GitHub
                                </Button>
                                <Button size="sm" className="bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.10] text-white/70 text-[11px] h-8">
                                    Sync now
                                </Button>
                            </div>
                        </SettingsCard>

                        {/* ── Notifications ── */}
                        <SettingsCard>
                            <SectionTitle>Notification preferences</SectionTitle>
                            <SectionDesc>Choose what activities trigger alerts.</SectionDesc>

                            {[
                                { label: "PR merged", desc: "When one of your PRs is merged", on: true },
                                { label: "Review requested", desc: "When someone requests your review", on: true },
                                { label: "Review completed", desc: "When a review is left on your PR", on: true },
                                { label: "Goal completed", desc: "When you hit a tracking goal", on: true },
                                { label: "Weekly digest", desc: "Summary email every Monday", on: false },
                                { label: "Team mention", desc: "When someone @-mentions you", on: false },
                            ].map((n) => (
                                <FieldRow key={n.label} label={n.label} desc={n.desc}>
                                    <Switch defaultChecked={n.on} className="data-[state=checked]:bg-violet-500" />
                                </FieldRow>
                            ))}
                        </SettingsCard>

                        {/* ── Security ── */}
                        <SettingsCard>
                            <SectionTitle>Security</SectionTitle>
                            <SectionDesc>Manage your session, password, and API access.</SectionDesc>

                            <FieldRow label="Two-factor authentication" desc="TOTP app required at sign-in">
                                <div className="flex items-center gap-2">
                                    <Badge className="bg-amber-400/15 text-amber-400 border-amber-400/20 text-[10px]">
                                        <AlertTriangle size={9} className="mr-1" /> Not enabled
                                    </Badge>
                                    <Button size="sm" className="h-7 text-[11px] bg-violet-500/80 hover:bg-violet-500 text-white">Enable</Button>
                                </div>
                            </FieldRow>

                            <FieldRow label="Active sessions" desc="Devices currently signed in">
                                <Button variant="ghost" size="sm" className="text-[11px] text-white/40 hover:text-white/70 h-8">
                                    View all →
                                </Button>
                            </FieldRow>

                            <FieldRow label="API tokens" desc="For CLI and integrations">
                                <Button size="sm" className="h-8 text-[11px] bg-white/[0.05] border border-white/[0.10] text-white/60 hover:bg-white/[0.10] hover:text-white/80">
                                    <Key size={12} className="mr-1.5" /> Manage tokens
                                </Button>
                            </FieldRow>
                        </SettingsCard>

                        {/* ── Appearance ── */}
                        <SettingsCard>
                            <SectionTitle>Appearance</SectionTitle>
                            <SectionDesc>Customise how DevPulse looks for you.</SectionDesc>

                            <FieldRow label="Theme" desc="Global colour scheme">
                                <div className="flex gap-2">
                                    {["dark", "light", "system"].map((t) => (
                                        <button
                                            key={t}
                                            className={`px-3 py-1.5 rounded-lg text-[11px] border transition-all capitalize ${t === "dark"
                                                ? "bg-violet-500/20 border-violet-500/40 text-violet-400"
                                                : "bg-white/[0.04] border-white/[0.08] text-white/35 hover:text-white/60"
                                                }`}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </FieldRow>

                            <FieldRow label="Accent color" desc="Highlight color across UI">
                                <div className="flex gap-2">
                                    {[
                                        { name: "violet", cls: "bg-violet-500" },
                                        { name: "blue", cls: "bg-blue-500" },
                                        { name: "emerald", cls: "bg-emerald-500" },
                                        { name: "amber", cls: "bg-amber-500" },
                                        { name: "rose", cls: "bg-rose-500" },
                                    ].map((c, i) => (
                                        <button key={c.name} className={`w-6 h-6 rounded-full ${c.cls} ring-2 transition-all ${i === 0 ? "ring-white/60 ring-offset-1 ring-offset-[#111114]" : "ring-transparent hover:ring-white/30"}`} />
                                    ))}
                                </div>
                            </FieldRow>

                            <FieldRow label="Language & region" desc="Localisation preference">
                                <Select defaultValue="en">
                                    <SelectTrigger className="w-36 h-8 text-[12px] bg-white/[0.04] border-white/[0.08] text-white/70">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#1a1a1e] border-white/[0.08] text-white/80">
                                        <SelectItem value="en" className="text-[12px]">English (US)</SelectItem>
                                        <SelectItem value="en-gb" className="text-[12px]">English (GB)</SelectItem>
                                        <SelectItem value="de" className="text-[12px]">Deutsch</SelectItem>
                                        <SelectItem value="fr" className="text-[12px]">Français</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FieldRow>

                            <FieldRow label="Compact density" desc="Reduce padding across all views">
                                <Switch className="data-[state=checked]:bg-violet-500" />
                            </FieldRow>
                        </SettingsCard>

                        {/* ── Danger zone ── */}
                        <div className="bg-rose-500/[0.05] border border-rose-500/[0.15] rounded-2xl p-6">
                            <h3 className="text-[13px] font-medium text-rose-400 mb-1">Danger zone</h3>
                            <p className="text-[12px] text-white/30 mb-5">These actions are irreversible. Proceed with caution.</p>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-[12px] text-white/60">Export all data</p>
                                        <p className="text-[11px] text-white/30">Download a ZIP of your complete account data</p>
                                    </div>
                                    <Button size="sm" variant="outline" className="h-8 text-[11px] border-white/[0.10] text-white/50 hover:text-white/80 hover:bg-white/[0.06]">
                                        Export
                                    </Button>
                                </div>
                                <Separator className="bg-white/[0.05]" />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-[12px] text-rose-400/80">Delete account</p>
                                        <p className="text-[11px] text-white/30">Permanently remove your account and all data</p>
                                    </div>
                                    <Button size="sm" className="h-8 text-[11px] bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 border border-rose-500/30">
                                        <Trash2 size={12} className="mr-1.5" /> Delete
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}