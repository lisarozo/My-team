const { TestWatcher } = require("@jest/core");
const Employee = require("./Employee");
jest.mock(/lib/Employee.js);
test("Create a new Employee",()=>{
    const employee = new Employee
    const name = employee.name
    expect(employee.name).toBe(name);
})