import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NatureIcon from "@mui/icons-material/Nature";
import { AuthContext } from "../Auth/authContext";
import { useHistory } from "react-router";

export default function Navbar() {
  let history = useHistory();
  const auth = React.useContext(AuthContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"black"}}>
        <Toolbar>
          <NatureIcon style={{marginRight:"10px"}}/>
          <Typography onClick={()=>history.push("/")} style={{ fontFamily: "VT323, monospace",fontSize:"30px",cursor: "pointer" }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PixlPlant
          </Typography>
          <Button
            onClick={() => auth.logout()}
            variant="contained"
            style={{backgroundColor:"#FF007F", fontFamily: "VT323, monospace",fontSize:"18px"}}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
