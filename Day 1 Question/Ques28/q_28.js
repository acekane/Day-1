let basic_Salary=5000;
let HRA=10000;
let Other_Allowances=5000;

function calculateAnnualSalay(basic_Salary,HRA,Other_Allowances){
    let monthlySalary=basic_Salary+HRA+Other_Allowances;
    let AnnualSalary=monthlySalary*12;
    return AnnualSalary;
}

let annual_Salary=calculateAnnualSalay(basic_Salary,HRA,Other_Allowances);
console.log("Basic Salary: ",basic_Salary);
console.log("HRA: ",HRA);
console.log("Other Allowances: ",Other_Allowances);
console.log("Total Annual Salay: ",annual_Salary);

document.getElementById('Basic').innerHTML=(`Basic Salary: ${basic_Salary}`);
document.getElementById('hra').innerHTML=(`HRA: ${HRA}`);
document.getElementById('Other').innerHTML=(`Other Allowances: ${Other_Allowances}`);
document.getElementById('Total_Annual_Salary').innerHTML=(`total Annual Salar: ${annual_Salary}`);

