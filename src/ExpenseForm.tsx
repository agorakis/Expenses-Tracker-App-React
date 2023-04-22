import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { categories } from "./categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Decription should be minimum 3 characters" })
    .max(50, { message: "Decription should be maximum 50 characters" }),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(1, { message: "Amount should be minimum 1 Euro" })
    .max(100_000, { message: "Amount should be maximum 100.000 Euro" }),
  category: z.enum(categories, {
    errorMap: () => ({
      message:
        "Category should be one of Rent | Utilities | Super Market | Vehicle Expenses | Entertaiment",
    }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface ExpenseFormProps {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: ExpenseFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="row mb-4">
        <label htmlFor="description" className="col-sm-2 col-form-label">
          Description
        </label>
        <div className="col-sm-10">
          <input
            {...register("description")}
            placeholder="Describe the expense"
            type="text"
            className="form-control"
            id="description"
          />
          {errors.description && (
            <p className="text-danger">{errors.description?.message}</p>
          )}
        </div>
      </div>

      <div className="row mb-4">
        <label htmlFor="amount" className="col-sm-2 col-form-label">
          Amount
        </label>
        <div className="col-sm-10">
          <input
            {...register("amount", { valueAsNumber: true })}
            placeholder="Add the amount of the expense"
            type="number"
            className="form-control"
            id="amount"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount?.message}</p>
          )}
        </div>
      </div>

      <div className="row mb-4">
        <label htmlFor="category" className="col-sm-2 col-form-label">
          Category
        </label>
        <div className="col-sm-10">
          <select
            {...register("category")}
            className="form-select"
            aria-label="Default select example"
            id="category"
          >
            <option selected>Select category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category?.message}</p>
          )}
        </div>
      </div>
      <div className="d-grid my-5">
        <button type="submit" className="btn btn-primary">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
