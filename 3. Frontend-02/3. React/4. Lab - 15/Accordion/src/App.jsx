import "./App.css";
import { useState } from "react";
import Accordion from "./components/accordion";
import "./components/accordion.css";

function App() {
  const accordionData = [
    {
      id: 1,
      headerTitle: "Accordion header one",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt,enim distinctio natus amet praesentium consequatur eum facere.",
    },
    {
      id: 2,
      headerTitle: "Accordion header two",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt,enim distinctio natus amet praesentium consequatur eum facere.",
    },
    {
      id: 3,
      headerTitle: "Accordion header three",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt,enim distinctio natus amet praesentium consequatur eum facere.",
    },
  ];
  const [activeId, setActiveIde] = useState(null);
  const [headerTitle, setHeaderTitle] = useState("Zəhmət olmasa, birini seçin");

  const handleToggle = (id) => {
    const newActiceId = activeId === id ? null : id;
    setActiveIde(newActiceId);
    if (newActiceId === null) {
      setHeaderTitle("Zəhmət olmasa, birini seçin");
    } else {
      const activeItem = accordionData.find((item) => item.id === newActiceId);
      if (activeItem) {
        setHeaderTitle(activeItem.headerTitle);
      }
    }
  };

  return (
    <div className="container">
      <h2 className="title">{headerTitle}</h2>
      {accordionData.map((item) => (
        <Accordion
          key={item.id}
          id={item.id}
          title={item.headerTitle}
          content={item.content}
          activeId={activeId}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}

export default App;
