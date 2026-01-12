import { useAppSelector } from "../../store/hooks";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./EmployeeList.css";
function EmployeeList() {
  const employees = useAppSelector((state) => state.employees.list);

  return (
    <div className="employeeList-container">
      <h3 className="employeeList-title">Employees List</h3>
      {employees.length === 0 ? (
        <div className="employeeList-text">
          <p className="employeeList-p">No epmloyee found</p>
        </div>
      ) : (
        <EmployeeCard />
      )}
    </div>
  );
}

export default EmployeeList;
