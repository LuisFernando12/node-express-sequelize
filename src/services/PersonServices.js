const Services = require("./Services");
const database = require("../models");
class PersonServices extends Services {
    constructor() {
        super('People');
        this.enrollment = 'Enrollment';
    }

    async getActivesRegisters(where = {}) {
        return database[this.nameModel].findAll({ where: { ...where } });
    };

    async getAllRegistersWithScope(where = {}) {
        return database[this.nameModel].scope('all').findAll({ where: { ...where } });
    };
    async cancelPeopleAndEnrollment(student_id) {
        return database.sequelize.transaction(async transaction => { 
            await database[this.nameModel].update({ active: false }, { where: { id: Number(student_id) } }, { transaction: transaction })
            await database[this.enrollment].update({ status: 'cancelado' }, { where: { student_id: Number(student_id) } }, { transaction: transaction })
        });
    };
}
module.exports = PersonServices;