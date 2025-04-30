import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TaskCard from "./TaskCard";

const Dashboard = () => {
    const userData = useSelector((store) => store.user);

    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [filterStatus, setFilterStatus] = useState("all"); // Initial filter set to 'all'

    // Fetch tasks from the API
    const fetchTasks = async () => {
        if (!userData) return;
        try {
            const res = await axios.get(BASE_URL + "/task", { withCredentials: true });
            setTasks(res.data.data);
            setFilteredTasks(res.data.data); // Set tasks in filteredTasks initially
        } catch (error) {
            console.log(error);
        }
    };

    // Handle filter change
    const handleFilterChange = (e) => {
        const selectedStatus = e.target.value;
        setFilterStatus(selectedStatus);

        if (selectedStatus === "all") {
            setFilteredTasks(tasks); // Show all tasks
        } else {
            const filtered = tasks.filter((task) => task.status === selectedStatus);
            setFilteredTasks(filtered); // Show filtered tasks
        }
    };

    // Fetch tasks when component mounts
    useEffect(() => {
        fetchTasks();
    }, [userData]);

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                {/* Filter Dropdown */}
                <div>
                    <select value={filterStatus} onChange={handleFilterChange} className="px-4 py-2 bg-gray-700 text-white rounded">
                        <option value="all">All Tasks</option>
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                </div>

                {/* New Task Button */}
                <div>
                    <Link to="/task/create" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        + New Task
                    </Link>
                </div>
            </div>

            {/* Display Tasks */}
            <div className="flex flex-wrap m-4 p-4">
                {filteredTasks.map((task) => {
                    return (
                        <Link to="/task/edit" state={{ task }} key={task._id} className="m-4 w-1/4">
                            <TaskCard title={task.title} description={task.description} status={task.status} dueDate={task.dueDate} />
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default Dashboard;
