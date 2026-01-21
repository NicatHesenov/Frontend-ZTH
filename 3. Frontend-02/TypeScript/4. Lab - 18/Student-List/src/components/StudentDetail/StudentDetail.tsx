import { useParams, useNavigate } from "react-router-dom";
import { StudentsData } from "../../data/studentsData";
import StudentCard from "../StudentCard/StudentCard";

function StudentDetail() {
  const { studentID } = useParams<{ studentID: string }>();
  const navigate = useNavigate();

  const student = StudentsData.find((item) => item.id === studentID);

  return (
    <div>
      <StudentCard student={student} />
      <button onClick={() => navigate("/students")}>Back to list</button>
    </div>
  );
}

export default StudentDetail;
