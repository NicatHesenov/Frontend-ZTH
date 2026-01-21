import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { StudentsData } from "../../data/studentsData";
import Buttons from "../Buttons/Buttons";
import Header from "../Header/Header";
import "./studentList.css";

function StudentList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const status = searchParams.get("status");

  useEffect(() => {
    console.log("Status changed:", status);
  }, [status]);
  const students = status
    ? StudentsData.filter((s) => s.status === status)
    : StudentsData;
  return (
    <div className="studentList-container">
      <Header />
      <Buttons setSearchParams={setSearchParams} />

      {students.map((student) => (
        <div className="studentList-content" key={student.id}>
          <h3>{student.name}</h3>
          <p>Status: {student.status}</p>
          <button onClick={() => navigate(student.id)}>View details</button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
