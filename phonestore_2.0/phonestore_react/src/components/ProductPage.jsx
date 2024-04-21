// ProductPage.jsx
import  { useState, useEffect } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Hacer la solicitud a la API cuando el componente se monte
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    // Hacer la solicitud a la API de productos
    fetch("http://localhost:3030/api/products")
      .then(response => {
        if (!response.ok) {
          throw new Error('La solicitud de la API falló');
        }
        return response.json();
      })
      .then(data => {
        // Almacenar los productos en el estado
        setProducts(data.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
      });
  };

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
