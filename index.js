// Write your solution in this file!
const employee =
{
    name: "maria",
    streetAddress: "bickfaya",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
const anotherEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Sam");
const anEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");
anotherEmployee;
anEmployee;


function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    //const { ...employee } = newEmployee;
    delete newEmployee["name"];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    employee.name = "Sam"
    delete employee["name"];
    return employee;
}