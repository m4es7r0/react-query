import { useSuperHeroesData } from "../hook/superHeroesData";

export const HomePage = () => {
  const { data, error, isLoading, isError, refetch } = useSuperHeroesData(
    "super-heroes-home",
    false,
    5000
  );

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      {isError ? (
        <h2>{error.message}</h2>
      ) : (
        <>
          <h2>Home Page</h2>
          <h3>
            super hero with alt name: <button onClick={refetch}>Fetch</button>
          </h3>
          <ul>
            {data?.map((hero) => (
              <li key={hero.id} className={"hero-list"}>
                <h4>{hero.name}</h4>
                <p>alt - {hero.alterEgo}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
