const database = require("../models");
const Sequelize = require('sequelize');
const { EnrollmentServices } = require("../services");
const enrollementService = new EnrollmentServices();
class EnrollmentController {
  static find = async (req, res) => {
    try {
      const allEnrollment = await enrollementService.getAllRegisters();
      if (!allEnrollment) {
        console.log("error");
      }
      return res.json(allEnrollment);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };
  static create = async (req, res) => {
    const { student_id, class_id } = req.params;
    const { status } = req.body;
    try {
      const enrollment = await enrollementService.createRegister({ status, class_id, student_id });

      return res.status(201).json(enrollment);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  static get = async (req, res) => {
    const { id } = req.params;
    try {
      const enrollment = await enrollementService.getOneRegister(id);
      return res.json(enrollment);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  static getEnrollmentByClass = async (req, res) => {
    const { classId } = req.params;
    try {
      const enrollment = await database.Enrollment.findAndCountAll({ where: { class_id: Number(classId), status: 'confirmado' } });
      return res.json(enrollment);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  static getFullEnrollment = async (req, res) => {
    const fullEnrollment = 2;
    try {
      const enrollment = await enrollementService.getAllRegisters(
        {
          where: { status: 'confirmado' },
          attributes: ['class_id'],
          group: ['class_id'],
          having: Sequelize.literal(`count(class_id) >= ${fullEnrollment}`)
        }
      );
      return res.json(enrollment);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  static getEnrollment = async (req, res) => {
    const { student_id } = req.params;
    try {
      const enrollment = await enrollementService.getEnrolledByStudent(student_id)
      return res.json(enrollment);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  static update = async (req, res) => {
    const { id } = req.params;
    const { student_id, class_id, status } = req.body;
    try {
      await enrollementService.updateRegister({ status, class_id, student_id }, id);
      return res.json(await enrollementService.getOneRegister(id))
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  static delete = async (req, res) => {
    const { id } = req.params;
    try {
      const enrollment = await enrollementService.deleteRegister(id);
      return res.status(204).json(enrollment);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  static restore = async (req, res) => {
    const { id } = req.params;
    try {
      await enrollementService.restoreRegister(id);
      return res.status(200).json(await enrollementService.getOneRegister(id));
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}
module.exports = EnrollmentController;
