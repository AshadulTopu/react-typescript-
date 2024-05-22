import { useState } from "react";

export default function Event() {
  const [username, setUsername] = useState("");
  const [show, setShow] = useState(false);

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleShow = (event: React.MouseEvent<HTMLButtonElement>) => {
    setShow(!show);
  };
  return (
    <div>
      <h1>Event</h1>
      <input type="text" value={username} onChange={handleUsername} />

      <button onClick={handleShow}> {show ? "Hide" : "Show"} </button>
      {show && <p>{username}</p>}
      {/* <p>{username}</p> */}
    </div>
  );
}
