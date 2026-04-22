import { Metadata } from "next";
import { AuthLayout } from "@/features/auth/components/auth-layout";
import { LoginForm } from "@/features/auth/components/login-form";

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
