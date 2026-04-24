import { ThemeProvider } from "@/components/providers/theme-provider";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        {children}
      </div>
    </ThemeProvider>
  );
}
