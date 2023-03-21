const database = require("../models");
const {ClassServices} = require("../services");
const {Op} = require('sequelize');
const classServices = new ClassServices();
class ClassController {
  static find = async (req, res) => {
    const {date_start, date_end} = req.query;
    const where = {};
    date_start || date_end?where.date_start = {} : null;
    date_start?where.date_start[Op.gte]=date_start:null;
    date_end?where.date_start[Op.lte]=date_end:null;
    try {
      const allClass = await classServices.getAllRegisters( where );
      if (!allClass) {
        console.log("error");
      }
      return res.json(allClass);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };
  static create = async (req, res) => {
    const { teacher_id, level_id} = req.params;
    const {date_start} = req.body;
    try {
      const team = await classServices.createRegister({date_start, teacher_id, level_id});

     return res.status(201).json(team);
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
  static get = async (req, res) => {
    const {id} = req.params;
    try {
      const team = await classServices.getOneRegister(id);
      return res.json(team);
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
  static update = async (req, res) => {
    const {id} = req.params;
    const {date_start, teacher_id, level_id} = req.body;
    try {
      await classServices.updateRegister({date_start, teacher_id, level_id},id);
      return res.json(await database.Class.findOne({where: {id: Number(id)}}))
    } catch (error) {
      return res.status(500).json({message:error.message});
    }
  };
  static delete = async (req, res) => {
    const {id} = req.params;
    try {
      const team = await classServices.deleteRegister(id);
      return res.status(204).json(team);
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
  static restore = async (req, res) => {
    const {id} = req.params;
    try {
       await classServices.restoreRegister(id);
      return res.status(200).json(await classServices.getOneRegister(id));
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
}
module.exports = ClassController;
