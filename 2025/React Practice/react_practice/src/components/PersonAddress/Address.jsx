function Address({ address }) {
  const fields = ["city", "street", "zip"];

  return (
    <>
      <p>
        {fields
          .map((field) => (address?.[field] ? address[field] : "/"))
          .join(", ")}
      </p>
    </>
  );
}

export default Address;
