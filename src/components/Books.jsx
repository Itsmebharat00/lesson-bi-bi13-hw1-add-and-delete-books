import useFetch from "../useFetch";
import { useState } from "react";

const Books = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { data, loading, error } = useFetch(
    "https://lesson-be-be-4-assignment1.vercel.app/books"
  );

  const deleteHandle = async (bookId) => {
    try {
      console.log(successMessage);
      const response = await fetch(
        `https://lesson-be-be-4-assignment1.vercel.app/books/${bookId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw "Failed to delete Book";
      }

      const data = await response.json();
      if (data) {
        setSuccessMessage("Book delete successfully");
        window.location.reload();
        console.log("Deleted Book:", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ul>
        {data?.map((book) => (
          <li>
            {book.title} {""}
            <button onClick={() => deleteHandle(book._id)}> Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
