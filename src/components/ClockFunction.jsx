import React, { useState, useEffect } from "react";

const ClockFunction = () => {
  const [edad, setEdad] = useState(0);
  const [horaActual, setHoraActual] = useState(new Date());
  const [nombre, setNombre] = useState("Julian");
  const [apellido, setApellido] = useState("Velasquez");

  useEffect(() => {
    let timer = setInterval(() => {
      setHoraActual(new Date());
      setEdad(edad + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <h2>
        Hora Actual:
        {horaActual.toLocaleTimeString()}
      </h2>
      <h3>
        {nombre} {apellido}
      </h3>
      <h1>Edad: {edad}</h1>
    </div>
  );
};

export default ClockFunction;
