import "./App.css";

//REACT-ROUTER-DOM
import { Switch, Route } from "react-router-dom";

//COMPONENTS
import UserList from "./components/userList/UserList";
import UserDetail from "./components/userDetails/UserDetail.jsx";
import AddUser from "./components/addUser/AddUser.jsx";
import Update from "./components/update/Update.jsx";
import RemoveUser from "./components/removeUser/RemoveUser.jsx";
import Layout from "./components/generalComponents/Layout";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Layout isButtonBackVisible={false}>
            <UserList></UserList>
          </Layout>
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
