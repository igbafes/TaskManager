import "./App.css";

import { useState } from "react";

import Header from "./Components/Header";

import Tasks from "./Components/Tasks";

import TaskEdit from "./Components/TaskEdit";

function App() {
  const [tasks, setTasks] = useState([
    {
      desc: "Learn React",
      id: 1,
      date: "26-05-2023",
      complete: false,
    },
    {
      desc: "Node js",
      id: 2,
      date: "26-05-2023",
      complete: false,
    },
  ]);

  const onToggleStatus = (task) => {
    console.log("completing task");
    setTasks(
      tasks.map((checkTask) => {
        checkTask.complete =
          task.id === checkTask.id ? !checkTask.complete : checkTask.complete;
        return checkTask;
      })
    );
  };

  const [showTaskEdit, setShowTaskEdit] = useState(false);

  const onSaveTask = ({ desc, date }) => {
    console.log("saving tasks");
    setTasks([
      { desc: desc, date: date, id: Date.now(), complete: false },
      ...tasks,
    ]);
  };
  

  return (
    <div className="App">
      
      <Header />

      <div className="container">
        <div className="col-12 text-right">
          <button
            className="button outline"
            onClick={() => setShowTaskEdit(!showTaskEdit)}>
            {!showTaskEdit && "New"}
            {showTaskEdit && "➖"}
          </button>
        </div>
        {showTaskEdit && <TaskEdit task={{}} onSaveTask={onSaveTask} />}
        <Tasks tasks={tasks} onToggleStatus={onToggleStatus} />
      </div>
    </div>
  );
}



export default App;
