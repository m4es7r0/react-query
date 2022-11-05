import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetch = ({ queryKey }) => {
  return axios.get(`http://localhost:4000/superheroes/${queryKey[1]}`);
};

export const useSuperHeroData = (heroId) => {
  const client = useQueryClient();
  return useQuery(["super-hero", heroId], fetch, {
    cacheTime: 30000,
    select: ({ data }) => data,
    initialData: () => {
      const hero = client
        .getQueryData("super-heroes")
        ?.data?.find((hero) => hero.id === parseInt(heroId));
        if(hero) return {data: hero}
        else return undefined
    },
  });
};
