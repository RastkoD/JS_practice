import Task from "./Task";

function TaskList({ tasks, onToggle, onDelete, onClearAll }) {
  return (
    <>
      <button onClick={onClearAll}>Clear All</button>
      {tasks.map((t) => (
        <Task
          key={t.id}
          taskName={t.name}
          done={t.done}
          toggle={() => onToggle(t.id)}
          deleteTask={() => onDelete(t.id)}
        />
      ))}
    </>
  );
}

export default TaskList;
