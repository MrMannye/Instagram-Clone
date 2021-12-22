import { useEffect, useState } from "react"
import Image from "next/image"
import Storie from "./Storie"
import faker from 'faker'

export default function Stories() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));
        setData(suggestions);
        console.log(suggestions);
    }, [])
    

    return (
        <div className="border-2 flex items-center p-2 mb-2 overflow-x-scroll">
            {
                data.map((profile) => {
                    return(
                        <Storie key={profile.id} user={profile.username} img={profile.avatar}/>
                    )
                })
            }
        </div>
    )
}
