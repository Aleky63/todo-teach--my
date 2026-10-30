import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { tasks = [], onDeleteTaskButtonClick, onTaskCompleteChange } = props;

  if (tasks.length === 0) {
    return <div className="todo__empty-message">No tasks to display.</div>;
  }

  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
          className="todo__item"
          id={task.id}
          title={task.title}
          isDone={task.isDone}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          onTaskCompleteChange={onTaskCompleteChange}
          key={task.id}
        />
      ))}
    </ul>
  );
};
export default TodoList;
