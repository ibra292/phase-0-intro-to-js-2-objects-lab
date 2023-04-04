// Write your solution in this file!
const employee = {
    name : "john",
    streetAddress : "downing"
}
function updateEmployeeWithKeyAndValue(employee,key,value){
    const employees ={...employee,[key]:value}
    return employees
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
     employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee,key,value){
    const newObj = {...employee}
    delete newObj[key]
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(employee,key,value){
    delete employee[key]
    return employee
}