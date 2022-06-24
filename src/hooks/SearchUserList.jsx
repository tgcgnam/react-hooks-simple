import { Input } from "antd";
import { useState, useEffect, useMemo } from "react";

function SearchUserList() {
  const [users, setUsers] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  }, []);

  const userShow = useMemo(() => {
    if (!users) return null;
    return users.filter((user) =>
      user.first_name.toLowerCase().includes(searchKey)
    );
  });

  return (
    <div className="wrapper" style={{ width: "300px" }}>
      <Input
        type={"text"}
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <div className="list-user">
        <ul>
          {userShow &&
            userShow.length > 0 &&
            userShow.map((user) => <li key={user.id}>{user.first_name}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default SearchUserList;
