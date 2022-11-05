import { useQuery } from "react-query"
import axios from 'axios';

const fetch = async () => {
    const res = await axios.get('http://localhost:4000/superheroes')
    return res
}

export const useSuperHeroesData = (name, enabledHandle, cacheTime) => {
    return useQuery(name, fetch, {
        select: ({ data }) => data.slice(),
        enabled: enabledHandle ?? true,
        cacheTime: cacheTime ?? 30000
    })
}