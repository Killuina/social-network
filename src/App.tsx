import GlobalStyles from "./GlobalStyes";
import UserList from "./components/UserList/UserList";
import { userInformationList } from "./mocks/users";

const App = () => {
  return (
    <div className="app">
      <GlobalStyles />
      <UserList userList={userInformationList} />
    </div>
  );
};

export default App;
