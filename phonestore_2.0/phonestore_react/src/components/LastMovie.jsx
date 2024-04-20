import React, { useState, useEffect } from "react";

const LastMovie = () => {
  const [lastProduct, setLastProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3030/api/products")
      .then(response => {
        if (!response.ok) {
          throw new Error('La solicitud de la API falló');
        }
        return response.json();
      })
      .then(data => {
        console.log("Estos son los productos", data);
        const lastProductAdded = data.data[data.data.length - 1];
        setLastProduct(lastProductAdded);
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
            Último producto agregado
          </h5>
        </div>
        <div className="card-body">
          {lastProduct && (
            <>
              <div className="text-center">
               

              <img src={lastProduct && lastProduct.imagenes.length > 0 ? `http://localhost:3030/images/imageHome/${lastProduct.imagenes[0].url}` : ""} alt={lastProduct && lastProduct.modelo} />

              </div> 
              <p>{lastProduct.descripcion}</p>
              <p>Precio: {lastProduct.precio}</p>
              <p>Almacenamiento: {lastProduct.almacenamiento} GB</p>
              <p>RAM: {lastProduct.ram} GB</p>
              <p>Modelo: {lastProduct.modelo}</p>
              
              <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:3030/products/productDetail/${lastProduct.id}`}>
  Ver más
</a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LastMovie;
