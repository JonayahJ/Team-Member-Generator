const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const writeFileAsync = util.promisify(fs.writefile);
const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

// util - allows you to use write file, asynchronously. 
const util = require("util")

const teamMembers = [];


// array of questions for user
    // add function to select certain questions for the user to answer
function promptQuestions (){
    inquirer.prompt(
        [
            {
                type: "list",
                message: "Which type of employee would you like to add?",
                name: "role",
                choices: ["Manager", "Engineer", "Intern"]
            },
            {
                type: "input",
                message: "What is the new employee's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the new employee's ID number",
                name: "id",
            },
            {
                type: "input",
                message: "What is the employee's email address?",
                name: "email",
            },
        ]
     ).then(function(response){
         if(response.role == "Manager"){
             manager(response);
         }
         if(response.role == "Intern"){
            intern(response);
        }
        if(response.role == "Engineer"){
            engineer(response);
        }
    })
};


function manager(answers){
    console.log(answers);
    console.log("inside manager!");
    //ask office num
    inquirer.prompt(
        [
            {
                type: "input",
                message: "What is the manager's office number?",
                name: "officeNumber",
            },
            {
                type: "confirm",
                message: "Do you want to add a new employee?",
                name: "addNew",
            },
        ]
     )
     .then(function(managerInfo){
         
        const mgr = new Manager(answers.name, answers.id, answers.email, managerInfo.officeNumber)
        //done?
        //push instance of class into an array (teammembers)
        teamMembers.push(mgr);
        console.log(teamMembers);

        if (answers.confirm){//this needs to be fixed to call the yes no variable should return true or false
            //ask the starter q's
            promptQuestions();
        }else{
            //done
            render();
            //fs write write file
        }
    })
}

function intern(answers){
    console.log(answers);
    console.log("inside intern!");
    //ask office num
    inquirer.prompt(
        [
            {
                type: "input",
                message: "Which college or university did the intern attend?",
                name: "school",
            },
            {
                type: "confirm",
                message: "Do you want to add a new employee?",
                name: "addNew",
            },        
        ]
    )
     .then(function(internInfo){
         
        const int = new Intern(answers.name, answers.id, answers.email, internInfo.school)
        //done?
        //push instance of class into an array (teammembers)
        teamMembers.push(int);
        console.log(teamMembers);

        if (answers.confirm){//this needs to be fixed to call the yes no variable should return true or false
            //ask the starter q's
            promptQuestions();
        }else{
            //done
            render();
            //fs write write file    
        }
    })
}

function engineer(answers){
    console.log(answers);
    console.log("inside engineer!");
    //ask office num
    inquirer.prompt(
        [
            {
                type: "input",
                message: "What is the engineer's github username?",
                name: "github",
            },
            {
                type: "confirm",
                message: "Do you want to add a new employee?",
                name: "addNew",
            },
        ]
    )
     .then(function(engineerInfo){
         
        const eng = new Engineer(answers.name, answers.id, answers.email, engineerInfo.github)
        //done?
        //push instance of class into an array (teammembers)
        teamMembers.push(eng);
        console.log(teamMembers);

        if (answers.confirm){//this needs to be fixed to call the yes no variable should return true or false
            //ask the starter q's
            promptQuestions();
        }else{
            //done
            render();
            //fs write write file
        }
    })
}

promptQuestions();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all EXTEND from a CLASS named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
