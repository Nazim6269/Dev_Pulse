import {
    User,
    Bell,
    Shield,
    Palette,
    Webhook,
    CreditCard,
    Globe,
} from "lucide-react";

export const settingsSections = [
    { id: "profile", label: "Profile", icon: User },
    { id: "github", label: "GitHub", icon: Globe },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "integrations", label: "Integrations", icon: Webhook },
    { id: "billing", label: "Billing", icon: CreditCard },
];