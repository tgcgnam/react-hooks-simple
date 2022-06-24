import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./app.css";
import Counter from "./hooks/Counter";
import UserList from "./hooks/UserList";
import Timer from "./hooks/Timer";
import SearchUserList from "./hooks/SearchUserList";
import Welcome from "./hooks/Welcome";
import ThemeSwitch from "./hooks/ThemeSwitch";
import UseCounter from "./hooks/UseCounter";

const routes = [
  ["1 Counter", Counter],
  ["2 UserList", UserList],
  ["3 Timer", Timer],
  ["4 SearchUserList", SearchUserList],
  ["5 ThemeSwitch", ThemeSwitch],
  ["6 UseCounter", UseCounter],
];

const Empty = () => "";

function App() {
  return (
    <Router>
      <div className="app">
        <Empty />
        <ul className="sider">
          {routes.map(([label, index]) => (
            <li key={index}>
              <Link to={`/${label.replace(" ", "/")}`}>{label}</Link>
            </li>
          ))}
        </ul>
        <div id="pageContainer" className="page-container">
          <Routes>
            {routes.map(([label, Component, additionalRoute = ""]) => (
              <Route
                key={label}
                path={`/${label.replace(" ", "/")}${additionalRoute}`}
                element={<Component />}
              />
            ))}
            <Route path="/" element={<Welcome />} />
            <Route path="*">Page not found.</Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
