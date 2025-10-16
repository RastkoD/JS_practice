import "./App.css";
import { useState } from "react";
import Person from "./components/PersonAddress/Person";
import TaskList from "./components/tasks/TaskList";
import AddTask from "./components/tasks/AddTask";

/*const person = [
  {
    id: 1,
    name: "Maja Petrović",
    age: 27,
    gender: "Female",
    address: {
      city: "Belgrade",
      street: "Knez Mihailova 10",
      zip: "11000",
    },
  },
  {
    id: 2,
    name: "Marko Ilić",
    age: 32,
    gender: "Male",
    address: {
      city: "Novi Sad",
      street: "Bulevar Oslobođenja 45",
      zip: "21000",
    },
  },
  {
    id: 3,
    name: "Ana Jovanović",
    age: 22,
    gender: "Female",
    address: {
      city: "Niš",
      street: "Voždova 8",
      zip: "18000",
    },
  },
]; */

const initialTasks = [
  { id: 1, name: "Learn React", done: false },
  { id: 2, name: "Buy groceries", done: true },
  { id: 3, name: "Walk the dog", done: false },
];

function App() {
  const [tasksState, setTasksState] = useState(initialTasks);

  function toggleTask(id) {
    setTasksState((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function deleteTask(id) {
    setTasksState((prev) => prev.filter((t) => t.id !== id));
  }

  function addTask(name) {
    setTasksState((prev) => [...prev, { id: Date.now(), name, done: false }]);
  }

  function clearAll() {
    setTasksState([]);
  }

  return (
    <>
      <AddTask onAdd={addTask} />
      <TaskList
        tasks={tasksState}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onClearAll={clearAll}
      />
    </>
  );
}

export default App;
