'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'images',
       [
         {
           title: 'greatest',
           url: 'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png',
           createdAt: new Date(),
           updatedAt: new Date(),

         },
       ] , {})     
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('images', null, {});
    
  }
};
