import { AuthLayout } from "@/widgets/auth-layout";
import { LoginForm } from "@/widgets/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | DevPulse",
  description: "Sign in to your account to continue.",
};

/**
 * Login page component.
 */
export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome back"
      description="Enter your credentials to access your account"
    >
      <LoginForm />
    </AuthLayout>
  );
}
