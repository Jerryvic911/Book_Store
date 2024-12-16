import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit as AiOutLineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Start loading as true

  useEffect(() => {
    axios.get("http://localhost:3000/books")
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
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? ( // Show spinner when loading is true
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No</th>
              <th className="border border-slate-600 rounded-md">Title</th>
              <th className="border border-slate-600 rounded-md max-md:hidden">Author</th>
              <th className="border border-slate-600 rounded-md max-md:hidden">Publish Year</th>
              <th className="border border-slate-600 rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => ( // Return the JSX for each book
              <tr key={book._id} className="h-8">
                <td className="border border-slate-700 text-center rounded-md">{index + 1}</td>
                <td className="border border-slate-700 text-center rounded-md">{book.title}</td>
                <td className="border border-slate-700 text-center rounded-md">{book.author}</td>
                <td className="border border-slate-700 text-center rounded-md">{book.publishYear}</td>
                <td className="border border-slate-700 text-center rounded-md">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className="text-green-800 text-2xl" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutLineEdit className="text-yellow-600 text-2xl" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-red-600 text-2xl" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;