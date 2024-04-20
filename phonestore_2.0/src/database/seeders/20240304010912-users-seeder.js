'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('usuarios', [{
        id_historial_compras: 1,
        nombre: 'pedro',
        apellido: "sanchez",
        direccion: "asdasdasd",
        telefono: 123456,
        email: "pedro@gmail.com",
        password:"12345",
        imagen_usuario:"photo",
        id_entidad_usuario: 1
      },
      {id_historial_compras: 2,
        nombre: 'william',
        apellido: "sacaca",
        direccion: "asdasdasd",
        telefono: 123456555,
        email: "william@gmail.com",
        password:"$2a$10$txP/RKIWZbgOG9y0l5UIDOvu96Ouvtqg.YK6zwzgsGWG6FKXEJKoq",
        imagen_usuario:"photo",
        id_entidad_usuario: 2
      },
      {
        id_historial_compras: 3,
        nombre: 'Aliw',
        apellido: "Doepppt",
        direccion: "asdasdasdhh",
        telefono: 12345655,
        email: "asd@gasd.com",
        password:"12345",
        imagen_usuario:"photo",
        id_entidad_usuario: 3
      },
      {
        id_historial_compras: 4,
        nombre: 'Alaa',
        apellido: "Doe",
        direccion: "asdasdasd",
        telefono: 123456,
        email: "asd@gasd.com",
        password:"12345",
        imagen_usuario:"photo",
        id_entidad_usuario: 4
      }
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('usuarios', null, {});
     
  }
};
