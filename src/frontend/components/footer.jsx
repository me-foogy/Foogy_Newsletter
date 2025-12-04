import {useNavigate} from 'react-router-dom';
export default function Footer(){

const navigate=useNavigate();

    return(
        <footer>
            <hr className="bg-black border-2 mt-9"/>
            <div className="flex flex-row justify-between mx-[var(--m-side)] my-3">
                <div>
                    <p>THANK YOU FOR READING</p>
                    <p>FOOGY.CO</p>
                    <p className="mt-2 text-sm">Kathmandu, Nepal</p>
                    <p className="text-sm">copyright @ Sworup Karki</p>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="text-left">
                        <p>WANT TO CONTRIBUTE?</p>
                        <p className="text-sm">Be a part of something great</p>
                    </div>
                    <button onClick={()=>navigate("/newPost")} className="border-1 px-4 py-2 rounded-3xl mt-3 cursor-pointer hover:border-[var(--hover-color)] hover:text-[var(--hover-color)]">ADD ARTICLE</button>
                </div>
            </div>
        </footer>
    )
}