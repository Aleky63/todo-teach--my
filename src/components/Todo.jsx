import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

function Todo() {
  const tasks = [
    { id: "task-1", title: "Купить молоко", isDone: false },
    { id: "task-2", title: "Купить водку", isDone: false },
    { id: "task-3", title: "Купить хлеб", isDone: true },
  ];

  const deleteAllTasks = () => {
    console.log("Удаляем все");
  };
  const deleteTask = (taskId) => {
    console.log(`Удаляем задачу с id: ${taskId}`);
  };
  const toggleTaskComplete = (taskId, isDone) => {
    console.log(
      `Меняем чек с id: ${taskId} ${isDone ? "выполнена" : "не выполн"}`,
    );
  };

  const filterTasks = (query) => {
    console.log(`ПОИСК:${query}`);
  };

  const addTask = () => {
    console.log("Добавление новой задачи");
  };
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>

      <AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtunClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  );
}

export default Todo;
