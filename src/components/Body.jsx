function Body() {
  function onClick() {
    console.log("Login click");
  }

  return (
    <div>
      <h3>Body</h3>
      <input type="text" placeholder="login" />
      <input type="text" placeholder="password" />
      <button onClick={onClick}>Login</button>
    </div>
  );
}

export default Body;
