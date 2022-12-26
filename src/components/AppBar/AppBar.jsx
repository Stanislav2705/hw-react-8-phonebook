import { useAuth } from "hooks";
import { Header } from "./AppBar.styles";

import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import AuthNav from "components/AuthNav/AuthNav";



export default function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu/> : <AuthNav/>}
    </Header>
  )
}
