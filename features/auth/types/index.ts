export interface AuthResponse {
  success: boolean;
  message?: string;
  user?: {
    id: string;
    email: string;
    name?: string;
  };
  errors?: Record<string, string[]>;
}

export interface RegisterFormData {
  name?: string;
  email: string;
  password: string;
  confirmPassword: string;
}
