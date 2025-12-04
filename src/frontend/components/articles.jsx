import {useEffect, useState} from "react";
import axios from "axios";


export default function Article(){

const [posts, setPosts] = useState([]);
const [tag, setTag] = useState('TRENDING');
const url="http://localhost:5000"
useEffect(()=>{
    const fetchPosts = async () =>{
        try{
            const res= await axios.get(`${url}/posts?tag=${tag}`,);
            console.log(res.data);
            setPosts(res.data);
        }
        catch(err){
            console.log("Error fetching posts:", err);
        }
    }
    fetchPosts(); //fetch all the posts from the backend server
},[tag])

function tagClick(tag){
    setTag(tag);
}



return(
    <>
    <nav>
                
                <ul className="flex flex-row mx-[var(--m-side)] mt-[10px] justify-evenly">
                    <li className="cursor-pointer hover:text-[var(--hover-color)]" onClick={()=>tagClick("TRENDING")}>TRENDING</li>
                    <li className="cursor-pointer hover:text-[var(--hover-color)]" onClick={()=>tagClick("ACTION")}>ACTION</li>
                    <li className="cursor-pointer hover:text-[var(--hover-color)]" onClick={()=>tagClick("SPORTS")}>SPORTS</li>
                    <li className="cursor-pointer hover:text-[var(--hover-color)]" onClick={()=>tagClick("POLITICS")}>POLITICS</li>
                    <li className="cursor-pointer hover:text-[var(--hover-color)]" onClick={()=>tagClick("TECHNOLOGY")}>TECHNOLOGY</li>
                    <li className="cursor-pointer hover:text-[var(--hover-color)]" onClick={()=>tagClick("NATIONAL")}>NATIONAL</li>
                    <li className="cursor-pointer hover:text-[var(--hover-color)]" onClick={()=>tagClick("INTERNATIONAL")}>INTERNATIONAL</li>
                    <li className="cursor-pointer hover:text-[var(--hover-color)]" onClick={()=>tagClick("OTHERS")}>OTHERS</li>
                    
                </ul>
    </nav>
    
    {(posts.length == 0)?
        <div className="flex justify-center items-center h-64">
        <p>{`There are no posts with ${tag} genre available at the moment`}</p>
        </div>

    :
    <div className=" mt-10 grid grid-cols-2 gap-x-6 gap-y-8 mx-[var(--m-side)]">
        {
            posts.map(item=> <EachArticle {...item}/>)
        }
    </div>
    }
    </>
)
}



function EachArticle(props){
    
    let genreSection = props.genre.map(genre=>{
                return <h6 className="border px-2 rounded-2xl mr-[10px]">{genre}</h6>
            })

    return(
        <>
        <article className="border-2 p-4 rounded-2xl bg-white">
            {/* section for genre */}
            <div className="flex flex-row">{genreSection}</div>
            <h1 className="mt-5 text-4xl">{props.title}</h1>
            <p className="mt-2 text-justify">{props.body.split("").slice(0,200).join("")+" ..."}</p>
            <div className="flex flex-row justify-between mt-5">
                <div>
                <p className='mb-1'>Author : {props.author}</p>
                <p>{props.date.split("").splice(0,10).join("")} | {props.views} Views</p>
                </div>
                <button className="border px-4 py-2 rounded-3xl cursor-pointer hover:border-[var(--hover-color)] hover:text-[var(--hover-color)]">Read More</button>
            </div>

        </article>
        </>
    )
}