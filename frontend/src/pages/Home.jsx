import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";

import { MdOutlineAddBox } from 'react-icons/md';
import BooksCard from "../components/Home/BooksCard";
import BooksTable from "../components/Home/BooksTable";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showtype, setShowtype] = useState("card"); // Set default to "card"

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/books`)
      .then(response => {
        setBooks(response.data.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-5">
        <button className="bg-sky-600 hover:bg-sky-800 px-4 py-1 rounded-lg"
          onClick={() => setShowtype("card")}
        >
            Card View
        </button>
        <button className="bg-sky-600 hover:bg-sky-800 px-4 py-1 rounded-lg"
          onClick={() => setShowtype("table")}
        >
            Table View
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to={'/books/create'}>
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showtype === "card" ? (
        <BooksCard books={books} />
      ) : (
        <BooksTable books={books} />
      )}
    </div>
  );
}

export default Home;
