import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { deleteEmployee } from "../../store/slices/employeeSlice";
import "./employeeCard.css";
import { RiDeleteBin5Line } from "react-icons/ri";
function EmployeeCard() {
  const employees = useAppSelector((state) => state.employees.list);
  const dispatch = useAppDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteEmployee(id));
  };
  return (
    <div className="employeeCard">
      {employees.map((item) => (
        <div className="employeeCard-container" key={item.id}>
          <div className="employeeCard-content">
            <div className="employeeCard-task">
              <h3 className="employeeCard-title">{item.fullName}</h3>
              <p className="employeeCard-text">{item.position}</p>
            </div>
            <RiDeleteBin5Line
              className="employeeCard-delet"
              onClick={() => handleDelete(item.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmployeeCard;
