function Logout({ logout }) {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Logout;