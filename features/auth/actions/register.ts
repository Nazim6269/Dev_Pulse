"use server";

import { registerSchema, RegisterSchema } from "../schemas/register";
import { AuthResponse } from "../types";

/**
 * Server action to handle user registration.
 * Performs server-side validation and simulates a database interaction.
 */
export async function registerAction(data: RegisterSchema): Promise<AuthResponse> {
  // 1. Validate the data on the server (Security: Never trust client-side validation)
  const validatedFields = registerSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid fields",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password, name } = validatedFields.data;

  try {
    // 2. Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // 3. Simulate existing user check
    if (email === "test@example.com") {
      return {
        success: false,
        message: "A user with this email already exists.",
      };
    }

    // 4. Simulate successful registration
    // In a real app, you would hash the password (using bcrypt/argon2) and save to DB
    console.log(`[AUTH] Registering user: ${email}`);

    return {
      success: true,
      message: "Registration successful! You can now log in.",
      user: {
        id: "mock-id-123",
        email,
        name: name || undefined,
      },
    };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
