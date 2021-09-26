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
            marginLeft: "600px",
            marginTop: "100px",
            textAlign: "center",
            backgroundColor: "pink",
            borderColor: "black",
            color:"black"
          }}
          variant="outlined" size="large">
        <b>Add Plant</b>
      </Button>

      <Button style={{
            position: "absolute",
            marginLeft: "775px",
            marginTop: "100px",
            textAlign: "center",
            backgroundColor: "pink",
            borderColor: "black",
            color:"black"
          }}
          variant="outlined" size="large">
        <b>Remove Plant</b>
      </Button>
      
      <Button style={{
            position: "absolute",
            marginLeft: "600px",
            marginTop: "350px",
            textAlign: "center",
            backgroundColor: "transparent",
            color:"black"
          }}
          variant="outlined" size="large">
        Plant 1
      </Button>

      <Button style={{
            position: "absolute",
            marginLeft: "725px",
            marginTop: "350px",
            textAlign: "center",
            backgroundColor: "transparent",
            color:"black"
          }}
          variant="outlined" size="large">
        Plant 2
      </Button>

      <Button style={{
            position: "absolute",
            marginLeft: "850px",
            marginTop: "350px",
            textAlign: "center",
            backgroundColor: "transparent",
            color:"black"
          }}
          variant="outlined" size="large">
        Plant 3
      </Button>

      <Button style={{
            position: "absolute",
            marginLeft: "975px",
            marginTop: "350px",
            textAlign: "center",
            backgroundColor: "transparent",
            color:"black"
          }}
          variant="outlined" size="large">
        Plant 4
      </Button>
      
    </div>
  );
};

export default Home;
