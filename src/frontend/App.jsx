import{BrowserRouter, Routes, Route} from "react-router-dom"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header';
import Articles from './components/articles';
import Footer from './components/footer';
import AddNewPost from './components/addNewPost';
import ReadMore from './components/readMore';
export default function App(){

    const url="http://localhost:5000";

    return(
        <BrowserRouter> 
            <ToastContainer/>
            <Header/>
            <Routes>

            <Route path='/' element={<Articles/>} />
            <Route path='/newPost' element={<AddNewPost/>}/>
            <Route path="/readMore" element={<ReadMore/>}></Route>

            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}