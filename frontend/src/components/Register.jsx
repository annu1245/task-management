import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router";
import { BASE_URL } from "../utils/constants";

const Register = () => {
    const [username, setUserName] = useState("")
    const [email, setEmailId] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("")

    const navigate = useNavigate();
    const userData = useSelector(store => store.user);

    const handleLRegister = async() => {
      if (userData) return;
        try {
            const res = await axios.post(BASE_URL + "/register", {
                username,
                email,
                password
            }, {withCredentials: true})
            navigate("/login")
        } catch (error) {
            setError(error?.response?.data || "something went wrong")
        }
    }

    return (
        <div className="flex justify-center my-10">
            <div className="card card-border bg-base-300 w-96 ">
                <div className="card-body">
                    <h2 className="card-title justify-center">Register form</h2>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Username</legend>
                        <input 
                            type="text" 
                            className="input" 
                            placeholder="Username" 
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email Id</legend>
                        <input 
                            type="text" 
                            className="input" 
                            placeholder="Email Id" 
                            value={email}
                            onChange={(e) => setEmailId(e.target.value)}
                            />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input 
                            type="password" 
                            className="input" 
                            placeholder="passsword"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            />
                            <label>
                                <ol>
                                Rules:
                                    <li>Minimum 1 capital letter</li>
                                    <li>Minimum 1 small letter</li>
                                    <li>Minimum 1 number</li>
                                    <li>Minimum 1 special character</li>
                                    <li>Minimum password length 8</li>
                                </ol>
                            </label>
                    </fieldset>
                    <p className="text-red-500 font-bold">{error}</p>
                    <div className="card-actions justify-center mt-4">
                        <button className="btn btn-primary" onClick={handleLRegister}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;