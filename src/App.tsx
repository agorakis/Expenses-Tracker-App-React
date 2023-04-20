import { useState } from "react";
import { BsCalculator, BsFillCreditCardFill } from "react-icons/bs";
import ExpenseList from "./ExpenseList";

function App() {
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
      amount: 27,
      category: "Super Market",
    },
    {
      id: 3,
      description: "Electricity Bill",
      amount: 71,
      category: "Utilities",
    },
    {
      id: 4,
      description: "Appt Rent for January",
      amount: 750,
      category: "Rent",
    },
  ]);

  const handleDelete = (id: number) => {
    setExpenseList(expenseList.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="p-4 bg-light text-center">
        <h2 className="pb-5">
          <BsCalculator color="green" size={40} />
          Manage your expenses <BsFillCreditCardFill
            color="orange"
            size={30}
          />{" "}
          efficiently
        </h2>

        <div className="row row-cols-1 row-cols-lg-2 justify-content-around gy-3">
          <div className="col">One of two columns</div>
          <div className="col">
            <ExpenseList data={expenseList} onDelete={handleDelete} />
          </div>
        </div>
      </div>
      <div className="ps-2 bg-secondary text-warning">
        Designed by <span className="fw-bold fst-italic">@antGor</span>
      </div>
    </>
  );
}

export default App;
