import React from "react";
import TrafficLight from "./TrafficLight.jsx";

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-4">Simulador de Semáforo</h1>
      <TrafficLight />
    </div>
  );
};

export default Home;

