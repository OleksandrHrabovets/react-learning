import { useState } from "react";

function Body() {
  const [auth, setAuth] = useState(true);

  function onClickLogin() {
    console.log("Login click");
    setAuth(!auth);
  }

  return (
    <div>
      <h3>Body</h3>
      {auth && (
        <>
          <input type="text" placeholder="login" />
          <input type="text" placeholder="password" />
          <button onClick={onClickLogin}>Login</button>
        </>
      )}
      {!auth && (
        <>
          <button onClick={onClickLogin}>Logout</button>
        </>
      )}
    </div>
  );
}

export default Body;
