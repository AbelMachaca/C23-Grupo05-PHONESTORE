'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('usuarios', [{
        id_historial_compras: 3,
        nombre: 'Al',
        apellido: "Doe",
        direccion: "asdasdasd",
        telefono: 123456,
        email: "asd@gasd.com",
        password:"12345",
        imagen_usuario:"photo",
        id_entidad_usuario: 1
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('usuarios', null, {});
     
  }
};
