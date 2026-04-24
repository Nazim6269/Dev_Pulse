import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchema } from "./schema";
import { registerAction } from "../api/register";

/**
 * Custom hook to encapsulate registration logic.
 * Handles form state, validation, and interaction with the server action.
 */
export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [serverSuccess, setServerSuccess] = useState<string | null>(null);

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur", // Validate on blur for better UX
  });

  const onSubmit = async (values: RegisterSchema) => {
    setIsLoading(true);
    setServerError(null);
    setServerSuccess(null);

    try {
      const response = await registerAction(values);

      if (response.success) {
        setServerSuccess(response.message || "Registration successful!");
        form.reset();
      } else {
        setServerError(response.message || "Registration failed.");

        // Handle field-level errors from server if any
        if (response.errors) {
          Object.entries(response.errors).forEach(([field, messages]) => {
            form.setError(field as keyof RegisterSchema, {
              type: "server",
              message: messages[0],
            });
          });
        }
      }
    } catch (error) {
      setServerError(
        "An error occurred during registration. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    isLoading,
    serverError,
    serverSuccess,
  };
}
