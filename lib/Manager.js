// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee {
    constructor(officeNumber){
        this.officeNumber = officeNumber;
    }
    // overwrite Employee getRole()
    // getRole(){
    //     return Employee;
    // }
}

module.exports = manager;