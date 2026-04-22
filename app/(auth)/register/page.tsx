import { Metadata } from "next";
import { AuthLayout } from "@/features/auth/components/auth-layout";
import { RegisterForm } from "@/features/auth/components/register-form";

export const metadata: Metadata = {
  title: "Register | DevPulse",
  description: "Create an account to get started with DevPulse.",
};

/**
 * Register page component.
 * Uses the AuthLayout and RegisterForm feature components.
 */
export default function RegisterPage() {
  return (
    <AuthLayout 
      title="Create an account" 
      description="Enter your details below to create your account"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
