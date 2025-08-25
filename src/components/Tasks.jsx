import { Trash, ChevronRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, clickOnTrash }) {
  const navigate = useNavigate();

  function onSeeDetails(task) {
    navigate(`/task?title=${task.title}&description=${task.description}`);
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 rounded-md bg-slate-200 shadow p-6">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={` w-full text-left bg-slate-400  text-white  p-2 rounded-md ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            {task.title}
          </button>

          <button
            onClick={() => onSeeDetails(task)}
            className="bg-slate-400  text-white  p-2 rounded-md"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => clickOnTrash(task.id)}
            className="bg-slate-400  text-white  p-2 rounded-md"
          >
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
