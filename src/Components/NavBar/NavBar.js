import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            align="center"
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Rent A Wheel
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
