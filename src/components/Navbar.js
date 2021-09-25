import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NatureIcon from "@mui/icons-material/Nature";
import { AuthContext } from "../Auth/authContext";

export default function Navbar() {
  const auth = React.useContext(AuthContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"darkgreen"}}>
        <Toolbar>
          <NatureIcon style={{marginRight:"10px"}}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PixlPlant
          </Typography>
          <Button
            onClick={() => auth.logout()}
            variant="contained"
            style={{backgroundColor:"green"}}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
