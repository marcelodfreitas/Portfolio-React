import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

const NavBar = () => {
  const StyledToolbar = styled("Toolbar")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    height: "50px",
    
  }));
  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <MenuItem>About Me</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>My Projects</MenuItem>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
