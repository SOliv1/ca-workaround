import {Employee, cadre, tax, benefits, bonus, reimbursement} from './employee';

function getEmployeeInformation(inputSalary) {
  console.log('Salary: 'Employee.salary);
  console.log('Cadre: ' + Cadre());
  console.log('Tax: ' + tax());
  console.log('Benefits: ' + getBenefits();
  console.log('Bonus: ' + calculateBonus());
  console.log('Reimbursement Eligibility: ' + reimbursement() + '\n');
}
getEmployeeInformation(1000);
getEmployeeInformation(5000);
getEmployeeInformation(10000);
