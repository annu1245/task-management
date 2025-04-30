import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {useNavigate} from "react-router";
import { BASE_URL } from "../utils/constants";

const Login = () => {
    const [email, setEmailId] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async() => {
        try {
            const res = await axios.post(BASE_URL + "/login", {
                email,
                password
            }, {withCredentials: true})
            dispatch(addUser(res.data.data))
            navigate("/")
        } catch (error) {
            setError(error?.response?.data || "something went wrong")
        }
    }

    return (
        <div className="flex justify-center my-10">
            <div className="card card-border bg-base-300 w-96 ">
                <div className="card-body">
                    <h2 className="card-title justify-center">Login form</h2>
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
                    </fieldset>
                    <p className="text-red-500 font-bold">{error}</p>
                    <div className="card-actions justify-center mt-4">
                        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;