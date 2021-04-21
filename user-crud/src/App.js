import "./App.css";

//REACT-ROUTER-DOM
import { Switch, Route } from "react-router-dom";

//COMPONENTS
import UserList from "./Component/UserList/UserList";
import UserDetail from "./Component/userDetails/UserDetail.jsx";
import AddUser from "./Component/addUser/AddUser.jsx";
import Update from "./Component/update/Update.jsx";
import RemoveUser from "./Component/removeUser/RemoveUser.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <UserList></UserList>
        </Route>
        <Route exact path="/User/add">
          <AddUser></AddUser>
        </Route>
        <Route exact path="/user/update/:id">
          <Update></Update>
        </Route>
        <Route exact path="/user/detail/:id">
          <UserDetail />
        </Route>
        <Route exact path="/user/remove/:id">
          <RemoveUser />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
