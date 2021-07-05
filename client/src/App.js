import Topbar from "./components/Topbar/Topbar.jsx";
import Header from "./components/Header/Header.jsx";
import SinglePage from "./pages/SinglePage/SinglePage.jsx";
import WritePage from "./pages/WritePage/WritePage.jsx";
import SettingPage from "./pages/SettingPage/SettingPage.jsx";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const currentUser = false;
  return (
    <Router>
      <div className="App">
        <Topbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            {currentUser ? <HomePage /> : <LoginPage />}
          </Route>
          <Route exact path="/register">
            {currentUser ? <HomePage /> : <RegisterPage />}
          </Route>
          <Route exact path="/write">
            {currentUser ? <HomePage /> : <WritePage />}
          </Route>
          <Route exact path="/setting">
            {currentUser ? <HomePage /> : <SettingPage />}
          </Route>
          <Route exact path="/post/:id">
            <SinglePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
