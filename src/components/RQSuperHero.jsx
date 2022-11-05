import { useSuperHeroData } from "../hook/superHeroData";
import { useParams } from "react-router-dom";

export const RQSuperHero = () => {
  const { heroId } = useParams();
  const { data: hero, isError, isLoading, error } = useSuperHeroData(heroId);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      {isError ? (
        <h2>{error.message}</h2>
      ) : (
        <>
          <h2>Hero details</h2>
          <div>
            <b>{hero.name}</b> - {hero.alterEgo}
          </div>
        </>
      )}
    </>
  );
};
