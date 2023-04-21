interface ExpenseFilterProps{
    onSelect: (category:string) => void
}


const ExpenseFilter = ({onSelect}:ExpenseFilterProps) => {
    return ( 
    
 <select onChange={(e) => onSelect(e.target.value)} className="form-select form-select-md mb-2" aria-label="Default select example">
    <option value="" selected>All Categories</option>
    <option value="Rent">Rent</option>
    <option value="Utilities">Utilities</option>
    <option value="Super Market">Super Market</option>
    <option value="Vehicle Expenses">Vehicle Expenses</option>
    <option value="Entertaiment">Entertaiment</option>
  </select> 
);
}
 
export default ExpenseFilter;