import "./App.css";
import MainLayout from "./components/MainLayout/MainLayout";
import SettingsProvider from "./context/Settings";

function App() {
  return (
    <SettingsProvider>
      <MainLayout />
    </SettingsProvider>
  );
}

export default App;
