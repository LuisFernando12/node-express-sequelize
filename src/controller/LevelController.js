const database = require("../models");

class LevelController {
  static find = async (req, res) => {
    try {
      const allLevel = await database.Level.findAll();
      if (!allLevel) {
        console.log("error");
      }
      return res.json(allLevel);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };
  static create = async (req, res) => {
    const { level_description } = req.body;
    try {
      const level = await database.Level.create({
        level_description
      });

     return res.status(201).json(level);
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
  static get = async (req, res) => {
    const {id} = req.params;
    try {
      const level = await database.Level.findOne({where: {id: Number(id)}});
      return res.json(level);
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
  static update = async (req, res) => {
    const {id} = req.params;
    const { level_description } = req.body;
    try {
      await database.Level.update({
        level_description,    
      },{where: { id: Number(id)}});
      return res.json(await database.Level.findOne({where: {id: Number(id)}}))
    } catch (error) {
      return res.status(500).json({message:error.message});
    }
  };
  static delete = async (req, res) => {
    const {id} = req.params;
    try {
      const level = await database.Level.destroy({where: {id: Number(id)}});
      return res.status(204).json(level);
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
  static restore = async (req, res) => {
    const {id} = req.params;
    try {
       await database.Level.restore({where: {id: Number(id)}});
      return res.status(200).json(await database.Level.findOne({where: {id: Number(id)}}));
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
}
module.exports = LevelController;
