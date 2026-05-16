"use client";
import { navItems, bottomItems, Link, usePathname, cn, Zap } from "./index";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-[68px] bg-primaryColor border-r border-sidebar-border py-5 items-center shrink-0">
      {/* Logo */}
      <Link
        href="/"
        className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors"
      >
        <Zap
          size={16}
          className="text-primary-foreground fill-primary-foreground"
        />
      </Link>

      {/* Main nav */}
      <nav className="flex flex-col gap-1 flex-1 w-full px-2">
        {navItems.map(({ icon: Icon, label, href }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              title={label}
              className={cn(
                "w-full aspect-square rounded-xl flex items-center justify-center transition-all duration-200 relative",
                active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50",
              )}
            >
              <Icon size={18} />
              {active && (
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-orangeColor rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom items */}
      <div className="flex flex-col gap-1 w-full px-2 pb-2">
        {bottomItems.map(({ icon: Icon, label, href }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              title={label}
              className={cn(
                "w-full aspect-square rounded-xl flex items-center justify-center transition-all duration-200 relative",
                active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-muted-foreground/80 hover:text-foreground hover:bg-sidebar-accent/50",
              )}
            >
              {label === "Notifications" && (
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-rose-400" />
              )}
              <Icon size={18} />
              {active && (
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-orangeColor rounded-full" />
              )}
            </Link>
          );
        })}

        {/* Avatar → profile */}
        <Link
          href="/profile"
          title="Profile"
          className="mt-2 flex justify-center"
        >
          <div
            className={cn(
              "w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-[11px] font-semibold text-white ring-2 transition-all",
              pathname === "/profile"
                ? "ring-orangeColor"
                : "ring-transparent hover:ring-foreground/20",
            )}
          >
            RA
          </div>
        </Link>
      </div>
    </aside>
  );
}
