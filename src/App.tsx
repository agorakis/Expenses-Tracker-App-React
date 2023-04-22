import { FormEvent, useState } from "react";
import { BsCalculator } from "react-icons/bs";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm from "./ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenseList, setExpenseList] = useState([
    {
      id: 1,
      description: "Petrol",
      amount: 50,
      category: "Vehicle Expenses",
    },
    {
      id: 2,
      description: "Meat,Vegetables,Milk",
      amount: 35,
      category: "Super Market",
    },
    {
      id: 3,
      description: "Electricity Bill (April)",
      amount: 70,
      category: "Utilities",
    },
    {
      id: 4,
      description: "Appt Rent (April)",
      amount: 750,
      category: "Rent",
    },
    {
      id: 5,
      description: "Restaurant",
      amount: 40,
      category: "Entertaiment",
    },
  ]);

  const handleSubmit = (data: ExpenseFormData) => {
    setExpenseList([...expenseList, { id: expenseList.length + 1, ...data }]);
    console.log(expenseList);
  };

  const handleDelete = (id: number) => {
    setExpenseList(expenseList.filter((item) => item.id !== id));
  };

  const handleFiltering = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredExpenseList = selectedCategory
    ? expenseList.filter((item) => item.category === selectedCategory)
    : expenseList;

  return (
    <>
      <div className="py-4 px-5 bg-light">
        <h2 className="pb-5 text-center">
          <BsCalculator color="green" size={30} />
          Manage your Expenses Efficiently
        </h2>

        <div className="row row-cols-1 row-cols-xl-2 gy-3 gx-5">
          <div className="col-xl-5">
            <ExpenseForm onSubmit={handleSubmit} />
          </div>
          <div className="col-xl-7 text-center">
            <ExpenseFilter onSelect={handleFiltering} />
            <ExpenseList data={filteredExpenseList} onDelete={handleDelete} />
          </div>
        </div>
      </div>
      <div className="ps-2 bg-secondary text-warning">
        Coded by <span className="fw-bold fst-italic">@antGor</span>
      </div>
    </>
  );
}

export default App;
