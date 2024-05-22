import { useState } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};

export default function StateHook() {
  //   const [count, setCount] = useState(0); // auto set type
  //   const [count, setCount] = useState<number>(0); // manual type
  //   const [user, setUser] = useState<null | User>(null);
  const [user, setUser] = useState<User>({} as User);

  const handleUser = () => {
    setUser({ id: 1, name: "Ashadul", age: 25 });
  };
  return (
    <div>
      <h1>StateHook</h1>
      {/* <h1>count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button> */}
      <h1>
        {/* user : {user?.id} {user?.name} {user?.age} */}
        user : {user.id} {user.name} {user.age}
      </h1>
      <button onClick={handleUser}>click</button>
    </div>
  );
}
