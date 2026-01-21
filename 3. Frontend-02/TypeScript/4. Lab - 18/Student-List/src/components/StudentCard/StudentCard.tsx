import type { Student } from "../../data/studentsData";
import "./StudentCard.css";
interface StudentCardProps {
  student?: Student;
}

function StudentCard({ student }: StudentCardProps) {
  if (!student) return <p>Student not found</p>;

  return (
    <div className="studentCard-container">
      <h2>Student Detail</h2>
      <p>ID: {student.id}</p>
      <p>Name: {student.name}</p>
      <p>Status: {student.status}</p>
    </div>
  );
}

export default StudentCard;
