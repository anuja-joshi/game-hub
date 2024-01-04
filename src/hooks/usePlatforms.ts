import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, {FetchResponse} from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () => 
        apiClient.get<FetchResponse<Platform>>('/platforms').then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
    initialData: {count: platforms.length, results: platforms}
  })
}

export default usePlatforms;
