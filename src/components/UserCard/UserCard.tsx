import { UserInformation } from "../../types/types";
import { UserCardStyled } from "./UserCardStyled";

interface UserCardProps {
  userInformation: UserInformation;
}

const UserCard = ({
  userInformation: { name, username, email },
}: UserCardProps): JSX.Element => {
  return (
    <UserCardStyled>
      <h2>{name}</h2>
      <h3>{username}</h3>
      <span>{email}</span>
    </UserCardStyled>
  );
};

export default UserCard;
