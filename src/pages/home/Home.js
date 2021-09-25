import React, { useContext } from "react";
import { AuthContext } from "../../Auth/authContext";
import Navbar from "../../components/Navbar";
import { Button } from "@mui/material";
import "./Home.css";

const Home = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <Navbar />
      <b>Welcome to homepage, {auth.user} </b>
      <Button style={{
            position: "absolute",
            left: "auto",
            marginLeft: "auto",
            marginTop: "50px",
            marginRight: "220px",
            textAlign: "center",
            backgroundColor: "transparent",
            color:"black"
          }}
          variant="outlined" size="large">
        Add Plant
      </Button>

      <Button style={{
            position: "absolute",
            right: "auto",
            marginLeft: "220px",
            marginTop: "50px",
            marginRight: "auto",
            textAlign: "center",
            backgroundColor: "transparent",
            color:"black"
          }}
          variant="outlined" size="large">
        Remove Plant
      </Button>
      
      <Button style={{
            position: "absolute",
            marginLeft: "600px",
            marginTop: "400px",
            textAlign: "center",
            backgroundColor: "transparent",
            color:"black"
          }}
          variant="outlined" size="large">
        Plant 1
      </Button>

      <Button style={{
            position: "absolute",
            marginLeft: "800px",
            marginTop: "400px",
            textAlign: "center",
            backgroundColor: "transparent",
            color:"black"
          }}
          variant="outlined" size="large">
        Plant 2
      </Button>
      
    </div>
  );
};

export default Home;
