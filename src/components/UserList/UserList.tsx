import { UserInformation } from "../../types/types";
import UserCard from "../UserCard/UserCard";
import { UserListStyled } from "./UserListStyled";

interface UserListProps {
  userList: UserInformation[];
}

const UserList = ({ userList }: UserListProps): JSX.Element => {
  return (
    <UserListStyled>
      {userList.map((user) => (
        <li key={user.id}>
          <UserCard userInformation={user} />
        </li>
      ))}
    </UserListStyled>
  );
};
export default UserList;
