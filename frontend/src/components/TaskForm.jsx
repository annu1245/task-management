import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

function TaskFormPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const taskData = location.state?.task;

    const userData = useSelector((store) => store.user);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "To Do",
        dueDate: "",
        userId: userData._id,
    });

    useEffect(() => {
        if (taskData) {
            setFormData({
                title: taskData.title,
                description: taskData.description,
                status: taskData.status,
                dueDate: taskData.dueDate?.slice(0, 10),
                userId: taskData.userId,
            });
        }
    }, [taskData]);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (taskData) {
            // call update API
            axios
                .patch(BASE_URL + `/task/edit/${taskData._id}`, formData, { withCredentials: true })
                .then((res) => {
                    navigate("/"); // redirect to home
                })
                .catch((err) => {
                    console.error("Error updating task:", err.response?.data || err.message);
                });
        } else {
            // call create API
            axios
                .post(BASE_URL + "/task/create", formData, { withCredentials: true })
                .then((res) => {
                    navigate("/"); // redirect to home
                })
                .catch((err) => {
                    console.error("Error creating task:", err.response?.data || err.message);
                });
        }
    };

    const handleDelete = () => {
        if (!taskData) return;

        // Make delete request to backend
        axios
            .delete(BASE_URL + `/task/delete/${taskData._id}`, { withCredentials: true })
            .then((res) => {
                navigate("/"); // redirect to home
            })
            .catch((err) => {
                console.error("Error deleting task:", err.response?.data || err.message);
            });
    };

    return (
        <div className="flex items-center justify-center px-4">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-xl mt-4">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">{taskData ? "Edit Task" : "Create Task"}</h2>

                {/* Title */}
                <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-3 mb-4 bg-gray-700 text-white border border-gray-600 rounded" placeholder="Title" />

                {/* Description */}
                <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-3 mb-4 bg-gray-700 text-white border border-gray-600 rounded" rows="5" placeholder="Description" />

                {/* Status & Due Date */}
                <div className="flex justify-between gap-4 mb-4">
                    <select name="status" value={formData.status} onChange={handleChange} className="w-1/2 p-3 bg-gray-700 text-white border border-gray-600 rounded">
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>

                    <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} className="w-1/2 p-3 bg-gray-700 text-white border border-gray-600 rounded" />
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
                    {taskData ? "Update Task" : "Save Task"}
                </button>

                {taskData && (
                    <button
                        type="button"
                        onClick={handleDelete}
                        className="w-full bg-red-600 text-white p-3 rounded mt-4 hover:bg-red-700"
                    >
                        Delete Task
                    </button>
                )}
            </form>
        </div>
    );
}

export default TaskFormPage;
