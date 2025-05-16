import { createContext, useState } from "react";

const DATABASE_ID = "682783ad002b3bee6906";
const COLLECTION_ID = "682783de000dfed93c5d";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    try {
    } catch (error) {
      console.error(error.message);
    }
  }

  async function fetchBookById(id) {
    try {
    } catch (error) {
      console.error(error.message);
    }
  }

  async function createBook(data) {
    try {
    } catch (error) {
      console.error(error.message);
    }
  }

  async function deleteBook(id) {
    try {
    } catch (error) {
      console.error(error.message);
    }
  }
  // async function updateBook(id, data) {
  //     try {
  //     } catch (error) {
  //     console.error(error.message);
  //     }
  // }

  return (
    <BooksContext.Provider
      value={{
        books,
        fetchBooks,
        fetchBookById,
        createBook,
        deleteBook,
        // updateBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}
