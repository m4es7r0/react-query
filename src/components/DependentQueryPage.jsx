import { useQuery } from "react-query";
import axios from "axios";
import { Title } from "./reusable";

const fetchUserByEmail = (email) =>
  axios.get(`http://localhost:4000/users/${email}`);

const fetchRepoByChannelId = (id) =>
  axios.get(`http://localhost:4000/channels/${id}`);

export const DependentQueryPage = ({ email }) => {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery(["user", email], () => fetchUserByEmail(email), {
    select: ({ data }) => data,
  });
  const channelId = user?.channelId;

  const { data: repoes } = useQuery(
    ["repo", channelId],
    () => fetchRepoByChannelId(channelId),
    {
      enabled: !!channelId,
      select: ({ data }) => data,
    }
  );

  if (isLoading) return <Title body="Loading..." />;

  return (
    <>
      <Title body="DependentQuery Page" />
      {isError ? (
        <Title body="Error" />
      ) : (
        <div>
          <b>ID:</b> {user.channelId}
          <br />
          <b>repo: </b>
          <ul>
            {repoes?.repo.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
