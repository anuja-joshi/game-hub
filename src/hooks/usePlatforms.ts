import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  apiClient.get('/platforms').then((res) => res.data)

  return useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms').then((res) => res.data),
    staleTime: 10 * 60 * 1000,
    initialData: {count: platforms.length, results: platforms}
  })
}

export default usePlatforms;
