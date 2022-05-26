import TaskHead from "./TaskHead";
import Task from "./Task";
import NewTask from "./NewTask";

function TaskContainer() {
  return (
    <section>
      <TaskHead />
      <Task />
      <NewTask />
    </section>
  );
}
export default TaskContainer;
