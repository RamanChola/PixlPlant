import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/authContext";
import Navbar from "../../components/Navbar";
import { Button, Typography } from "@mui/material";
import "./Home.css";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { string } from "yup";

const Home = () => {
  const [plants, setPlants] = useState([]);
  const [apiPlants, setApiPlants] = useState([]);
  const auth = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  let history = useHistory();
  useEffect(() => {
    let unmounted = false;
    const getUserPlants = async () => {
      try {
        const responseData = await axios.get(
          `https://pixl-plant-backend-5l348.ondigitalocean.app/api/users/getuserplants/${auth.user}`
        );
        if (!unmounted) {
          setPlants(responseData.data.plants);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserPlants();
    return () => {
      unmounted = true;
    };
  }, [auth.user]);

  let a = [];
  useEffect(() => {
    let unmounted = false;
    plants.map(async (plant) => {
      try {
        const responseData = await axios.get(
          `https://pixl-plant-api-v7o4m.ondigitalocean.app/api/${plant}`
        );
        if (!unmounted) {
          if (responseData.data) {
            a.push(responseData.data);
            setApiPlants(a);
          }
        }
      } catch (error) {
        console.log(error);
      }
    });
    return () => {
      unmounted = true;
    };
  }, [plants]);
  console.log(apiPlants);
  const onSubmit = async (data) => {
    const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);
    let plantname = capitalize(data.plantName);

    try {
      await axios.post(
        `https://pixl-plant-backend-5l348.ondigitalocean.app/api/users/addplant`,
        {
          username: auth.user,
          plantname,
        }
      );
      history.go(0);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div class="home" style={{ height: "100vh" }}>
      <Navbar />
      <Typography
        style={{
          marginBottom: "2%",
          fontWeight: "400",
          fontFamily: "VT323, monospace",
          fontSize: "50px",
          margin: "20px 20px 0 20px",
        }}
      >
        Welcome to homepage, {auth.user}
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", margin: "50px" }}
      >
        <TextField
          style={{
            backgroundColor: "#ffffff",
          }}
          name="plantName"
          {...register("plantName")}
          variant="filled"
          required
          id="plantName"
          label="Which plant to add?"
          size="30px"
          autoFocus
        />
        <Button
          style={{
            marginLeft: "10px",
            textAlign: "center",
            backgroundColor: "#FF007F",
            borderColor: "black",
            color: "black",
          }}
          variant="outlined"
          size="large"
          type="submit"
        >
          <b style={{ fontFamily: "VT323, monospace", fontSize: "20px" }}>
            Add Plant
          </b>
        </Button>
      </form>
      <div>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "-74px" }}
        >
          {apiPlants.map(
            (plant, index) =>
              plant != null && (
                <Link
                  style={{ textDecoration: "none" }}
                  to={{ pathname: "/fullplantpage", plant: plant }}
                >
                  <img
                    key={index}
                    style={{
                      height: "140px",
                      width: "100px",
                      cursor: "pointer",
                    }}
                    src={plant.pixelImage}
                    alt=""
                  />
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
