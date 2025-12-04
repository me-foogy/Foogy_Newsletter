import { useLocation, useNavigate} from "react-router-dom"

export default function readMore(){
    let location = useLocation();
    let navigate = useNavigate();
    const articleData = location.state;
    return(
    <article className="mx-10 lg:mx-(--m-side)">
    <button onClick={()=>navigate("/")}className="border rounded-3xl px-3 mt-10 align-right py-2 hover:cursor-pointer hover:border-[var(--hover-color)] hover:text-[var(--hover-color)] w-50">GO BACK</button>
    <h1 className="mt-10 lg:mt-6 text-3xl lg:text-5xl font-anonymous">{articleData.title}</h1>
    <p className="whitespace-pre-wrap text-justify mt-10 text-1xl lg:text-2xl font-anonymous">{articleData.body}</p>
    <div className="mt-10 mb-5">
        <p className='font-anonymous'>Author : {articleData.author}</p>
        <p className="font-anonymous">{articleData.date.split("").splice(0,10).join("")} | {articleData.views+1} Views</p>
    </div>
    </article>
    )

}