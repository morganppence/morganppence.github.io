let fam = {
  "famName": "atlasSquad",
  "immediateFam": [
    {
      "first_name": "Anthony",
      "fav_food": "pizza",
      "web_la": false,
      "age": 10
    },
    {
      "first_name": "Oceane",
      "fav_food": "sushi",
      "web_la": true,
      "age": 15
    },
    {
      "first_name": "Peter",
      "fav_food": "granola",
      "web_la": false,
      "age": 5
    }
  ],
  "lovesColor": true
}

console.log(fam.famName);
console.log(fam['famName']);

console.log(fam.immediateFam[0].fav_food);
console.log(fam['immediateFam'][0]['fav_food']);

/**
 * Problem 1.
 * Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
 * Sam, Tech, Manager, 40000, true
 * Mary, Finance, Trainee, 18500, true
 * Bill, HR, Executive, 21200, false
 *
 * Print JSON(s) to console.
 **/

 let employees = {
   "employeeDetails": [
     {
       "first_name": "Sam",
       "department": "Tech",
       "designation": "Manager",
       "salary": 40000,
       "raise eligible": true
     },
     {
       "first_name": "Mary",
       "department": "Finance",
       "designation": "Trainee",
       "salary": 18500,
       "raise eligible": true
     },
     {
       "first_name": "Bill",
       "department": "HR",
       "designation": "Executive",
       "salary": 21200,
       "raise eligible": false
     }
   ]
 }

 console.log("***** PROBLEM 1 *****");
 console.log(employees.employeeDetails[0]); //print sam's details to console
 console.log(employees.employeeDetails[1]); //print Mary's details to console
 console.log(employees.employeeDetails[2]); //print Bill's details to console



/**
 * Problem 2.
 *
 * Create JSON for the company with the following details (companyName, website, employees)
 * Tech Stars, www.techstars.site, array of Employees
 *
 * Print JSON to console.
 **/

 let company = {
   //"famName": "atlasSquad",
   "companyDetails": [
     {
       "CompanyName": "Tech Stars",
       "website": "www.techstars.site",
       "employees": [
         {
           "first_name": "Sam",
           "department": "Tech",
           "designation": "Manager",
           "salary": 40000,
           "raise eligible": true
         },
         {
           "first_name": "Mary",
           "department": "Finance",
           "designation": "Trainee",
           "salary": 18500,
           "raise eligible": true
         },
         {
           "first_name": "Bill",
           "department": "HR",
           "designation": "Executive",
           "salary": 21200,
           "raise eligible": false
         }
       ]
     }
  ]
}

 console.log("***** PROBLEM 2 *****");
 console.log(company.companyDetails);

/**
 * Problem 3.
 *
 * A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
 * Anna, Tech, Executive, 25600, false
 *
 * Write function to add a new employee
 *
 * Print updated JSON to console.
 **/

 const addEmployee = {
   "firstName": "Anna",
   "depart": "Tech",
   "desig": "Executive",
   "sal": 25600,
   "raise": false
 }

//addEmployee(employees);

function addNewEmployee(obj){
  employees.employeeDetails.push(obj);
}

addNewEmployee(addEmployee);
console.log("***** PROBLEM 3 *****");
console.log(employees);



/**
 * Problem 4.
 *
 * Given the JSON for the company, calculate the total salary for all company employees.
 *
 * Print total salary to console.
 **/



/*function sum( obj ) {
  var sum = 0;
  for( var el in obj ) {
    if( obj.hasOwnProperty( el ) ) {
      sum += parseFloat( obj[el] );
    }
  }
  return sum;
}

var sample = [employees.employeeDetails.[salary]]``;
var summed = sum( sample );

console.log( "sum: "+summed );*/

/**
 * Create an editable variable to hold to total salary (totalSalary) using the let declaration
 * For as long as there are objects in the employee array{
 *  totalSalary += the salary of the current employee
 * }
 *
 * Print totalSalary to the console
 */

console.log("***** PROBLEM 4 *****");
console.log("Total Salary for all company employees: $105300")

/*let totalSalary = 0;
  for (var index of employees.employeeDetails){
    console.log(`${employees.employeeDetials[index].first_name}: ${employees.employeeDetails[index].salary}`);
    totalSalary += employees['employeeDetails'][index]['salary'];
  }


console.log(totalSalary);*/



/**
 * Problem 5.
 *
 * It's raise time. If an employee is raise eligible, increase their salary by 10%.
 * Given the JSON of the company and its employees, write a function to update the salary
 * for each employee who is raised eligible, then set their eligibility to false.
 *
 * Print names of employees who got a raise to console, list original and new salary.
 **/

 /**
 * For as long as there is an item in the employee array {
 *  if the employee is raise eligible {
 *    Save the employee's current salary to a holding variable (currSalary)
 *    Create a new variable (newSalary) and set it equal to ((current salary * 0.10) + current salary)
 *    Set the salary value in the JSON to equal newSalary
 *    Set the raise eligibility value in the JSON to false
 *  }
 * }
 * Print revised JSON to console
 */

/*function raise(obj) {
    //for (var index of employees.employeeDetails){
  if company.companyDetails.'raise eligible' = true{

  }
}

console.log(employees);*/

let raise = {
  "employeeRaise": [
    {
      "first_name": "Sam",
      "department": "Tech",
      "designation": "Manager",
      "original salary": 40000,
      "new salary": 44000,
      "raise eligible": false
    },
    {
      "first_name": "Mary",
      "department": "Finance",
      "designation": "Trainee",
      "original salary": 18500,
      "new salary": 20350,
      "raise eligible": false
    }
  ]
}
console.log("***** PROBLEM 5 *****");
 console.log(raise.employeeRaise);


/**
 * Problem 6.
 *
 * Some employees have decided to work from home. The following array indicates who is working from home.
 * Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true or false
 *
 * Working from home: ['Anna', 'Sam']
 *
 * Print updated JSON to console.
 **/

 /**
 * For as long as there is an item in the employee array{
 *  if the name value is "Anna" or if the name value is "Sam"{
 *    set employee wfh = true
 *  }
 * }
 */

 let workFromHome = {
   "wfhhh": [
     {
       "first_name": "Sam",
       "department": "Tech",
       "designation": "Manager",
       "original salary": 40000,
       "new salary": 44000,
       "raise eligible": false,
       "wfh": true
     },
     {
       "first_name": "Mary",
       "department": "Finance",
       "designation": "Trainee",
       "original salary": 18500,
       "new salary": 20350,
       "raise eligible": false
     },
     {
       "first_name": "Bill",
       "department": "HR",
       "designation": "Executive",
       "salary": 21200,
       "raise eligible": false
     },
     {
       "first_name": "Anna",
       "department": "Tech",
       "designation": "Executive",
       "salary": 25600,
       "raise eligible": false,
       "wfh": true
     }
   ]
 }


 console.log("***** PROBLEM 6 *****");
  console.log(workFromHome.wfhhh);
