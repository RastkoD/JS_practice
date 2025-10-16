function Task({ taskName, done, toggle, deleteTask }) {
  return (
    <div>
      <span
        style={{
          textDecoration: done ? "line-through" : "none",
        }}
      >
        {taskName}
      </span>{" "}
      - <span>{done ? "Done" : "Not Done"}</span>
      <button onClick={toggle}>Toggle Done</button>
      <button onClick={deleteTask}>Delete Task</button>
    </div>
  );
}

export default Task;
