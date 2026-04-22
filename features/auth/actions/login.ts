"use server";

import { loginSchema, LoginSchema } from "../schemas/login";
import { AuthResponse } from "../types";
import { cookies } from "next/headers";

/**
 * Server action to handle user login.
 * Implements a mock session handling strategy using cookies.
 */
export async function loginAction(data: LoginSchema): Promise<AuthResponse> {
  const validatedFields = loginSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid fields",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password, rememberMe } = validatedFields.data;

  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate credential check (Brute-force protection could be implemented here via Redis/IP tracking)
    if (email === "admin@example.com" && password === "Password123!") {
      // 1. In a real app, generate a JWT or Session ID
      const mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
      
      // 2. Set secure cookie
      const cookieStore = await cookies();
      cookieStore.set("auth-token", mockToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: rememberMe ? 60 * 60 * 24 * 30 : undefined, // 30 days or session-only
        path: "/",
      });

      console.log(`[AUTH] User logged in: ${email}`);

      return {
        success: true,
        message: "Login successful!",
        user: {
          id: "admin-1",
          email: "admin@example.com",
          name: "Admin User",
        },
      };
    }

    // 3. Security: generic error message to prevent account enumeration
    return {
      success: false,
      message: "Invalid email or password.",
    };
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
