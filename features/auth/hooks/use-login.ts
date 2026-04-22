import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "../schemas/login";
import { loginAction } from "../actions/login";
import { useRouter } from "next/navigation";

/**
 * Custom hook for login logic.
 */
export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (values: LoginSchema) => {
    setIsLoading(true);
    setServerError(null);

    try {
      const response = await loginAction(values);

      if (response.success) {
        // Redirect to dashboard on success
        router.push("/");
        router.refresh();
      } else {
        setServerError(response.message || "Login failed.");
        
        if (response.errors) {
          Object.entries(response.errors).forEach(([field, messages]) => {
            form.setError(field as keyof LoginSchema, {
              type: "server",
              message: messages[0],
            });
          });
        }
      }
    } catch (error) {
      setServerError("An error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    isLoading,
    serverError,
  };
}
