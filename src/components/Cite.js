import React from "react";
import "../styles.css";

export const Cite = ({ cite, deleteCite }) => {
  const { mascota, propietario, fecha, hora, sintomas, id } = cite;

  const handleClick = () => {
    deleteCite(id);
  };

  return (
    <div className="cita">
      <p>
        Mascota: <span>{mascota}</span>
      </p>
      <p>
        Dueño: <span>{propietario}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Hora: <span>{hora}</span>
      </p>
      <p>
        Sintomas: <span>{sintomas}</span>
      </p>

      <button className="button eliminar u-full-width" onClick={handleClick}>
        Eliminar &times;
      </button>
    </div>
  );
};
