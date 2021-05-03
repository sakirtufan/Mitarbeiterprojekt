import { Request } from "./requests";

$(() => {
  const form = $("#employee-form");
  const nameInput = $("#name");
  const departmentInput = $("#department");
  const salaryInput = $("#salary");
  const employeesList = $("#employees");
  const updateEmployeeButton = $("#update");

  const request = new Request("http://localhost:3000/employees");
  // request
  //   .get()
  //   .then((employees) => {
  //     console.log(employees);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // request
  //   .post({
  //     name: "Ümit Efe Tufan",
  //     department: "Schüler",
  //     salary: 2000,
  //   })
  //   .then((employee) => {
  //     console.log(employee);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // request
  //   .put(1, {
  //     name: "Sakir Tufan",
  //     department: "IT",
  //     salary: 4100,
  //   })
  //   .then((employee) => {
  //     console.log(employee);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // request
  //   .delete(2)
  //   .then((message) => {
  //     console.log(message);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

});
