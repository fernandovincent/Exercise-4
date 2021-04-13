import React, { useState } from "react";
import NavBar from '../../molecules/NavBar';

const Login = ({ }) => {
  const [fullName, setfullName] = useState("");
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    const data = {
      fullName: fullName,
      userName: userName,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
    };
    console.log(data);
  };

  return (
    //JSX
    <div className="container mt-5">
      <NavBar />
      <h3 className="mt-3">Register</h3>
      <p className="form-label mt-3">Fullname</p>
      <input
        className="form-control"
        placeholder="Masukan full name"
        value={fullName}
        onChange={(e) => setfullName(e.target.value)}
      />
      <p className="form-label mt-3">Username</p>
      <input
        className="form-control"
        placeholder="Masukan username"
        type="userName"
        value={userName}
        onChange={(e) => setuserName(e.target.value)}
      />
      <p className="form-label mt-3">Email</p>
      <input
        className="form-control"
        placeholder="Masukan email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="form-label mt-3">Phone Number</p>
      <input
        className="form-control"
        placeholder="Masukan phone number"
        type="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setphoneNumber(e.target.value)}
      />
      <p className="form-label mt-3">Address</p>
      <input
        className="form-control"
        placeholder="Masukan address"
        type="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <br />
      <button type="button" onClick={handleSubmit} className="btn btn-primary">
        Register
      </button>
    </div>
  );
};

export default Login;