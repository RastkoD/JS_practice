import Address from "./Address";

function PersonCard({ name, age, gender, address }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
      <h4>{gender}</h4>
      <Address address={address} />
    </div>
  );
}

export default PersonCard;
