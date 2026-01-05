import { useState } from "react";
import Data from "../data/data";
import "./accordion.css";
function Accordion() {
  const [activeIde, setActiveIde] = useState(null);
  const [headerTitle, setHeaderTitle] = useState("Zəhmət olmasa birini seçin");
  const toggleAccordion = (id) => {
    const newActiveIde = activeIde === id ? null : id;
    setActiveIde(newActiveIde);
    if (newActiveIde === null) {
      setHeaderTitle("Zəhmət olmasa birini seçin");
    } else {
      const selectedItem = Data.find((item) => item.id === newActiveIde);
      setHeaderTitle(selectedItem.title);
    }
  };

  return (
    <div className="accordion-container">
      <h1 className="title">{headerTitle}</h1>
      <div className="accordion-content">
        {Data.map((item) => (
          <div className="accordion-content" key={item.id}>
            <div className="accordion-item">
              <button
                className="title"
                onClick={() => toggleAccordion(item.id)}
              >
                {item.title}
              </button>
              <p>{activeIde === item.id && item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
