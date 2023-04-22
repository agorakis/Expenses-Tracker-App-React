import { categories } from "./categories";

interface ExpenseFilterProps {
  onSelect: (category: string) => void;
}

const ExpenseFilter = ({ onSelect }: ExpenseFilterProps) => {
  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className="form-select form-select-md mb-2"
      aria-label="Default select example"
    >
      <option value="" selected>
        All Categories
      </option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
