import { MdOutlineFilterAlt } from "react-icons/md";
import "./CategoryFilter.css";
function CategoryFilter({ activeCategory, onCategoryChange }) {
  const categories = ["Hamısı", "Elektronika", "Təhsil"];

  return (
    <div className="filter-container">
      <div className="filter-content">
        <MdOutlineFilterAlt className="filter-icon" />
        <p className="filter-text">Kateqoriyalar</p>
      </div>
      <div className="filter-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : "filter-btn"}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
