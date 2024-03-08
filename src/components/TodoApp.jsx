import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

function TodoApp() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      // setTask(task =>[ ...task,newTask]);
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const archiveTask = task.filter((_, i) => i !== index);
    setTask(archiveTask);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }

  function moveTaskDown(index) {
    if (index < task.length) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }

  return (
    <div className=" max-w-screen-xl h-screen px-10 ">
      <div className=" flex items-center justify-center">
        <h1 className=" mt-10 mb-20 font-semibold text-5xl">Todo</h1>
      </div>
      <div className=" todo-input w-full lg:w-1/2 flex  container mx-auto  gap-2 items-center lg:justify-center md:justify-center mb-14">
        <input
          className=" w-full p-2 rounded-md bg-zinc-600 text-white"
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          onClick={addTask}
          className=" add-btn rounded-md border-1 border-green-400 px-3 py-2 text-sm font-medium bg-green-600 hover:bg-green-500"
        >
        Add
        </button>
      </div>

      <div className="w-full lg:w-1/2  container mx-auto  gap-2 items-center lg:justify-center md:justify-center">
        {task.map((tasks, index) => (
          <li
            className="list-none w-full p-2 rounded-md bg-zinc-600 text-white flex gap-2 mt-3 justify-between"
            key={index}
          >
            <span className=" w-3/4">{tasks}</span>

            <button
              onClick={() => deleteTask(index)}
              className=" delete-btn rounded-md border-1 border-red-400 w-20 h-7 text-sm font-medium bg-red-600 hover:bg-red-500"
            >
              Delete
            </button>
            <span
              onClick={() => moveTaskUp(index)}
              className=" move-up cursor-pointer rounded-md w-10 h-7 text-sm justify-center flex items-center bg-gray-400 text-zinc-800 hover:bg-gray-300"
            >
              <FaArrowUp />
            </span>
            <span
              onClick={() => moveTaskDown(index)}
              className=" move-down cursor-pointer rounded-md w-10 h-7 text-sm justify-center flex items-center bg-gray-400 text-zinc-800 hover:bg-gray-300"
            >
              <FaArrowDown />
            </span>
          </li>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
