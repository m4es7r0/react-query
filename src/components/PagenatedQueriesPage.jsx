import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Title } from "./reusable";
import { useShownByTimer } from "../hook/shownByTimer";

const fetchColors = (pageNumber) =>
  axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);

export const PagenatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = useState(1);

  // useQuery hook
  const { data, isLoading, isError, isFetching, error } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    {
      select: ({ data }) => data,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const isShown = useShownByTimer(1000, [isFetching]);

  if (isError) return <Title body={`Error: ${error.message}`} />;
  if (isLoading) return <Title body="Loading..." />;

  return (
    <>
      <Title body="PagenatedQueries Page" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            gap: 10,
          }}
        >
          {data?.map((e) => (
            <div
              key={e.id}
              style={{
                width: 150,
                height: 80,
                backgroundColor: e.label,
                boxShadow: '1px 1px 2px -1px black'
              }}
            ></div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <button
            onClick={() => setPageNumber((page) => --page)}
            disabled={pageNumber === 1}
          >
            prev
          </button>
          <button
            onClick={() => setPageNumber((page) => ++page)}
            disabled={pageNumber === 3}
          >
            next
          </button>
        </div>
        <div>{isShown && <div>fetching...</div>}</div>
      </div>
    </>
  );
};
