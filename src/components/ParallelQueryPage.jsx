import { useQuery } from "react-query";
import axios from "axios";
import { List, Title } from "./reusable";

const fetchSuperHeroes = () => axios.get("http://localhost:4000/superheroes");
const fetchSuperHeroFriends = () => axios.get("http://localhost:4000/friends");

export const ParallelQueryPage = () => {
  const {
    data: heroes,
    isError: isErrorH,
    isLoading: isLoadingH,
  } = useQuery("paralell-hero", fetchSuperHeroes, {
    select: ({ data }) => data,
  });
  const {
    data: friends,
    isError: isErrorF,
    isLoading: isLoadingF,
  } = useQuery("paralell-friends", fetchSuperHeroFriends, {
    select: ({ data }) => data,
  });

  if (isLoadingF || isLoadingH) return <h2>loading...</h2>;

  return (
    <>
      <Title body={"ParallelQueryPage"} />
      {isErrorF || isErrorH ? (
        <h2>Erorr</h2>
      ) : (
        <div className="list-of-heroes">
          <List data={heroes} />
          <List data={friends} isSpan />
        </div>
      )}
    </>
  );
};
