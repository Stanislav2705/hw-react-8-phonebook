import { useDispatch } from "react-redux"

import { useAuth } from "hooks";
import Box from "shared/Box/Box";
import { logOut } from "redux/auth/operation";


export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut())

  return (
    <Box display='flex' alignItems='center' gridGap={4}>
      <h1>Welcome, {user.name}</h1>
      <button type="button" onClick={handleLogOut}>Logout</button>
    </Box>
  )
}
