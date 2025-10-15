import "./styles.css";
import Books from "./components/Books";
import AddBooksForm from "./components/AddBooksForm";

export default function App() {
  return (
    <div className="">
      <AddBooksForm />
      <Books />
    </div>
  );
}
