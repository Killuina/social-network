import { useEffect, useState } from "react";
import GlobalStyles from "./GlobalStyes";
import UserList from "./components/UserList/UserList";
import Header from "./components/Header/Header";

const App = () => {
  const [userList, setUserList] = useState([]);

  const getUserListFromApi = async (): Promise<void> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");

    const apiUserList = await response.json();

    setUserList(apiUserList);
  };

  useEffect(() => {
    getUserListFromApi();
  }, []);

  return (
    <div className="app">
      <Header />
      <GlobalStyles />
      <UserList userList={userList} />
    </div>
  );
};

export default App;
