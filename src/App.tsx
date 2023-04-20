import { BsCalculator, BsFillCreditCardFill } from "react-icons/bs";
import ExpenseList from "./ExpenseList";

function App() {
  return (
    <>
      <div className="p-4 bg-light text-center">
        <h2 className="pb-4"> <BsCalculator color="green" size={30}/> Manage your expenses <BsFillCreditCardFill color="orange" size={30}/> efficiently </h2>

        <div className="row row-cols-1 row-cols-lg-2 justify-content-around gy-3">
          <div className="col">One of two columns</div>
          <div className="col"><ExpenseList/></div>
        </div>
      </div>
      <div className="ps-2 bg-secondary text-warning"> Coded by <span className="fw-bold fst-italic">antGor...</span></div>
    </>
  );
}

export default App;


