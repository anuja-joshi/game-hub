import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";
import genres from "../data/genres";

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

const useGenre = () => {
    const fetchGenres = () => {
        return apiClient
        .get<FetchResponse<Genre>>('/genres')
        .then((res) => res.data)
    }

    return useQuery({
        queryKey: ['genre'],
        queryFn: fetchGenres,
        staleTime: 24 * 60 * 60 * 1000, // 24hrs
        initialData: {count: genres.length, results: genres}
    })

}

export default useGenre;