/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import { useEffect, useState } from "react"
import Axios  from "axios";

export default function Storie({id,user, img}) {
    
    const [image, setImage] = useState([]);
    // const renderImage = () => {
    //     Axios.get("https://source.unsplash.com/random")
    //         .then((response) => {
    //             setImage(response.request.responseURL)
    //         })
    // }
    
    return (
        <div className="flex flex-col text-center text-xs m-2 mx-4">
            {/* {renderImage} */}
            <img src={"https://source.unsplash.com/random"}
            alt="Imagen Historia"
            loading="lazy"
            className="p-[1.5px] rounded-full h-14 w-16 border-red-500 border-2 hover:scale-110 transition transform duration-200 ease-out cursor-pointer"
            />
            <div>
                <p className="py-1 truncate w-14">{user}</p>
            </div>
            
        </div>
    )
}
