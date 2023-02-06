const database = require("../models");

class ClassController {
  static find = async (req, res) => {
    try {
      const allClass = await database.Class.findAll();
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
      const team = await database.Class.create({date_start, teacher_id, level_id});

     return res.status(201).json(team);
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
  static get = async (req, res) => {
    const {id} = req.params;
    try {
      const team = await database.Class.findOne({where: {id: Number(id)}});
      return res.json(team);
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
  static update = async (req, res) => {
    const {id} = req.params;
    const {date_start, teacher_id, level_id} = req.body;
    try {
      await database.Class.update({date_start, teacher_id, level_id},{where: { id: Number(id)}});
      return res.json(await database.Class.findOne({where: {id: Number(id)}}))
    } catch (error) {
      return res.status(500).json({message:error.message});
    }
  };
  static delete = async (req, res) => {
    const {id} = req.params;
    try {
      const team = await database.Class.destroy({where: {id: Number(id)}});
      return res.status(204).json(team);
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
  static restore = async (req, res) => {
    const {id} = req.params;
    try {
       await database.Class.restore({where: {id: Number(id)}});
      return res.status(200).json(await database.Class.findOne({where: {id: Number(id)}}));
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
}
module.exports = ClassController;
