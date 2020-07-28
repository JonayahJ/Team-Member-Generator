// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){}
    getId(){}
    getEmail(){}
    getRole(){
        return Employee;
    }
}

// const employee1 = new Employee("Jo", 3, "jonayah@thinkhalcyon.com")
// console.log(employee1)

module.exports = employee;