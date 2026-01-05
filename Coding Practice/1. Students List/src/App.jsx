import Profile from "./components/profile";
import { students } from "./data/students";

function App() {
  return (
    <div>
      {students.map((item) => (
        <Profile key={item} name={item} />
      ))}
    </div>
  );
}

export default App;
