import UserPage from "./UserPage";
import { useParams } from "react-router-dom";
import useFetchData from "../Hooks/useFetchData";
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserDetails = () => {
  const [user, setUser] = useState({});
  const params = useParams();
  console.log(params);
  const { userId } = params;
  const userdata = `https://jsonplaceholder.typicode.com/users/${userId}`;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
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
      <div>
        <h1>{user?.id}</h1>
        <span>name {user?.name}</span>
        <p>username {user?.username}</p>
        <p>{user?.email} </p>
        <p>{user?.address}</p>
      </div>
    </div>
  );
};

export default UserDetails;
