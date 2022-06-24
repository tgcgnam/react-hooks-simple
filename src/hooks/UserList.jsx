import { useState } from "react";
import { Button } from "antd";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://reqres.in/api/users/");
      const json = await res.json();
      setTimeout(() => {
        setUsers(json.data);
      }, 1000);
    } catch (err) {
      setError(err);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="user-list">
      <Button onClick={fetchUsers}>
        {loading ? "Loading..." : "Show users"}
      </Button>
      <div>
        {error && <div style={{ color: "red" }}>"Loi roi ban oi ..."</div>}
        <ul>
          {users.length > 0 &&
            users.map((user, index) => <li key={index}>{user.first_name}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default UserList;
