import React from "react";
import { useLocation } from "react-router";
import Navbar from "../../components/Navbar";
import "./plantpagefull.css";

const PlantPageFull = () => {
  const location = useLocation();
  const plant = location.plant;
  return (
    <>
      {console.log(plant)}
      <Navbar />
      <div className="fullpage" style={{ display: "flex",height: "91vh"}}>
        <img
          src={plant.fullImage}
          alt=""
          style={{ height: "500px", width: "400px", marginTop: "50px" }}
        />
        <div style={{ marginTop: "80px",marginLeft:"200px",backgroundColor:"rgba(2,4,8,0.5)",borderRadius: "20px",height: "60vh"}}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3>Name:</h3>
            <h4>{plant.name}</h4>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3>life Cycle:</h3>
            <h4>{plant.lifeCycle}</h4>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3>Sun Requirements:</h3>
            <h4>{plant.sunRequirements}</h4>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3>Water Preferences:</h3>
            <h4>{plant.waterPreferences}</h4>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3>Soil pH Preference:</h3>
            <h4>{plant.soilpHpreference}</h4>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3>Plant Height:</h3>
            <h4>{plant.plantHeight}</h4>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3>Plant Spread:</h3>
            <h4>{plant.plantSpread}</h4>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3>Fruit:</h3>
            <h4>{plant.fruit}</h4>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3>Flowers:</h3>
            <h4>{plant.flowers}</h4>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3>Uses:</h3>
            <h4>{plant.uses}</h4>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3>Edible Parts:</h3>
            <h4>{plant.edibleParts}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantPageFull;
