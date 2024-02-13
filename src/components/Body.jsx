import { useState, useEffect } from "react";

function Body() {
  const [auth, setAuth] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  function onClickLogin() {
    console.log("Login click");
    setAuth(!auth);
    setCount(count + 1);
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
      <p>You clicked {count} times</p>
    </div>
  );
}

export default Body;
