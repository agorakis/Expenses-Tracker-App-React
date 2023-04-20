interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface ExpenseListProps {
  data: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ data, onDelete }: ExpenseListProps) => {
  const totalAmount = (data: Expense[]) => {
    let total = 0;

    data.forEach((item: Expense) => {
      total = total + item.amount;
    });

    return total;
  };

  return (
    <table className="table ">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.description}</td>
            <td>{item.amount}€</td>
            <td>{item.category}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}

        <tr>
          <td className="fw-bold">Total</td>
          <td className="fw-bold">{totalAmount(data)}€</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpenseList;