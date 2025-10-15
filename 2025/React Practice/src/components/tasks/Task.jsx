function Task({ taskName, done, toggle }) {
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
    </div>
  );
}

export default Task;
