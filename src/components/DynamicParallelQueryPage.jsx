import { useQueries } from "react-query";
import axios from "axios";

import { Title } from "./reusable";

const fetchSuperHero = (heroId) =>
  axios.get(`http://localhost:4000/superheroes/${heroId}`);

export const DynamicParallelQueryPage = ({ heroId }) => {
  const queryRes = useQueries(
    heroId.map((id) => ({
      queryKey: ["super-hero", id],
      queryFn: () => fetchSuperHero(id),
      select: ({ data }) => data,
    }))
  );

  for (let res of queryRes) {
    if (res.status === "loading") return <Title body={"Loading..."} />;
  }

  return (
    <>
      <Title body={"DynamicParallelQuery Page"} />
      <div>{queryRes[0].data.name}</div>
      <div>{queryRes[1].data.name}</div>
    </>
  );
};
