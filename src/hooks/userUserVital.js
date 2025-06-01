import { useQuery } from "@tanstack/react-query";

const ENDPOINT = "http://localhost:3001/vitals";

export function useUserVital() {
  const data = useQuery({
    queryKey: ["vital"],
    queryFn: async () => {
      const response = await fetch(ENDPOINT);
      return response.json();
    },
  });
  return data;
}
