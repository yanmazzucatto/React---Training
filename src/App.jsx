import { useState } from "react";
import AddTask from "./AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "estudar programação",
      description: "tornar-se full stack com react",
      isCompleted: false,
    },
    {
      id: 2,
      title: "tornar-se fluente em inglês",
      description: "praticar conversação e vocabulário diariamente",
      isCompleted: false,
    },
    {
      id: 3,
      title: "aprender cálculo",
      description: "estudar limites, derivadas e integrais",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTasks);
  }

  function clickOnTrash(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="h-screen bg-slate-500 flex justify-center items-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Tasks Manager
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          clickOnTrash={clickOnTrash}
        />
      </div>
    </div>
  );
}

export default App;
