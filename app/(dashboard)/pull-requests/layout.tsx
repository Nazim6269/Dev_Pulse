import { ThemeProvider } from "@/components/providers/theme-provider";

export default function PullRequestsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className="min-h-full transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
}
