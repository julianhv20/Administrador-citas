import React, { useState, useEffect } from "react";
import "./styles.css";
import { Formulario } from "./components/Formulario";
import { Cite } from "./components/Cite";

const App = () => {
  let initialCites = JSON.parse(localStorage.getItem("cites"));

  if (!initialCites) {
    initialCites = [];
  }

  const [cites, updateCites] = useState(initialCites);

  useEffect(() => {
    if (initialCites) {
      localStorage.setItem("cites", JSON.stringify(cites));
    } else {
      localStorage.setItem("cites", JSON.stringify([]));
    }
  }, [cites]);

  const createCite = (cite) => {
    updateCites([...cites, cite]);
  };

  const deleteCite = (id) => {
    //console.log(id);
    const newCites = cites.filter((cite) => cite.id !== id);
    updateCites(newCites);
  };

  const title = cites.length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario createCite={createCite} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {cites.map((cite) => (
              <Cite key={cite.id} cite={cite} deleteCite={deleteCite} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
