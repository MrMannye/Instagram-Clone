import faker from 'faker'
import { useState, useEffect } from 'react'

export default function Suggestions() {
    
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));
        setSuggestions(suggestions);
    }, [])
    
    return (
        <div className='ml-10 mt-6 w-full'>
            <div className='text-gray-400 text-sm w-full flex justify-between'>
                <span>Sugerencias para ti</span>
                <button className='text-black font-semibold text-xs'>Ver todo</button>
            </div>
        </div>
    )
}
