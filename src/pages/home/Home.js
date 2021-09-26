import React, { useContext } from "react";
import { AuthContext } from "../../Auth/authContext";
import Navbar from "../../components/Navbar";
import { Button } from "@mui/material";
import "./Home.css";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";

const Home = () => {
  const auth = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  let history = useHistory();

  const onSubmit = async (data) => {
    console.log(data);
    auth.login(data.plantname);
  };

  return (
    <div>
      <Navbar />
      <b>Welcome to homepage, {auth.user} </b>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column" }}
      >
      <Button style={{
            position: "absolute",
            marginLeft: "600px",
            marginTop: "100px",
            textAlign: "center",
            backgroundColor: "pink",
            borderColor: "black",
            color:"black"
          }}
          variant="outlined" size="large" type="submit">
        <b>Add Plant</b>
      </Button>
      
      <TextField style={{
        position: "absolute",
        marginLeft: "560px",
        marginTop: "175px",
        backgroundColor: "pink"
        }}
        name="plantName"
        {...register("plantName")}
        variant="outlined"
        required
        id="plantName"
        label="Which plant to add?"
        size="normal"
        autoFocus
      />

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
      </form>
    </div>
  );
};

export default Home;
