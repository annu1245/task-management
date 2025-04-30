import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeUser } from "../utils/userSlice";

const Header = () => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
            dispatch(removeUser());
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="navbar bg-base-300 shadow-sm px-4">
            {/* Logo / Home */}
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">
                    Task Manager
                </Link>
            </div>

            {/* Right Side: User Info and Auth Buttons */}
            <div className="flex-none flex items-center gap-4">
                {user ? (
                    <>
                        <p className="text-white">Welcome, {user.username}</p>
                        <button onClick={handleLogout} className="btn btn-error btn-sm">
                            Logout
                        </button>
                    </>
                ) : (
                    <div>
                        <Link to="/login" className="btn btn-primary btn-sm mx-4">
                            Login
                        </Link>

                        <Link to="/register" className="btn btn-secondary btn-sm mx-4">
                            Register
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
