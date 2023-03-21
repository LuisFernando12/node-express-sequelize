const {LevelServices} = require("../services")
const levelServices = new LevelServices();
class LevelController {
  static find = async (req, res) => {
    try {
      const allLevel = await levelServices.getAllRegisters();
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
      const level = await levelServices.createRegister({
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
      const level = await levelServices.getOneRegister(id);
      return res.json(level);
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
  static update = async (req, res) => {
    const {id} = req.params;
    const { level_description } = req.body;
    try {
      await levelServices.updateRegister({
        level_description,    
      },id);
      return res.json(await levelServices.getOneRegister(id))
    } catch (error) {
      return res.status(500).json({message:error.message});
    }
  };
  static delete = async (req, res) => {
    const {id} = req.params;
    try {
      const level = await levelServices.deleteRegister(id);
      return res.status(204).json(level);
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
  static restore = async (req, res) => {
    const {id} = req.params;
    try {
       await levelServices.restoreRegister(id);
      return res.status(200).json(await levelServices.getOneRegister(id));
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
}
module.exports = LevelController;
