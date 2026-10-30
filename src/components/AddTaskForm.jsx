import Field from "./Field";
import Button from "./Button";

const AddTaskForm = (props) => {
  const { addTask } = props;

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const title = new FormData(form).get("title")?.toString().trim();

    if (!title) {
      return;
    }

    addTask(title);
    form.reset();
  };
  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        label="New task title"
        id="new-task"
        name="title"
      />
      <Button type="submit">Add</Button>
    </form>
  );
};
export default AddTaskForm;
