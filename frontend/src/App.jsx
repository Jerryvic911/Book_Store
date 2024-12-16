import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import CreateBooks from "./pages/createBooks"
import DeleteBooks from "./pages/deleteBooks"
import EditBooks from "./pages/editBooks"
import ShowBooks from "./pages/showBooks"

function App() {

  return (
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/books/create" element={<CreateBooks/>}/>
    <Route path="/books/delete/:id" element={<DeleteBooks/>} />
    <Route path="/books/edit/:id" element={<EditBooks/>} />
    <Route path="/books/details/:id" element={<ShowBooks/>} />
   </Routes>
  )
}

export default App
