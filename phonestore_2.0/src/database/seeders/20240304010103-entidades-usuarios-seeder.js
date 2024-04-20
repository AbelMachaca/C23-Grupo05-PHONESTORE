'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
   
     
      await queryInterface.bulkInsert('entidad_de_usuarios', [{
        id: 1,
        rol:'USER'
      },
      {id: 2,
        rol:'ADMIN'
      },
      {
        id: 3,
        rol:'USER'
      },
      {
        id: 4,
        rol:'USER'
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     
      await queryInterface.bulkDelete('entidad_de_usuarios', null, {});
     
  }
};
