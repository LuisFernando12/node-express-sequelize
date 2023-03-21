const { PersonServices } = require('../services');
const personService = new PersonServices();
class PersonController {
  static find = async (req, res) => {
    try {
      const allPeopleActive = await personService.getActivesRegisters();
      if (!allPeopleActive) {
        console.log("error");
      }
      return res.json(allPeopleActive);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };
  static findAllPeople = async (req, res) => {
    try {
      const allPeople = await personService.getAllRegistersWithScope();
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
      const people = await personService.createRegister(
        {
          name,
          active,
          email,
          role
        }
      );

      return res.status(201).json(people);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  static get = async (req, res) => {
    const { id } = req.params;
    try {
      const people = await personService.getOneRegister(id);
      return res.json(people);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  static update = async (req, res) => {
    const { id } = req.params;
    const { name, active, email, role } = req.body;
    try {
      await personService.updateRegister({
        name,
        active,
        email,
        role,
      }, id);
      return res.status(200).json({ mensagem: `id ${id} atualizado` })
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  static cancelPeople = async (req, res) => {
    const { student_id } = req.params
    try {
      await personService.cancelPeopleAndEnrollment(student_id)
      return res.status(200).json({ message: `matriculas ref. estudate ${student_id} cancelada` })
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  static delete = async (req, res) => {
    const { id } = req.params;
    try {
      const people = await personService.deleteRegister(id);
      return res.status(204).json(people);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  static restore = async (req, res) => {
    const { id } = req.params;
    try {
      await personService.restoreRegister(id);
      return res.status(200).json(await personService.getOneRegister(id));
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}
module.exports = PersonController;
