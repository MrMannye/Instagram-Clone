/* eslint-disable @next/next/no-img-element */
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
    
    const lowerCase = (user) => {
        const newuser = (user.toLowerCase());
        return (<span>{newuser}</span>)
    }

    return (
        <div className='ml-8 mt-6 mr-2 w-full'>
            <div className='text-gray-500 text-sm w-full flex justify-between'>
                <span>Sugerencias para ti</span>
                <button className='text-black font-semibold text-sm'>Ver todo</button>
            </div>

            {suggestions.map((profile) => {
                return(
                    <div key={profile.id} className='flex items-center justify-between mt-3'>
                        <div className='flex text-sm items-center'>
                            <img src="https://source.unsplash.com/random" alt="Suggestion Image" className='w-9 h-9 rounded-full border p-[2px]' />
                            <div className='flex flex-col ml-2'>
                                {lowerCase(profile.username)}
                                <span className='text-xs text-gray-400'>{lowerCase(profile.company.name)}</span>
                            </div>
                        </div>
                        <button className='text-blue-500 text-sm font-medium'>Seguir</button>
                    </div>
                )
            })}
            
            {/* <div className='space-x-2 text-xs text-gray-400 mt-8'>
                <a href="">Información</a>
                <a href="">Ayuda</a>
                <a href="">Prensa</a>
                <a href="">API</a>
                <a href="">Empleo</a>
                <a href="">Privacidad</a>
                <a href="">Condiciones</a>
                <a href="">Ubicaciones</a>
                <a href="">Cuentas destacadas</a>
                <a href="">Hashtags</a>
                <a href="">Idioma</a>
                <a href="">Español (España)</a>
            </div> */}
        </div>
    )
}
