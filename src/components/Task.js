import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import reject from "../reject.png";

const DUMMY_DATA = [
  {
    id: 1,
    taskName: "Clean shower",
    lastDate: "12/04/2022",
    interval: "monthly",
    reminder: "Off",
    category: "Cleaning",
  },
  {
    id: 2,
    taskName: "Change the sheets",
    lastDate: "29/04/2022",
    interval: "biweekly",
    reminder: "On",
    category: "Cleaning",
  },
  {
    id: 3,
    taskName: "Change AC filter",
    lastDate: "01/11/2021",
    interval: "yearly",
    reminder: "On",
    category: "Misc",
  },
  {
    id: 4,
    taskName: "Clean living room",
    lastDate: "05/03/2022",
    interval: "monthly",
    reminder: "Off",
    category: "Cleaning",
  },
  {
    id: 5,
    taskName: "Mow lawn",
    lastDate: "07/05/2022",
    interval: "none",
    reminder: "Off",
    category: "Garden",
  },
];

function Task() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let clickedTask;
  function changeDate(e) {
    const targetTask = e.target.parentElement;
    const currentDate = new Date().toLocaleDateString("en-GB");
    targetTask.querySelector(".taskDate").innerHTML = currentDate;
  }
  function deleteHandler(e) {
    const targetTask = e.target.parentElement;
    clickedTask = targetTask;
    console.log(clickedTask);
    setModalIsOpen(true);
    /* if (closeModalHandler) {
      clickedTask.remove();
    } else {
    } */
  }
  function closeModalHandler(e) {
    console.log(e.target.innerHTML);
    setModalIsOpen(false);
    /* if (e.target.innerHTML === "Cancel") {
      setModalIsOpen(false);
      return true;
    } else {
      setModalIsOpen(false);
      return false;
    } */
  }
  let id = 0;
  return (
    <div>
      {DUMMY_DATA.map((obj) => {
        obj.id = id + 1;
        return (
          <div key={obj.id} className="card">
            <p>{obj.taskName}</p>
            <div>
              <p className="hide-wide">Last done:</p>
              <p className="taskDate">{obj.lastDate}</p>
            </div>
            <div>
              <p className="hide-wide">Interval:</p>
              <p>{obj.interval}</p>
            </div>
            <div>
              <p className="hide-wide">Reminder:</p>
              <p>{obj.reminder}</p>
            </div>
            <button className="btn done-btn" onClick={changeDate}>
              Done
            </button>
            <button className="btn delete-btn" onClick={deleteHandler}>
              <img src={reject} alt="delete-icon" />
            </button>
            {modalIsOpen && <Modal onClick={closeModalHandler} />}
            {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
          </div>
        );
      })}
    </div>
  );
}

export default Task;
