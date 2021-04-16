import { useState } from "react";

const Users = [
  { name: "kent", age: 12 },
  { name: "ana", age: 39 },
  { name: "lex", age: 30 },
];


interface User {
  name: string;
  age: number;
}

export const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<User[]>([]);

  const search = () => {
    setName("");

    const result = Users.filter((user) => user.name.indexOf(name) > -1);
    setUser(result);
  };

  return (
    <div>
      <h3>User Search</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={search}>Search</button>
      <h5>User Details</h5>
      {user.length === 0 ? (
        <p>Khong tim thay</p>
      ) : (
        user.map((item) => {
          return (
            <>
              <p>name: {item.name}</p>
              <p>age: {item.age}</p>
            </>
          );
        })
      )}
    </div>
  );
};
