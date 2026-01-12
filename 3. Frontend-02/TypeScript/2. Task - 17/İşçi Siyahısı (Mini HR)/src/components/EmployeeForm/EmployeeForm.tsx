import "./employeeForm.css";
import { addEmployee } from "../../store/slices/employeeSlice";
import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks";

function EmployeeForm() {
  const dispatch = useAppDispatch();
  const [fullName, setFullName] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName && position) {
      const newEmployee = {
        id: Date.now(),
        fullName,
        position,
        isActive: true,
      };
      dispatch(addEmployee(newEmployee));
      setFullName("");
      setPosition("");
    }
  };

  return (
    <form className="employeeForm-container" onSubmit={handleSubmit}>
      <h2>Add New Employee</h2>
      <label>
        Full Name
        <input
          type="text"
          placeholder="Enter full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </label>
      <label>
        Job Position
        <input
          type="text"
          placeholder="Enter job position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </label>
      <button type="submit" className="employeeForm-btn">
        Add Employee
      </button>
    </form>
  );
}

export default EmployeeForm;
