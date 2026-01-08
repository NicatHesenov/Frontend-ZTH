import "./App.css";
import SetingsProvider from "./TaskContext/settings";
import ThemeToggle from "./ThemeToggle/ThemeToggle";

function App() {
  return (
    <>
      <SetingsProvider>
        <ThemeToggle />
      </SetingsProvider>
    </>
  );
}

export default App;
