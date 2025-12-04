import{BrowserRouter, Routes, Route} from "react-router-dom"
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header';
import Articles from './components/articles';
import Footer from './components/footer';
import AddNewPost from './components/addNewPost';
import ReadMore from './components/readMore';
import { useEffect } from "react";

export default function App(){
    useEffect(()=> {
        toast.info("This site may take some time to load due to the server cold start",
            {
                position: "top-center",
                hideProgressBar: true,
                style:{
                    background: "#ffffff",
                    border: "2px solid #000000",
                    borderRadius: "16px",
                    padding: "10px 10px",
                    fontSize: "16px"
                }
            }
        )
    },[])

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