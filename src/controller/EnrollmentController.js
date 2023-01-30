const database = require("../models");

class EnrollmentController {
  static find = async (req, res) => {
    try {
      const allEnrollment = await database.Enrollment.findAll();
      if (!allEnrollment) {
        console.log("error");
      }
      return res.json(allEnrollment);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };
  static create = async (req, res) => {
    const { student_id } = req.params;
    const {status, class_id} = req.body;
    try {
      const enrollment = await database.Enrollment.create({status, class_id, student_id});

     return res.status(201).json(enrollment);
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
  static get = async (req, res) => {
    const {id} = req.params;
    try {
      const enrollment = await database.Enrollment.findOne({where: {id: Number(id)}});
      return res.json(enrollment);
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
  static update = async (req, res) => {
    const {id} = req.params;
    const { student_id } = req.params;
    const {status, class_id} = req.body;
    try {
      await database.Enrollment.update({status, class_id, student_id},{where: { id: Number(id)}});
      return res.json(await database.Enrollment.findOne({where: {id: Number(id)}}))
    } catch (error) {
      return res.status(500).json({message:error.message});
    }
  };
  static delete = async (req, res) => {
    const {id} = req.params;
    try {
      const enrollment = await database.Enrollment.destroy({where: {id: Number(id)}});
      return res.status(204).json(enrollment);
    } catch (error) {
     return res.status(500).json({message:error.message});
    }
  };
}
module.exports = EnrollmentController;
