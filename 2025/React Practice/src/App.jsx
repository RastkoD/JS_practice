import "./App.css";
import { useState } from "react";
import Person from "./components/PersonAddress/Person";
import Task from "./components/tasks/Task";

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

const tasks = [
  { id: 1, name: "Learn React", done: false },
  { id: 2, name: "Buy groceries", done: true },
  { id: 3, name: "Walk the dog", done: false },
];

function App() {
  const [tasksState, setTasksState] = useState(tasks);

  function toggleTask(id) {
    setTasksState((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  return (
    <>
      {tasksState.map((t) => (
        <Task
          key={t.id}
          taskName={t.name}
          done={t.done}
          toggle={() => toggleTask(t.id)}
        />
      ))}
    </>
  );
}

export default App;
