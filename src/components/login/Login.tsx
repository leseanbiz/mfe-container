import { useAuth0 } from "@auth0/auth0-react";
import { Button, Input } from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";

type LoginProps = {
  setLoginStatus?: Dispatch<SetStateAction<boolean>>;
};

const Login = ({ setLoginStatus }: LoginProps) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      {/* <Input name="username" value={userName} onChange={() => setUserName} />
      <Input name="password" value={password} onChange={() => setPassword} /> */}
      <Button color="inherit" onClick={() => loginWithRedirect()}>
        Login
      </Button>
    </>
  );
};

export default Login;
