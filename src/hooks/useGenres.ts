import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from 'ms'
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
        staleTime: ms('24h'), // 24hrs
        initialData: genres
    })
}

export default useGenre;