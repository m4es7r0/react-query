import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hook/superHeroesData";
export const RQSuperHeroesPage = () => {
  const { data, isError, isLoading, error } =
    useSuperHeroesData("super-heroes");

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      {isError ? (
        <h2>{error.message}</h2>
      ) : (
        <>
          <h2>RQ Super Heroes Page</h2>
          {data.map((hero) => (
            <div key={hero.id}>
              <Link to={`rq-super-heroes-details/${hero.id}`}>{hero.name}</Link>
            </div>
          ))}
        </>
      )}
    </>
  );
};
