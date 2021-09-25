import React, { useContext } from "react";
import { AuthContext } from "../../Auth/authContext";
import Navbar from "../../components/Navbar";

const Home = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <Navbar />
      Welcome to homepage, {auth.user}

    </div>
  );
};

export default Home;
