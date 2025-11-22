function Profile({ name }) {
  const handleClick = () => {
    alert(`Kliklədiyiniz tələbə: ${name}`);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        cursor: "pointer",
        border: "1px solid #ccc",
        padding: "10px",
        margin: "5px",
      }}
    >
      <h3>{name}</h3>
    </div>
  );
}

export default Profile;
