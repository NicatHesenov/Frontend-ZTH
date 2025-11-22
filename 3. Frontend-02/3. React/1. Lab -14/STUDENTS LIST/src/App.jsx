import Students from "./data/students";
import Profile from "./components/profile";

function App() {
  return (
    <div>
      {Students.map((item, index) => (
        <Profile key={index} name={item} />
      ))}
    </div>
  );
}

export default App;
