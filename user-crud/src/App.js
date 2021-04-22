import "./App.css";

//REACT-ROUTER-DOM
import { Switch, Route } from "react-router-dom";

//COMPONENTS
import UserList from "./components/userList/UserList";
import UserDetail from "./components/userDetails/UserDetail.jsx";
import AddUser from "./components/addUser/AddUser.jsx";
import Update from "./components/update/Update.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <UserList />
        </Route>
        <Route exact path="/user/add">
          <AddUser />
        </Route>
        <Route exact path="/user/update/:id">
          <Update />
        </Route>
        <Route exact path="/user/detail/:id">
          <UserDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
