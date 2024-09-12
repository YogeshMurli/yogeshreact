import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetchData from "../Hooks/useFetchData";
// import { Users, users } from "lucide-react";
import { Link } from "react-router-dom";

const UserPage = (userlist) => {
  const [user, setUser] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {user.map((userlist) => (
        <Link to={`/users/${userlist.id}`}>
          <h1>{userlist.name}</h1>
        </Link>
      ))}
    </div>
  );
};
export default UserPage;
