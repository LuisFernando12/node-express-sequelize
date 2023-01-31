module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Enrollments', [
			{
				status: "confirmado",
				student_id: 1,
				class_id: 5,
				createdAt: new Date(),
				updatedAt: new Date()
		},
		{
			status: "confirmado",
			student_id: 2,
			class_id: 5,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmado",
			student_id: 3,
			class_id: 6,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmado",
			student_id: 4,
			class_id: 7,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "cancelado",
			student_id: 1,
			class_id: 6,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "cancelado",
			student_id: 2,
			class_id: 6,
			createdAt: new Date(),
			updatedAt: new Date()
		}
		], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Enrollments', null, {})
  }
}
