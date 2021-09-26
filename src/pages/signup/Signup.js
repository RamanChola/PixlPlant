import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { AuthContext } from "../../Auth/authContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./signup.css";
import axios from "axios";
const schema = yup.object().shape({
  userName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: yup.string().email("Invalid email address").required("Required"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must have a special character"
    )
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});

const SignUp = () => {
  const [error, setError] = React.useState(false);
  let history = useHistory();
  const auth = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const authSubmitHandler = async (event) => {
    try {
      const responseData = await axios.post(
        `https://pixl-plant-backend-5l348.ondigitalocean.app/api/users/signup`,
        {
          email: event.email,
          password: event.password,
          username: event.userName,
          lastname: event.lastName,
        }
      );
      auth.login(responseData.data.user.username);
      history.push("/");
    } catch (error) {
      error.response.status === 422 && setError(true);
    }
  };
  return (
    <Container maxWidth="sm" className="sign">
      <CssBaseline />
      <div
        style={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {error && <p style={{ color: "red" }}>User Already Exists!</p>}
        <Typography
          style={{
            color: "white",
            marginBottom: "4%",
            fontFamily: "VT323, monospace",
            fontWeight: "400",
            fontSize: "60px",
          }}
          component="h1"
          variant="h5"
        >
          Pixl Plant
        </Typography>
        <form noValidate onSubmit={handleSubmit(authSubmitHandler)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                style={{
                  boxShadow: "0 0 10px #ccc",
                  backgroundColor: "#A8CEF1",
                }}
                autoComplete="fname"
                name="userName"
                {...register("userName")}
                variant="filled"
                required
                fullWidth
                id="userName"
                label="First Name (username)"
                autoFocus
                error={Boolean(errors.userName)}
                helperText={errors.userName?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                style={{
                  boxShadow: "0 0 10px #ccc",
                  backgroundColor: "#A8CEF1",
                }}
                variant="filled"
                {...register("lastName")}
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                error={Boolean(errors.lastName)}
                helperText={errors.lastName?.message}
              />
            </Grid>
          </Grid>

          <TextField
            style={{
              boxShadow: "0 0 10px #ccc",
              backgroundColor: "#A8CEF1",
            }}
            variant="filled"
            margin="normal"
            {...register("email")}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
          <TextField
            style={{
              boxShadow: "0 0 10px #ccc",
              backgroundColor: "#A8CEF1",
            }}
            variant="filled"
            margin="normal"
            {...register("password")}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />
          <TextField
            style={{
              boxShadow: "0 0 10px #ccc",
              backgroundColor: "#A8CEF1",
            }}
            variant="filled"
            margin="normal"
            {...register("confirmPassword")}
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
            error={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword?.message}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{
              backgroundColor: "black",
              fontFamily: "VT323, monospace",
              fontSize: "20px",
            }}
          >
            Sign Up
          </Button>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Grid
              item
              style={{ marginTop: "10px", fontWeight: "400", color: "white" }}
            >
              <span>
                Already have an account?
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "lightblue" }}
                >
                  <b> Sign In Now</b>
                </Link>
              </span>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
export default SignUp;
