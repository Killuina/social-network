import GlobalStyles from "./GlobalStyes";
import UserCard from "./components/UserCard/UserCard";
import { userInformation } from "./mocks/UserInformation";

function App() {
  return (
    <div className="app">
      <GlobalStyles />
      <UserCard userInformation={userInformation} />
    </div>
  );
}

export default App;
