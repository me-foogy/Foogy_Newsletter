import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


export default function AddNewPost(){
    const url = import.meta.env.VITE_SERVER_URL; 
    const navigate=useNavigate();

    const [formDetails, setFormDetails] = useState({
        genre: [],
        title: "",
        body: "",
        author: "",
        views: 0,
    });

    const genreOptions = ["ACTION","SPORTS","POLITICS","TECHNOLOGY","NATIONAL","INTERNATIONAL","OTHERS"];

    function handleGenreChange(genre) { 
        setFormDetails(prev => { 
            if (prev.genre.includes(genre)) { 
                console.log('Removing', genre) 
                return { ...prev, genre: prev.genre.filter(g => g !== genre) }; 
            } 
            else if (prev.genre.length >= 3) { 
                    toast.error("Only a maximum of three genre can be selected",
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
                    ); 
                    return prev; 
                } 
            else { 
                console.log("Adding", genre); 
                return { ...prev, genre: [...prev.genre, genre] } 
            }; 
        }); 
    }

    function handleChange(e){
        const{name, value} = e.target;
        setFormDetails(prev=>({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit (e){
        e.preventDefault();
        try{
            const res= await axios.post(`${url}/posts`,formDetails)
            console.log("Data added successfully",res.data);
            navigate("/");
            toast.success(
                "The article has been published",
                {
                    position: "top-right",
                    hideProgressBar: true,
                    style:{
                        background: "#ffffff",
                        border: "2px solid #000000",
                        borderRadius: "16px",
                        padding: "10px 10px",
                        fontSize: "16px"
                    }
                }
            );
        }
        catch(err){
            console.error("Error has occured while adding the post:",err);
        }

    }

    return(
        <>
        <button onClick={()=>navigate("/")} className='mx-10 lg:mx-(--m-side) mt-5 border rounded-3xl px-3 py-2 cursor-pointer hover:border-[var(--hover-color)] hover:text-[var(--hover-color)]'>GO BACK</button>
        <form onSubmit={handleSubmit} className=" mx-10 lg:mx-[var(--m-side)] my-10 flex flex-col">

            <label className="block font-anonymous lg:my-3 font-bold">Enter Headline</label>
            <input type="text" name='title' value={formDetails.heading} onChange={handleChange} placeholder="Blog Title" required
              className="border rounded-md w-full px-4 py-2"/>


            <label className='block font-anonymous my-3 font-bold'>Select Genre (Select at least one genre)</label>
            <div className='flex gap-4 flex-col lg:flex-row lg:justify-evenly'>
            {genreOptions.map(eachGenre=>{
                return (<label className="flex items-center gap-2 cursor-pointer">
                <input
                    type="checkbox"
                    checked={formDetails.genre.includes(eachGenre)}
                    onChange={()=>handleGenreChange(eachGenre)}
                    className='appearance-none w-5 h-5 border border-gray-400 rounded-full checked:bg-green-500 checked:border-green-500 transition-colors duration-200'
                />
                <span>{eachGenre}</span>
                </label>
                )
            })}
            </div>


            <label className="block font-anonymous my-3 font-bold">Enter Body</label>
            <textarea type="text" name='body' value={formDetails.body} onChange={handleChange} placeholder="Blog Body (Only the first 200 letters will be visible in the home page)" required
              className="h-[200px] border rounded-md w-full px-4 py-2"/>

              <label className="block font-anonymous my-3 font-bold">Author Name</label>
            <input type="text" name='author' value={formDetails.author} onChange={handleChange} placeholder="Author" required
              className="border rounded-md w-full px-4 py-2"/>

            <div className='flex justify-end items-end'>
                <p className='text-red-500 font-anonymous font-bold pr-10'>*This action is permanent and article once published cannot be deleted</p>
                <button type='submit' className='border rounded-3xl px-5 lg:px-3 mt-10 align-right py-2 hover:cursor-pointer hover:border-[var(--hover-color)] hover:text-[var(--hover-color)] w-50'>ADD ARTICLE</button>
            </div>
            
        </form>
        </>
    )
}