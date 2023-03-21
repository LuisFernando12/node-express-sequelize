const Services = require("./Services");
const database = require('../models')
class EnrollmentServices extends Services{
    constructor(){
        super('Enrollment');
        this.people = 'People'
    }
    async getEnrolledByStudent(student_id){
        const people = await database[this.people].findOne({where:{id: Number(student_id)}});
        const enrolledClasses = await people.getEnrolledClasses();
        return enrolledClasses;
        
    }
}
module.exports = EnrollmentServices;