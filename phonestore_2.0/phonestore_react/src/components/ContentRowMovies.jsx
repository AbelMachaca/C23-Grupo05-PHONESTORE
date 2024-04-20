import React, { useState, useEffect } from "react";

const ContentRowMovies = () => {
  const [productos, setProductos] = useState(0);
  const [usuarios, setUsuarios] = useState(79); // Valor fijo asignado
  const [marcas, setMarcas] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3030/api/products")
      .then(response => {
        if (!response.ok) {
          throw new Error('La solicitud de la API falló');
        }
        return response.json();
      })
      .then(data => {
        console.log("Este son los productos", data)
        // Obtener el valor de count de los datos de productos
        const countProductos = data.count;
        // Calcular la suma de los valores de las propiedades de countMarca
        ;
        const sumCountMarca =  Object.keys(data.countMarca).length;
        
        // Actualizar los estados
        setProductos(countProductos);
        setMarcas(sumCountMarca);
      })
      .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
      });
  }, []);

  return (
    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Productos en base de datos
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{productos}</div>
              </div>
              <div className="col-auto">
                <i className="fas fa-film fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                  Usuarios en base de datos
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{usuarios}</div>
              </div>
              <div className="col-auto">
                <i className="fas fa-award fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                  Marcas
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{marcas}</div>
              </div>
              <div className="col-auto">
                <i className="fas fa-user fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentRowMovies;
