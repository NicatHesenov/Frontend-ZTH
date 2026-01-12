import "./App.css";
import EmployeeForm from "./components/EmployeeForm/EmployeeForm";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <EmployeeForm />
      <EmployeeList />
    </>
  );
}

export default App;
