'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
   
     
      await queryInterface.bulkInsert('entidad_de_usuarios', [{
        id: 1,
        name:USER
      },
      {id: 2,
        name:ADMIN
      },
      {
        id: 3,
        name:USER
      },
      {
        id: 4,
        name:USER
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     
      await queryInterface.bulkDelete('entidad_de_usuarios', null, {});
     
  }
};
