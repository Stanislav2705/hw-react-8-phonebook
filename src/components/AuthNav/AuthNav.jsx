// import { useAuth } from "hooks"
import { Link } from "react-router-dom";


export default function AuthNav() {
  // const { isLoggedIn } = useAuth();

  return (
    <div>
      <Link to='/register'>Rgister</Link>
      <Link to='/login'>Log In</Link>
    </div>
  )
}
