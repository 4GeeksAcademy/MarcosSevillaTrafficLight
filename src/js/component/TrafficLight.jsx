import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const colors = [
    { name: "red", class: "bg-danger" },
    { name: "yellow", class: "bg-warning" },
    { name: "green", class: "bg-success" },
  ];

  const toggleColor = () =>
    setColor(
      colors[(colors.findIndex((c) => c.name === color) + 1) % colors.length].name
    );

  return (
    <div className="d-flex flex-column align-items-center mt-4">
      {/* Palo del semáforo */}
      <div
        className="bg-dark"
        style={{
          width: "10px",
          height: "100px",
        }}
      ></div>

      {/* Cuerpo del semáforo */}
      <div
        className="bg-black d-flex flex-column align-items-center rounded"
        style={{
          width: "80px",
          height: "240px",
          padding: "10px",
          justifyContent: "space-around",
        }}
      >
        {colors.map((currentColor) => (
          <div
            key={currentColor.name}
            onClick={() => setColor(currentColor.name)}
            className={`rounded-circle ${currentColor.class}`}
            style={{
              width: "60px",
              height: "60px",
              border: "2px solid black",
              opacity: color === currentColor.name ? 1 : 0.3, // Resaltar solo la luz activa
              cursor: "pointer",
            }}
          ></div>
        ))}
      </div>

      {/* Botón Cambiar Color */}
      <button className="btn btn-primary mt-3" onClick={toggleColor}>
        Cambiar Color
      </button>
    </div>
  );
};

export default TrafficLight;






