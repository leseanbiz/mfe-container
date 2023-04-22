import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const App = () => {
  const { user, isAuthenticated, logout, error } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <>
          <Link to="/app-1">to app-1</Link>
          <Link to="/app-2">to app-2</Link>
        </>
      ) : (
        <p>isAuthenticated === false</p>
      )}

      {/* Latest Build Date: <strong>{version}</strong> */}
    </>
  );
};

export default App;
