import { useQuery } from "@tanstack/react-query";
import { userService } from "@/features/container";

export const useUser = (id: string, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => userService.getUser(id),
    enabled: options?.enabled ?? true,
    staleTime: 1000 * 60 * 2,
  });
};
