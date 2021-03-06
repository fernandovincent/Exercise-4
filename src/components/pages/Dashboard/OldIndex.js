import React, { useEffect, useState } from 'react';
import NavBar from '../../molecules/NavBar';
import Card from "../../molecules/Card";
import Axios from "axios";
import firebase from "../../../config/Firebase";
import {useHistory} from "react-router-dom";

const Dashboard = () => {

  const [users, setUsers] = useState([]);

  let history = useHistory();

  useEffect (()=>{
    //Fetch
    // fetch("https://reqres.in/api/users").then((res) => res.json()).then((json) => setUsers(json.data));
    //Axios
    Axios.get("http://localhost:3004/users").then((res) => setUsers(res.data));
  }, [users]);

  const addUser = () => {
    const data = {
      avatar: "https://source.unsplash.com/random",
      email: "frnandovncnt@gmail.com",
      first_name: "Fernando",
      last_name: "Piay",
    };
    Axios.post("http://localhost:3004/users", data);
  };

  const signOut = () => {
    firebase
    .auth()
    .signOut()
    .then(() => {
      //Sign-out Successful.
      history.push("/login");
    })
    .catch((error) => {
      //An error happened.
    });
  }

  return (
    <div className="container mt-5">
      <NavBar />
      <h3>Dashboard</h3>  
      <hr />
      <button className="btn btn-primary mb-3" onClick={addUser}>Tambah User</button>
      <div className="row align-items-start">
        {
          users.map(item => (
            <Card avatar={item.avatar} fullName={`${item.first_name} ${item.last_name}`} email={item.email} />
          ))}
      </div>
      <button className="btn btn-primary mb-3" onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;