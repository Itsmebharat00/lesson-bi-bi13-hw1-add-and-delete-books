import React, { useState } from "react";

const AddBooksForm = () => {
  const [formData, setFormData] = useState({
    title: String,
    author: String,
    publishYear: Number,
    genre: String,
    language: String,
    country: String,
    rating: String,
    summary: String,
    coverImageUrl: String,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === "publishYear" || name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Book Data Submitted:", formData);
    try {
      const response = await fetch(
        "https://lesson-be-be-4-assignment1.vercel.app/books",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw `Failed to add Book data with ${response.status}`;
      }
      const data = await response.json();

      console.log("Added Books:", data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <div>
      <h2>Add Books</h2>
      <form onSubmit={handleSubmit}>
        <label> Title: </label>
        <br />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br /> <br />
        <label> Author: </label>
        <br />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
        <br /> <br />
        <label> Publish Year: </label>
        <br />
        <input
          type="number"
          name="publishYear"
          value={formData.publishYear}
          onChange={handleChange}
        />
        <br /> <br />
        <label> Genre: </label>
        <br />
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />
        <br /> <br />
        <label> Language: </label>
        <br />
        <input
          type="text"
          name="language"
          value={formData.language}
          onChange={handleChange}
        />
        <br /> <br />
        <label> Country: </label>
        <br />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
        <br /> <br />
        <label> Rating: </label>
        <br />
        <input
          type="text"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <br /> <br />
        <label> Summary: </label>
        <br />
        <input
          type="text"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
        />
        <br /> <br />
        <label> Cover Image Url: </label>
        <br />
        <input
          type="text"
          name="coverImageUrl"
          value={formData.coverImageUrl}
          onChange={handleChange}
        />{" "}
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBooksForm;
