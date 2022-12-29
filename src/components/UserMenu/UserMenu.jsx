import { useDispatch } from "react-redux"

import { useAuth } from "hooks";
import Box from "shared/Box/Box";
import { logOut } from "redux/auth/operation";
import { Button } from "shared/Button/Button.styles";
import { UserName } from "./UserMenu.styles";


export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut())

  return (
    <Box display='flex' alignItems='center' gridGap={4}>
      <UserName>Welcome, {user.name}</UserName>
      <Button type="button" onClick={handleLogOut}>Logout</Button>
    </Box>
  )
}
