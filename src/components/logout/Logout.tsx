import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import React from "react";

const Logout = () => {
  const { logout } = useAuth0();
  return (
    <Button color="inherit" onClick={() => logout()}>
      Logout
    </Button>
  );
};

export default Logout;
