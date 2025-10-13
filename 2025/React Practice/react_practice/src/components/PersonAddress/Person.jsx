import PersonCard from "./PersonCard";

function Person({ person }) {
  return (
    <>
      <h1>Ganja</h1>
      <div>
        {person.map((p) => {
          return (
            <PersonCard
              key={p.id}
              name={p.name}
              age={p.age}
              gender={p.gender}
              address={p.address}
            />
          );
        })}
      </div>
    </>
  );
}

export default Person;
