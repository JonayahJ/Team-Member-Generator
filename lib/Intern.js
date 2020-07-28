// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

class Intern extends Employee {
    constructor(school){
        this.school = school;
    }
    getSchool(){}    
    // overwrite Employee getRole()
    // getRole(){
    //     return Employee;
    // }
}

module.exports = intern;