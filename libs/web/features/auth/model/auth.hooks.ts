import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { authKeys } from "./auth.querykeys";
import { authService } from "@/features/container";
import { LoginParams, RegisterParams } from "./auth.types";
import { toast } from "sonner";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: authKeys.me(),
    queryFn: () => authService.getCurrentUser(),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: LoginParams) => authService.login(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: authKeys.all });
    },
    onError: (error: any) => {
      toast.error(error.message || "Login failed");
    },
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: RegisterParams) => authService.register(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: authKeys.all });
      toast.success("User registered successfully");
    },
    onError: (error: any) => {
      toast.error(error.message || "Registration failed");
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      queryClient.clear();
      window.location.href = '/login';
    },
  });
};
