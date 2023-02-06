const database = require("../models");

class PersonController {
  static find = async (req, res) => {
    try {
      const allPeople = await database.People.findAll();
      if (!allPeople) {
        console.log("error");
      }
      return res.json(allPeople);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };
  static create = async (req, res) => {
    const { name, active, email, role } = req.body;
    try {
      const people = await database.People.create({
        name,
        active,
        email,
        role
      });

     return res.status(201).json(people);
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
  static get = async (req, res) => {
    const {id} = req.params;
    try {
      const people = await database.People.findOne({where: {id: Number(id)}});
      return res.json(people);
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
  static update = async (req, res) => {
    const {id} = req.params;
    const { name, active, email, role } = req.body;
    try {
      await database.People.update({
        name,
        active,
        email,
        role,
        
      },{where: { id: Number(id)}});
      return res.json(await database.People.findOne({where: {id: Number(id)}}))
    } catch (error) {
      return res.status(500).json({message:error.message});
    }
  };
  static delete = async (req, res) => {
    const {id} = req.params;
    try {
      const people = await database.People.destroy({where: {id: Number(id)}});
      return res.status(204).json(people);
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
  static restore = async (req, res) => {
    const {id} = req.params;
    try {
      await database.People.restore({where: {id: Number(id)}});
      return res.status(200).json(await database.People.findOne({where:{id: Number(id)}}));
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
}
module.exports = PersonController;
