const TaskCard = ({ title, description, status, dueDate }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "To Do":
        return "bg-gray-600";
      case "In Progress":
        return "bg-yellow-500";
      case "Done":
        return "bg-green-500";
      default:
        return "bg-gray-700";
    }
  };
  return (
    <div className="bg-gray-800 text-white rounded-xl shadow-lg p-6 w-full max-w-md">
      {/* Title */}
      <h2 className="text-xl font-bold mb-2 text-blue-400">{title}</h2>

      {/* Dim Horizontal Line */}
      <hr className="border-gray-600 mb-4" />

      {/* Description */}
      <div className="text-sm text-gray-300 mb-6 min-h-[80px]">
        {description}
      </div>

      {/* Status & Date */}
      <div className="flex justify-between items-center text-sm text-gray-400">
        <span className={`px-3 py-1 rounded-full text-white capitalize ${getStatusColor(status)}`}>
          {status}
        </span>
        <span>Due Date: {new Date(dueDate).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default TaskCard;