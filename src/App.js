import { Route, Switch } from "react-router-dom";
import Intro from "./components/Intro";
import OverDueTasksPage from "./pages/OverDueTasksPage";
import AboutPage from "./pages/About";
import Header from "./components/Header";
import TaskContainer from "./components/TaskContainer";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Intro />
          <TaskContainer />
        </Route>
        <Route path="/over-due-tasks">
          <OverDueTasksPage />
          <p>Placeholder overdue tasks</p>
        </Route>
        <Route path="/about-page">
          <AboutPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
