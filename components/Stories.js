import { useEffect, useState } from "react"
import Axios from 'axios'
import Storie from "./Storie"
import faker from 'faker'

export default function Stories() {
    const [data, setData] = useState([]);
    const [image, setImage] = useState([]);
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));
        setData(suggestions);
    }, [])

const renderImage = () => {
    Axios.get("https://source.unsplash.com/random")
        .then((response) => {
            setImage(response.request.responseURL)
        })
}


return (
    <div className="border-2 bg-white scrollbar-thin flex items-center p-2 mb-2 overflow-x-scroll">
        {
            data.map((profile) => {
                return (
                    <Storie key={profile.id} user={profile.username}/>
                )
            })
        }
    </div>
)
}
