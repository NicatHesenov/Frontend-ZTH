import "./profile.css";
function Profile({ name }) {
  const onHandleAlert = () => {
    alert(`Seçilən tələbə: ${name}`);
  };
  return (
    <button className="button" onClick={onHandleAlert}>
      {name}
    </button>
  );
}

export default Profile;
