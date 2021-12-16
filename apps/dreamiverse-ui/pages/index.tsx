import { useMoralis } from "react-moralis";

function Index() {
  const { logout } = useMoralis();

  return (
    <div>
      Welcome to the app
      <button onClick={() => logout()}>Log out</button>
    </div>
  );
}

export default Index;