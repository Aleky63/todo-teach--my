import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

function Todo() {
  const [tasks, setTasks] = useState([
    { id: "task-1", title: "Купить молоко", isDone: false },
    { id: "task-2", title: "Купить водку", isDone: false },
    { id: "task-3", title: "Купить хлеб", isDone: true },
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  const deleteAllTasks = () => {
    setTasks([]);
  };
  const deleteTask = (taskId) => {
    setTasks((currentTasks) => currentTasks.filter(({ id }) => id !== taskId));
  };
  const toggleTaskComplete = (taskId, isDone) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, isDone } : task,
      ),
    );
  };

  const filterTasks = (query) => {
    setSearchQuery(query);
  };

  const addTask = (title) => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
      isDone: false,
    };
    setTasks((currentTasks) => [...currentTasks, newTask]);
  };
  const visibleTasks = tasks.filter(({ title }) =>
    title.toLocaleLowerCase().includes(searchQuery.trim().toLocaleLowerCase()),
  );

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>

      <AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={visibleTasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  );
}

export default Todo;
