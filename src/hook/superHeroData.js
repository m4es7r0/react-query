import { useQuery } from "react-query"
import axios from "axios"

const fetch = ({ queryKey }) => {
    return axios.get(`http://localhost:4000/superheroes/${queryKey[1]}`)
}

export const useSuperHeroData = (heroId) => {
    return useQuery(['super-hero', heroId], fetch, {
        cacheTime: 30000,
        select: ({ data }) => data
    })
}