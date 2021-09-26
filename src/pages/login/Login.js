import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { IconButton, Typography } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { AuthContext } from "../../Auth/authContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./login.css";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const auth = useContext(AuthContext);
  let history = useHistory();

  const onSubmit = async (data) => {
    try {
      const responseData = await axios.post(`https://pixl-plant-backend-5l348.ondigitalocean.app/api/users/login`, {
        username: data.username,
        password: data.password,
      });
      auth.login(responseData.data.username);
      history.push("/");

    } catch (error) {
      console.log(error)
    }
    console.log(data);
    auth.login(data.username);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography style={{ marginBottom: "2%",fontFamily:"Lobster, cursive",fontWeight:"400",fontSize:"60px", color:"white" }} component="h1" variant="h5">
        Pixl Plant
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField style={{
                boxShadow:'0 0 10px #ccc',
                backgroundColor: "#A8CEF1",
                margin: "5px"
                }}
          id="outlined-basic"
          label="Username"
          variant="outlined"
          {...register("username")}
          required
        />
        <TextField style={{
                boxShadow:'0 0 10px #ccc',
                backgroundColor: "#A8CEF1",
                margin: "5px"
                }}
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          {...register("password")}
          required
        />
        <IconButton
          style={{
            position: "absolute",
            left: "auto",
            marginLeft: "220px",
            marginTop: "30px",
            marginRight: "auto",
            textAlign: "center",
            backgroundColor: "transparent",
            color:"black"
          }}
          type="submit"
        >
          <PlayCircleIcon style={{ fontSize: "60px" }} />
        </IconButton>
        <span style={{marginTop:"5px",fontWeight:"400", color:"white"}}>
            New to PixlPlant? 
            <Link to="/register" style={{ textDecoration: "none", }}>
              <b> Sign up now.</b>
            </Link>
          </span>
      </form>
    </div>
  );
};

export default Login;
