import { useState, useEffect, useRef } from "react";

function Body() {
  const [auth, setAuth] = useState(true);
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  function handleClick() {
    console.log("Login click");
    setAuth(!auth);
    setCount(count + 1);
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
  }

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  function onClickLogin() {
    handleClick();
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
