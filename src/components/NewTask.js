function NewTask(props) {
  function addTaskHandler(e) {
    e.preventDefault();
    const target = e.target;
    const form = target.parentElement;
    const title = form.querySelector("#taskName").value;
    const interval = form.querySelector("select").value;
    const reminder = form.querySelector("#reminder").value;
    console.log(title);
    console.log(interval);
    console.log(reminder);
    const newTaskObj = {
      taskName: props.title,
      interval: props.interval,
      reminder: props.reminder,
    };
    console.log(newTaskObj);
  }
  return (
    <div className="card Form-container">
      <input id="taskName" placeholder=" Add task"></input>

      <select id="interval">
        <option>daily</option>
        <option>Every other week</option>
        <option>Monthly</option>
        <option>Yearly</option>
      </select>

      <div id="reminder-div">
        <input type="checkbox" id="reminder"></input>
      </div>
      <input
        type="submit"
        value="Add task"
        className="btn add-btn"
        onClick={addTaskHandler}
      ></input>
      <div></div>
    </div>
  );
}
export default NewTask;
