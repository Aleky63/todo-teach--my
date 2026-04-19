import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { tasks = [] } = props;
  const hasTasks = true;

  if (!hasTasks) {
    return <div className="todo__empty-message"></div>;
  }

  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
          className="todo__item"
          title={task.title}
          isDone={task.isDone}
          key={task.id}
        />
      ))}
    </ul>
  );
};
export default TodoList;
