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
  {
    id: 4,
    name: "TM sale link update",
  },
  {
    id: 5,
    name: "FOE stock link update",
  },
  {
    id: 6,
    name: "FOE sale link update",
  },
];

function App() {
  const [completeStatus, setCompleteStatus] = useState(
    tasks.reduce((acc, task) => ({ ...acc, [task.id]: false }), {})
  );
  const [currentDate, setCurrentDate] = useState(new Date());

  const day = currentDate.getDate();

  const handleClick = (taskId) => {
    setCompleteStatus((prevStatus) => ({
      ...prevStatus,
      [taskId]: true,
    }));
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
        <div className="my-3">
          <h2 className="text-xl font-bold">
            Date: {currentDate.toLocaleDateString()}
          </h2>
        </div>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={
                completeStatus[task.id]
                  ? "bg-green-400 text-white p-2 font-medium"
                  : "bg-gray-100 p-2 font-medium"
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
