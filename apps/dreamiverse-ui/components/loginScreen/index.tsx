import { useMoralis } from "react-moralis";

export function Login(props) {
  const { isAuthenticated, authenticate } = useMoralis();

  return (
    <div>
      Login
      <button onClick={() => authenticate()}>Login</button>
    </div>
  );
}

export default Login;