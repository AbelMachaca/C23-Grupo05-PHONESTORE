import "./Css/Usuarios.css";
import { useState, useEffect } from 'react';
import Footer from "./Footer";
import TopBar from "./TopBar";


const Usuarios = () => {
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [editingUserId, setEditingUserId] = useState(null);

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    email: ''
  });


  useEffect(() => {
    fetch('http://localhost:3030/api/users')
      .then(response => response.json())
      .then(data => setUsers(data.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const details = {};
      await Promise.all(
        users.map(async user => {
          try {
            const response = await fetch(`http://localhost:3030/api/users/${user.id}`);
            const userData = await response.json();
            details[user.id] = {
              imagen_usuario: userData.data.imagen_usuario,
              telefono: userData.data.telefono,
              apellido: userData.data.apellido,
              rol: userData.data.rol,
              direccion: userData.data.direccion
            };
          } catch (error) {
            console.error(`Error fetching details for user ${user.id}:`, error);
            details[user.id] = {
              imagen_usuario: null,
              telefono: null,
              apellido: null,
              direccion: null 
            };
          }
        })
      );
      setUserDetails(details);
    };

    if (users.length > 0) {
      fetchUserDetails();
    }
  }, [users]);

  const renderPhoneNumber = (userId) => {
    const phone = userDetails[userId]?.telefono;
    return (
      <span className={phone ? '' : 'no-registrado'}>
        {phone ? phone : "No registrado"}
      </span>
    );
  };
  

  const renderAddress = (userId) => {
    const address = userDetails[userId]?.direccion;
    return ( 
    <span className={address ? '' : 'no-registrado'}> 
      {address ? address : "No registrado"}
      </span>
      );
  };

  const renderRole = (roleId) => {
    return roleId === 1 ? "User" : roleId === 2 ? "Admin" : "Desconocido";
  };


  const handleEditClick = (userId) => {
    setEditingUserId(userId);
    const selectedUser = users.find(user => user.id === userId);
    setFormData({
      nombre: selectedUser.nombre,
      apellido: userDetails[userId]?.apellido || '',
      direccion: userDetails[userId]?.direccion || '',
      telefono: userDetails[userId]?.telefono || '',
      email: selectedUser.email || ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    // Reemplaza los valores de los campos vacíos con nulos
    const formDataToSend = { ...formData };
    if (formDataToSend.telefono === '') {
      formDataToSend.telefono = null;
    }
    if (formDataToSend.direccion === '') {
      formDataToSend.direccion = null;
    }
  
    try {
      const response = await fetch(`http://localhost:3030/api/users/${editingUserId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataToSend)
      });
      if (response.ok) {
        console.log('Usuario actualizado exitosamente.');
        const updatedUsers = users.map(user => {
          if (user.id === editingUserId) {
            return { ...user, ...formDataToSend };
          }
          return user;
        });
        setUsers(updatedUsers);
        setEditingUserId(null);
      } else {
        throw new Error('La solicitud PUT falló.');
      }
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
    }
  };
  
  return (

    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
        <TopBar/>
    <div className="user-panel">
      <h2 className="panel-title h2-list">Lista de Usuarios</h2>
      <div className="contenedor-secundario">
      <table className="user-table">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre y apellido</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>
                {userDetails[user.id] && (
                  <img src={userDetails[user.id].imagen_usuario} alt={`Imagen de ${user.nombre}`} className="user-image" />
                )}
              </td>
              <td>{user.nombre} {userDetails[user.id] && userDetails[user.id].apellido}</td>
              <td>{user.email}</td>
              <td>{renderPhoneNumber(user.id)}</td>
              <td>{renderAddress(user.id)}</td>
              <td>{renderRole(user.rol)}</td>
              <td>
                <button className="btn-edit" onClick={() => handleEditClick(user.id)}>Editar</button> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
     
      {editingUserId && (
        <div className="edit-form">
        <h3>Editar Usuario</h3>
        <form className="form-edit" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Nombre:</label>
            <input type="text" name="nombre" style={{ color: 'white' }} value={formData.nombre} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Apellido:</label>
            <input type="text" name="apellido" style={{ color: 'white' }} value={formData.apellido} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" style={{ color: 'white' }} value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Teléfono:</label>
            <input type="text" name="telefono"  style={{ color: 'white' }} value={formData.telefono} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Dirección:</label>
            <input type="text" name="direccion"  style={{ color: 'white' }} value={formData.direccion} onChange={handleInputChange} />
          </div>
          
          
          <button className="btn-edit" type="submit">Guardar</button>
        </form>
      </div>
      
      )}
      </div>
    </div>

    </div>
        <Footer/>
    </div>
  );
}
export default Usuarios;
