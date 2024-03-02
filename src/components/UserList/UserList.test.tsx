import { render, screen } from "@testing-library/react";
import { userInformationListMock } from "../../mocks/users";
import UserList from "./UserList";

describe("Given the UserList component", () => {
  describe("When rendered receiving a list of 2 users with username 'Bret' and 'Antonette'", () => {
    test("Then it should show a list of two user cards, one with name 'Bret'", () => {
      const expectedUserName = userInformationListMock[0].username;

      render(<UserList userList={userInformationListMock} />);
      const userName = screen.getByRole("heading", { name: expectedUserName });

      expect(userName);
    });
  });
});
