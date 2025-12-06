import "./accordion.css";

function Accordion({ id, title, content, onToggle, activeId }) {
  return (
    <div className="container">
      <div className="accordion__item">
        <button className="accordion__btn" onClick={() => onToggle(id)}>
          {title} <span className="accordion__icon">&#9662;</span>
        </button>

        {activeId === id && (
          <div className="accordion__content">
            <p>{content}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
