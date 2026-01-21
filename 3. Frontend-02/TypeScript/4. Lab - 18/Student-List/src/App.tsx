import { Routes, Route, Navigate } from "react-router-dom";
import StudentList from "./components/StudentList/StudentList";
import StudentDetail from "./components/StudentDetail/StudentDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/students" />} />
      <Route path="/students" element={<StudentList />} />
      <Route path="/students/:studentID" element={<StudentDetail />} />
    </Routes>
  );
}

export default App;
