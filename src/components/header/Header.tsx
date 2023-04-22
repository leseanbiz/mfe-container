import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Login from "../login/Login";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../logout/Logout";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Container Header
          </Typography>
          {isAuthenticated ? <Logout /> : <Login />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
