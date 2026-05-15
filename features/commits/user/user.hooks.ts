import { useQuery } from "@tanstack/react-query";

export const useUser = (id: string, options?: { enabled?: boolean }) => {
    return useQuery({
        queryKey:['user',id],
        queryFn:,
        placeholderData:,
        staleTime:1000*60 *2
    })
};