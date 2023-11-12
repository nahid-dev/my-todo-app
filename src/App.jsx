import { useEffect, useState } from "react";
import "./App.css";

const tasks = [
  {
    id: 1,
    name: "MCS",
  },
  {
    id: 2,
    name: "Stock submit",
  },
  {
    id: 3,
    name: "Sale report",
  },
];

function App() {
  const [completeStatus, setCompleteStatus] = useState(
    tasks.reduce((acc, task) => ({ ...acc, [task.id]: false }), {})
  );
  const [currentDate, setCurrentDate] = useState(new Date());

  const day = currentDate.getDate();

  const handleClick = (taskId) => {
    if (!completeStatus[taskId]) {
      setCompleteStatus((prevStatus) => ({
        ...prevStatus,
        [taskId]: true,
      }));
    }
  };

  useEffect(() => {
    // Reset completion status when the day changes
    setCompleteStatus(
      tasks.reduce((acc, task) => ({ ...acc, [task.id]: false }), {})
    );
  }, [day]);

  return (
    <div className="flex items-center justify-center h-screen w-full px-3">
      <div className="card w-96 shadow-md border p-5">
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={
                completeStatus[task.id] ? "bg-green-400" : "bg-gray-100"
              }
              onClick={() => handleClick(task.id)}
            >
              {task.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
