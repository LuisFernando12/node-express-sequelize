const database = require('../models');

class Services {
    constructor(nameModel) {
        this.nameModel = nameModel;
    };
    async getAllRegisters(object) {
        return database[this.nameModel].findAll({where:{...object}});
    };
    async getOneRegister(id) {
        return database[this.nameModel].findOne({ where: { id: Number(id)} });
    };
    async createRegister(object) {
        return database[this.nameModel].create(object);
    };
    async updateRegister(object, id) {
        return database[this.nameModel].update(object, { where: { id: Number(id) } });
    };
    async deleteRegister(id) {
        console.log(this.nameModel);
        return database[this.nameModel].destroy({ where: { id: Number(id) } });
    };
    async restoreRegister(id){
        return database[this.nameModel].restore({where: {id: Number(id)}});
    };

}

module.exports = Services;