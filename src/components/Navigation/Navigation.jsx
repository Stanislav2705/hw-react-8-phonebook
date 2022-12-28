import { useAuth } from "hooks/useAuth";
import { Link } from "./Navigation.styles";


export default function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to='/'>Home</Link>
      {isLoggedIn && <Link to='/contacts'>Contacts</Link>}
    </nav>
  )
}

