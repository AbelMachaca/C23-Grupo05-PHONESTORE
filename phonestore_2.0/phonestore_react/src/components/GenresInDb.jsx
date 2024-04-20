import React, { useState, useEffect } from "react";
import BoxGenre from "./BoxGenre";

const GenresInDb = () => {
  const [marcasUnicas, setMarcasUnicas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/products")
      .then(response => {
        if (!response.ok) {
          throw new Error('La solicitud de la API falló');
        }
        return response.json();
      })
      .then(data => {
        // Extraer marcas únicas de los datos de la API
        const marcas = new Set();
        data.data.forEach(producto => {
          marcas.add(producto.marca);
        });
        // Convertir el conjunto de marcas únicas de nuevo en un array
        setMarcasUnicas(Array.from(marcas));
      })
      .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
      });
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Marcas
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {/* Utilizar map() en el estado 'marcasUnicas' */}
            {marcasUnicas.map((marca, i) => <BoxGenre key={i} name={marca} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenresInDb;
