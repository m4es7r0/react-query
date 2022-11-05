export const List = ({ data, isSpan = false }) => {
  return (
    <ul>
      {data.map((e) => (
        <li key={e.id}>{isSpan ? <span>{e.name}</span> : <b>{e.name}</b>}</li>
      ))}
    </ul>
  );
};

export const Title = ({ body, className = "" }) => {
  return <h2 className={className}>{body}</h2>;
};
