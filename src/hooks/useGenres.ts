import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";

const apiClient = new APIClient<Genre>('/genres')

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

const useGenre = () => {
    return useQuery({
        queryKey: ['genre'],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, // 24hrs
        initialData: genres
    })
}

export default useGenre;