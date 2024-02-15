import { useState, useEffect, useRef, useId } from "react";

function Body() {
  const [auth, setAuth] = useState(true);
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  const passwordHintId = useId();

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
          <input
            type="password"
            aria-describedby={passwordHintId}
            placeholder="password"
          />
          <p id={passwordHintId}>
            The password should contain at least 18 characters
          </p>
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
