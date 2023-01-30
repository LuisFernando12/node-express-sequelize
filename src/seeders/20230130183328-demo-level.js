module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Levels', [
			{
				level_description: 'básico',
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				level_description: 'intermediário',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				level_description: 'avançado',
				createdAt: new Date(),
				updatedAt: new Date()
			} 
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Levels', null, {})
  }
}
